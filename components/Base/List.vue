<script setup lang="ts">
import { useAnimation } from "#imports";

const listRef = ref<HTMLDivElement | null>(null);
useAnimation([listRef]);
</script>
<template>
  <ol class="text-xl" ref="listRef">
    <slot />
  </ol>
</template>
