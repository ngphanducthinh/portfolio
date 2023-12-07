<script lang="ts" setup>
/**
 * Methods
 */
const downloadResume = () => {
  console.log("Download resume!");
};
</script>

<template>
  <CardTwoThree>
    <template #topLeft></template>
    <template #topRight></template>
    <template #bottomLeft></template>
    <template #bottomRight>
      <div class="flex h-full flex-wrap items-end justify-end">
        <div class="flex flex-wrap items-center justify-end gap-4">
          <div class="animation-slide-down">
            <div class="flex items-center rounded-3xl bg-white px-4 py-1">
              <span class="text-gray-600">{{ "Check out my" }}</span>
              &nbsp;
              <span class="font-semibold">{{ "Résumé" }}</span>
            </div>
          </div>
          <div
            class="animation-slide-down flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-black hover:bg-black/80"
            @click="downloadResume"
          >
            <BaseIcon
              icon="arrow-down-to-line"
              :height="36"
              :width="36"
              color="white"
            />
          </div>
        </div>
      </div>
    </template>
  </CardTwoThree>
</template>
