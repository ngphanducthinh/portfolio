<script lang="ts" setup></script>

<template>
  <BaseCard class="grid-cols-5 grid-rows-5 gap-4">
    <div class="col-span-2 row-span-3">
      <slot name="topLeft" />
    </div>
    <div class="col-span-3 row-span-3">
      <slot name="topRight" />
    </div>
    <div class="col-span-2 row-span-2">
      <slot name="bottomLeft" />
    </div>
    <div class="col-span-3 row-span-2">
      <slot name="bottomRight" />
    </div>
  </BaseCard>
</template>
