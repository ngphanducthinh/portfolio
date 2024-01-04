<script lang="ts" setup></script>

<template>
  <BaseCard class="grid-cols-5 grid-rows-5 gap-4">
    <!--Automatically expand top to bottom or reverse if one of the other one is missing-->
    <div
      v-if="$slots.topLeft"
      :class="['col-span-2', $slots.bottomLeft ? 'row-span-3' : 'row-span-5']"
    >
      <slot name="topLeft" />
    </div>

    <div
      v-if="$slots.topRight()"
      :class="['col-span-3', $slots.bottomRight ? 'row-span-3' : 'row-span-5']"
    >
      <slot name="topRight" />
    </div>

    <div
      v-if="$slots.bottomLeft"
      :class="['col-span-2', $slots.topLeft ? 'row-span-2' : 'row-span-5']"
    >
      <slot name="bottomLeft" />
    </div>

    <div
      v-if="$slots.bottomRight"
      :class="['col-span-3', $slots.topRight() ? 'row-span-2' : 'row-span-5']"
    >
      <slot name="bottomRight" />
    </div>
  </BaseCard>
</template>
