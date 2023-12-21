<script setup lang="ts">
import { useAnimation } from "#imports";

const listRef = ref<HTMLDivElement | null>(null);
useAnimation([listRef]);
</script>
<template>
  <ol class="space-y-4 text-xl" ref="listRef">
    <slot />
  </ol>
</template>