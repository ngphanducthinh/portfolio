<script setup lang="ts">
onMounted(() => {
  const cards = [...document.getElementsByClassName("card")];
  const cardWrappers = [...document.getElementsByClassName("card-wrapper")];

  const frozenGap = 400;
  const frozenGapScaleBlur = frozenGap * 0.4;
  const cardWrapperHeight = cardWrappers[0].offsetHeight;
  const breakPoints = cardWrappers.map((_, i) => cardWrapperHeight * (i + 1));

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const index = Math.floor(scrollY / cardWrapperHeight);
    const currentScrollYInsideCard = scrollY - cardWrapperHeight * index;

    if (isScrollingWithinGap(index, frozenGap)) {
      if (index < cardWrappers.length - 1) {
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

  const isScrollingWithinGap = (index, gap) =>
    index > 0 &&
    breakPoints[index - 1] <= scrollY &&
    scrollY < breakPoints[index - 1] + gap;

  const updateCardStyle = (index, currentScrollYInsideCard) => {
    const currentScrollYInsideCardActual = Math.max(
      0,
      currentScrollYInsideCard - frozenGapScaleBlur,
    );
    const scaleValue = 1 - currentScrollYInsideCardActual / cardWrapperHeight;
    cards[index].style.transform = `scale(${Math.max(0.6, scaleValue)})`;
    cardWrappers[index].style.filter = `blur(${(1 - scaleValue) * 12}px)`;
  };

  const resetCardStyle = (index) => {
    cards[index].style.transform = `scale(1)`;
    cardWrappers[index].style.filter = `blur(0)`;
  };

  const updateNextCardStyle = (index, currentScrollYInsideCard) => {
    const translateY = Math.max(0, frozenGap - currentScrollYInsideCard);
    const translateYRatio = 0.2;
    cardWrappers[index + 1].style.transform = `translateY(${
      translateY * translateYRatio
    }px)`;
  };

  const resetNextCardStyle = (index) => {
    cardWrappers[index + 1].style.transform = `translateY(0)`;
  };
});
</script>

<template>
  <div class="card-stack">
    <div class="card-wrapper">
      <div class="card">Card 1</div>
    </div>
    <div class="card-wrapper">
      <div class="card">Card 2</div>
    </div>
    <div class="card-wrapper">
      <div class="card">Card 3</div>
    </div>
    <div class="card-wrapper">
      <div class="card">Card 4</div>
    </div>
    <div class="card-wrapper">
      <div class="card">Card 5</div>
    </div>
    <div class="card-wrapper">
      <div class="card">Card 6</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-stack {
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
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100dvh - 48px);
  transition: transform 120ms ease-out;
}

.card-wrapper:first-child .card {
  background-color: slategray;
}

.card-wrapper:nth-child(2) .card {
  background-color: yellowgreen;
}

.card-wrapper:nth-child(3) .card {
  background-color: saddlebrown;
}

.card-wrapper:nth-child(4) .card {
  background-color: cornflowerblue;
}

.card-wrapper:nth-child(5) .card {
  background-color: orange;
}

.card-wrapper:nth-child(6) .card {
  background-color: palevioletred;
}
</style>
