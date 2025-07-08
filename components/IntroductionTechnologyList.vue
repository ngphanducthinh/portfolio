<script lang="ts" setup>
/**
 * Data
 */
const stickerRefs = ref<HTMLDivElement[]>([]);
const stickers = ref([
  {
    image: "/images/nuxt.svg",
    position: {
      top: 60,
      left: 30,
    },
  },
  {
    image: "/images/sass.svg",
    position: {
      top: 60,
      right: 240,
    },
  },
  {
    image: "/images/storybook.png",
    position: {
      top: 150,
      left: 210,
    },
  },
  {
    image: "/images/typescript.png",
    position: {
      top: 180,
      right: 440,
    },
  },
  {
    image: "/images/vite.svg",
    position: {
      top: 230,
      left: 60,
    },
  },
  {
    image: "/images/vitest.svg",
    position: {
      top: 220,
      right: 280,
    },
  },
  {
    image: "/images/vue.png",
    position: {
      top: 50,
      right: 450,
    },
  },
]);
const MAX_MOVEMENT = 16; // 32px
const centerPosition: { x: number; y: number } = {
  x: 0,
  y: 0,
};

/**
 * Methods
 */
const onMousemove = (e: MouseEvent) => {
  const mousePosition = { x: e.clientX, y: e.clientY };
  const mousePositionOverCenter = {
    x: mousePosition.x - centerPosition.x,
    y: mousePosition.y - centerPosition.y,
  };
  const stickerTranslate = {
    x: (mousePositionOverCenter.x * MAX_MOVEMENT) / centerPosition.x,
    y: (mousePositionOverCenter.y * MAX_MOVEMENT) / centerPosition.y,
  };
  stickerRefs.value.forEach((sticker) => {
    sticker.style.transform = `translate(${stickerTranslate.x}px, ${stickerTranslate.y}px)`;
  });
};

/**
 * Lifecycle hooks
 */
onMounted(() => {
  centerPosition.x = Math.round(window.innerWidth / 2);
  centerPosition.y = Math.round(window.innerHeight / 2);
  window.addEventListener("mousemove", onMousemove);
});
onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onMousemove);
});
</script>

<template>
  <div class="relative">
    <div
      v-for="sticker in stickers"
      :key="sticker.image"
      ref="stickerRefs"
      class="sticker animation-land"
      :style="{
        top: `${sticker.position.top}px`,
        left: `${sticker.position.left}px`,
        right: `${sticker.position.right}px`,
      }"
    >
      <img :src="sticker.image" class="sticker__img" :alt="sticker.image" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.sticker {
  will-change: transform;
  position: absolute;
  transition:
    top 1s,
    left 1s;
}

.sticker__img {
  height: 80px;
}
</style>
