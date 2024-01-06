<script setup lang="ts">
import Introduction from "~/components/Introduction.vue";
import DetailOne from "~/components/DetailOne.vue";
import DetailTwo from "~/components/DetailTwo.vue";
import DetailThree from "~/components/DetailThree.vue";
import DetailFour from "~/components/DetailFour.vue";
import ReadMore from "~/components/ReadMore.vue";

/**
 * Data
 */
const cardRefs = ref<HTMLDivElement[]>([]);
const cardWrapperRefs = ref<HTMLDivElement[]>([]);
const frozenGap = 400;
const frozenGapScaleBlur = frozenGap * 0.4;
let cardWrapperHeight = 0;
let breakpoints: number[] = [];
const cards = shallowRef([
  Introduction,
  DetailOne,
  DetailTwo,
  DetailThree,
  DetailFour,
  ReadMore,
]);

/**
 * Methods
 */
const isScrollingWithinGap = (index: number, gap: number) =>
  index > 0 &&
  breakpoints[index - 1] <= scrollY &&
  scrollY < breakpoints[index - 1] + gap;

const updateCardStyle = (index: number, currentScrollYInsideCard: number) => {
  const currentScrollYInsideCardActual = Math.max(
    0,
    currentScrollYInsideCard - frozenGapScaleBlur,
  );
  const scaleValue = 1 - currentScrollYInsideCardActual / cardWrapperHeight;

  cardRefs.value[index].style.transform = `scale(${Math.max(
    0.65,
    scaleValue,
  )})`;
  /**
   * NOTE: This "filter: blur" causes lag scrolling, disable it for now
   */
  // cardWrapperRefs.value[index].style.filter = `blur(${
  //   (1 - scaleValue) * 12
  // }px)`;
};

const resetCardStyle = (index: number) => {
  cardRefs.value[index].style.transform = `scale(1)`;
  /**
   * NOTE: This "filter: blur" causes lag scrolling, disable it for now
   */
  // cardWrapperRefs.value[index].style.filter = `blur(0)`;
};

const updateNextCardStyle = (
  index: number,
  currentScrollYInsideCard: number,
) => {
  const translateY = Math.max(0, frozenGap - currentScrollYInsideCard);
  const translateYRatio = 0.8;
  cardWrapperRefs.value[index + 1].style.transform = `translateY(${
    translateY * translateYRatio
  }px)`;
};

const resetNextCardStyle = (index: number) => {
  cardWrapperRefs.value[index + 1].style.transform = `translateY(0)`;
};

const scrollToTop = () => {
  if (window) {
    window.scrollTo({ top: 0 });
  }
};

const onScroll = () => {
  const scrollY = window.scrollY;
  const index = Math.floor(scrollY / cardWrapperHeight);
  const currentScrollYInsideCard = scrollY - cardWrapperHeight * index;

  if (isScrollingWithinGap(index, frozenGap)) {
    if (index < cardWrapperRefs.value.length - 1) {
      updateNextCardStyle(index, currentScrollYInsideCard);
    }
  } else {
    if (index === 0) {
      updateNextCardStyle(index, currentScrollYInsideCard);
    } else {
      resetNextCardStyle(index);
    }
  }

  if (isScrollingWithinGap(index, frozenGapScaleBlur)) {
    resetCardStyle(index);
  } else {
    updateCardStyle(index, currentScrollYInsideCard);
  }
};

onMounted(() => {
  setTimeout(() => {
    scrollToTop();
  });
  cardWrapperHeight = cardWrapperRefs.value[0].offsetHeight;
  breakpoints = cardWrapperRefs.value.map(
    (_, i) => cardWrapperHeight * (i + 1),
  );

  window.addEventListener("scroll", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div class="card-stack">
    <div
      v-for="(card, index) in cards"
      :key="index"
      ref="cardWrapperRefs"
      class="card-wrapper"
    >
      <div ref="cardRefs" class="card">
        <component :is="card" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-stack {
  background-color: black;
}

.card-wrapper {
  padding: 32px;
  height: 100dvh;
  position: sticky;
  top: 0;
  background-color: transparent;
  transition: transform 200ms ease-out;
}

.card {
  border-radius: 16px;
  height: calc(100dvh - 64px);
  transition: transform 120ms ease-out;
  background-color: whitesmoke;
}
</style>
