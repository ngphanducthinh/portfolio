<script lang="ts" setup>
</script>

<template>
  <BaseCard class="grid-cols-3 grid-rows-5 gap-4">
    <div class="col-span-3 md:col-span-2 row-span-3">
      <slot name="topLeft" />
    </div>
    <div class="col-span-1 row-span-3 hidden md:block">
      <slot name="topRight" />
    </div>
    <div class="col-span-3 md:col-span-2 row-span-2">
      <slot name="bottomLeft" />
    </div>
    <div class="col-span-1 row-span-2 hidden md:block">
      <slot name="bottomRight" />
    </div>
  </BaseCard>
</template>
