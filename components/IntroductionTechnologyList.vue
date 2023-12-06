<script lang="ts" setup>
onMounted(() => {
  const stickers = [...document.getElementsByClassName("sticker")];
  const centerPos = {
    x: Math.round(window.innerWidth / 2),
    y: Math.round(window.innerHeight / 2),
  };
  const maxMovement = 32;

  window.addEventListener("mousemove", (e) => {
    const mousePos = { x: e.clientX, y: e.clientY };
    const mousePosOverCenter = {
      x: mousePos.x - centerPos.x,
      y: mousePos.y - centerPos.y,
    };
    const stickerTranslate = {
      x: (mousePosOverCenter.x * maxMovement) / centerPos.x,
      y: (mousePosOverCenter.y * maxMovement) / centerPos.y,
    };

    stickers.forEach((sticker) => {
      sticker.style.transform = `translate(${stickerTranslate.x}px, ${stickerTranslate.y}px)`;
    });
  });
});
</script>

<template>
  <div class="relative">
    <div class="sticker animation-land">
      <img
        src="https://static-00.iconduck.com/assets.00/storybook-icon-icon-1645x2048-ir1mrc43.png"
        class="sticker__img"
      />
    </div>

    <div class="sticker animation-land">
      <img
        src="https://sass-lang.com/assets/img/logos/logo.svg"
        class="sticker__img"
      />
    </div>

    <div class="sticker animation-land">
      <img src="https://vitest.dev/logo.svg" class="sticker__img" />
    </div>

    <div class="sticker animation-land">
      <img src="https://vitejs.dev/logo.svg" class="sticker__img" />
    </div>

    <div class="sticker animation-land">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png"
        class="sticker__img"
      />
    </div>

    <div class="sticker animation-land">
      <img
        src="https://nuxt.com/assets/design-kit/icon-green.svg"
        class="sticker__img"
      />
    </div>

    <div class="sticker animation-land">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png"
        class="sticker__img"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.sticker {
  will-change: transform;
  position: absolute;
}

.sticker:first-child {
  top: 80px;
  left: 100px;
}

.sticker:nth-child(2) {
  top: 80px;
  right: 180px;
}

.sticker:nth-child(3) {
  top: 150px;
  left: 210px;
}

.sticker:nth-child(4) {
  top: 180px;
  right: 390px;
}

.sticker:nth-child(5) {
  top: 210px;
  left: 80px;
}

.sticker:nth-child(6) {
  top: 220px;
  right: 280px;
}

.sticker:nth-child(7) {
  top: 50px;
  right: 450px;
}

.sticker__img {
  height: 80px;
}
</style>
