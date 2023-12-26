<script lang="ts" setup>
/**
 * Props
 */
export interface Props {
  width?: number;
  height?: number;
  icon: string;
}

const props = withDefaults(defineProps<Props>(), {
  width: 16,
  height: 16,
});
</script>

<template>
  <svg
    :height="props.height"
    :width="props.width"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use :href="`/icons/${props.icon}.svg#${props.icon}`" />
  </svg>
</template>
