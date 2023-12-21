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
          Improve web performance using asynchronous components and image
          lazy-loading, based on Lighthouse reports.
        </BaseListItem>
      </BaseList>
    </template>
    <template #topRight>
      <div class="flex h-full justify-end gap-4" ref="screenShotSectionRef">
        <img
          src="/images/detail-one/dashboard.png"
          alt="expense-management-dashboard"
          class="h-full rounded-2xl"
        />
        <img
          src="/images/detail-one/recent-months-filter.png"
          alt="expense-management-dashboard"
          class="mt-4 h-full rounded-2xl"
        />
        <img
          src="/images/detail-one/recent-months.png"
          alt="expense-management-recent-months"
          class="h-full rounded-2xl"
        />
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex flex-wrap gap-4" ref="projectInfoRef">
        <h1 class="w-full text-3xl font-semibold">
          Precio Fishbone - Knowledge Management System
        </h1>
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
            {{ "Cypress" }}
          </div>
        </div>
        <div class="w-full text-gray-600">
          {{
            "Enable bank customers to track and manage their expenses. It allows customers to categorize their expenses, set budgets, and monitor their spending habits."
          }}
        </div>
      </div>
    </template>
    <template #bottomRight></template>
  </CardTwoThree>
</template>