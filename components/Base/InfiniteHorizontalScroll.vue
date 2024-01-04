<script setup lang="ts">
//#region Props
interface Props {
  direction?: "left" | "right";
  speed?: "fast" | "slow";
  gap?: string;
  innerClass?: string;
}
const props = withDefaults(defineProps<Props>(), {
  direction: "left",
  speed: "fast",
  gap: "1rem",
  innerClass: "",
});
//#endregion

//#region Data
const scrollerRef = ref<HTMLElement | null>(null);
const scrollerInnerRef = ref<HTMLElement | null>(null);
const animationGap = computed(() => {
  const res = separateNumberAndUnit(props.gap);
  return res ? `${res.number / 2}${res.unit}` : `0rem`; // a half of "gap" between items
});
//#endregion

//#region Methods
const separateNumberAndUnit = (str: string) => {
  /**
   * ^(\d+\.?\d*)(\D+)$ matches the start of the string (^), followed by one or more digits (\d+),
   * optionally followed by a decimal point and more digits (\.?\d*),
   * followed by one or more non-digits (\D+), and finally the end of the string ($)
   */
  const regex = /^(\d+\.?\d*)(\D+)$/;
  const match = str.match(regex);
  if (match) {
    const number = parseFloat(match[1]);
    const unit = match[2];
    return { number, unit };
  }
  return null;
};
const addAnimation = () => {
  if (!scrollerRef.value || !scrollerInnerRef.value) {
    return;
  }

  // Make an array from the elements within `.scroller-inner`
  const scrollerContent = Array.from(scrollerInnerRef.value.children);

  // For each item in the array, clone it
  // add aria-hidden to it
  // add it into the `.scroller-inner`
  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true) as HTMLElement;
    duplicatedItem.setAttribute("aria-hidden", "true");
    scrollerInnerRef.value!.appendChild(duplicatedItem);
  });
};
//#endregion

//#region Lifecycle hooks
onMounted(() => {
  // If a user hasn't opted in for reduced motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
});
//#endregion
</script>

<template>
  <div
    ref="scrollerRef"
    class="scroller"
    data-animated="true"
    :data-direction="props.direction"
    :data-speed="props.speed"
  >
    <div
      ref="scrollerInnerRef"
      class="scroller__inner"
      :class="props.innerClass"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroller {
  max-width: 100%;
}

.scroller__inner {
  padding-block: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: v-bind("props.gap");
}

.scroller[data-animated="true"] {
  overflow: hidden;
  mask: linear-gradient(90deg, transparent, white 20%, white 80%, transparent);
}

.scroller[data-animated="true"] .scroller__inner {
  width: max-content;
  flex-wrap: nowrap;
  animation: scroll var(--_animation-duration, 40s)
    var(--_animation-direction, forwards) linear infinite;
}

.scroller[data-direction="right"] {
  --_animation-direction: reverse;
}

.scroller[data-direction="left"] {
  --_animation-direction: forwards;
}

.scroller[data-speed="fast"] {
  --_animation-duration: 20s;
}

.scroller[data-speed="slow"] {
  --_animation-duration: 60s;
}

@keyframes scroll {
  to {
    transform: translate(calc(-50% - v-bind("animationGap")));
  }
}
</style>
