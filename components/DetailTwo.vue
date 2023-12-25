<script lang="ts" setup>
import { useAnimation } from "#imports";
import BaseList from "~/components/Base/List.vue";

/**
 * Data
 */
const screenShotSectionRef = ref<HTMLElement | null>(null);
const projectInfoRef = ref<HTMLElement | null>(null);
useAnimation([screenShotSectionRef, projectInfoRef]);
</script>

<template>
  <CardTwoThree>
    <template #topLeft>
      <BaseList>
        <BaseListItem>
          Develop a "RangeGroup" component that displays multiple test result
          ranges, such as 0-10 (Low), 10-20 (Normal), and 20-∞ (High).
        </BaseListItem>
        <BaseListItem>
          Develop chart to illustrate multiple test result values over time
          using Chart.js.
        </BaseListItem>
      </BaseList>
    </template>
    <template #topRight>
      <div class="flex h-full justify-end gap-4" ref="screenShotSectionRef">
        <img
          src="/images/detail-two/diag-test-result-viewer.png"
          alt="diag-test-result-viewer"
          class="h-full rounded-2xl"
        />
        <img
          src="/images/detail-two/diag-test-result-viewer-2.png"
          alt="diag-test-result-viewer-2"
          class="mt-4 h-full rounded-2xl"
        />
        <img
          src="/images/detail-two/diag-test-result-viewer-3.png"
          alt="diag-test-result-viewer-3"
          class="h-full rounded-2xl"
        />
        <img
          src="/images/detail-two/diag-test-result-viewer-4.png"
          alt="diag-test-result-viewer-4"
          class="mt-4 h-full rounded-2xl"
        />
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex flex-wrap gap-4" ref="projectInfoRef">
        <h1 class="w-full text-3xl font-semibold">Diag - Test Result Viewer</h1>
        <div class="flex w-full gap-4">
          <div class="rounded-3xl border p-2">
            {{ "Vue 3" }}
          </div>
          <div class="rounded-3xl border p-2">
            {{ "SCSS" }}
          </div>
          <div class="rounded-3xl border p-2">
            {{ "Typescript" }}
          </div>
          <div class="rounded-3xl border p-2">
            {{ "Vitest" }}
          </div>
          <div class="rounded-3xl border p-2">
            {{ "Vite" }}
          </div>
        </div>
        <div class="w-full text-gray-600">
          {{
            `A complete shared "TestResultViewer" component, which is used across multiple teams, indicates detailed & friendly UI for users can read & understand their test results easily.`
          }}
        </div>
      </div>
    </template>
    <template #bottomRight></template>
  </CardTwoThree>
</template>
