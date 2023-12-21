<script setup lang="ts">
import Introduction from "~/components/Introduction.vue";
import DetailOne from "~/components/DetailOne.vue";
import DetailTwo from "~/components/DetailTwo.vue";
import DetailThree from "~/components/DetailThree.vue";
import DetailFour from "~/components/DetailFour.vue";
import DetailFive from "~/components/DetailFive.vue";
import DetailSix from "~/components/DetailSix.vue";
import DetailSeven from "~/components/DetailSeven.vue";
import DetailEight from "~/components/DetailEight.vue";

/**
 * Data
 */
const cardRefs = ref<HTMLDivElement[]>([]);
const cardWrapperRefs = ref<HTMLDivElement[]>([]);
const frozenGap = 400;
const frozenGapScaleBlur = frozenGap * 0.4;
let cardWrapperHeight = 0;
let breakPoints: number[] = [];
const cards = shallowRef([
  Introduction,
  DetailOne,
  DetailTwo,
  DetailThree,
  DetailFour,
  DetailFive,
  DetailSix,
  DetailSeven,
  DetailEight,
]);

/**
 * Methods
 */
const isScrollingWithinGap = (index: number, gap: number) =>
  index > 0 &&
  breakPoints[index - 1] <= scrollY &&
  scrollY < breakPoints[index - 1] + gap;

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
  cardWrapperRefs.value[index].style.filter = `blur(${
    (1 - scaleValue) * 12
  }px)`;
};

const resetCardStyle = (index: number) => {
  cardRefs.value[index].style.transform = `scale(1)`;
  cardWrapperRefs.value[index].style.filter = `blur(0)`;
};

const updateNextCardStyle = (
  index: number,
  currentScrollYInsideCard: number,
) => {
  const translateY = Math.max(0, frozenGap - currentScrollYInsideCard);
  const translateYRatio = 0.2;
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

onMounted(() => {
  setTimeout(() => {
    scrollToTop();
  });
  cardWrapperHeight = cardWrapperRefs.value[0].offsetHeight;
  breakPoints = cardWrapperRefs.value.map(
    (_, i) => cardWrapperHeight * (i + 1),
  );

  window.addEventListener("scroll", function () {
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
  });
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
  padding: 24px;
  height: 100dvh;
  position: sticky;
  top: 0;
  background-color: transparent;
  transition: transform 200ms ease-out;
}

.card {
  border-radius: 16px;
  height: calc(100dvh - 48px);
  transition: transform 120ms ease-out;
  background-color: whitesmoke;
}
</style>