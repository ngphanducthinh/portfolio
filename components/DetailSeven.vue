<script lang="ts" setup>
import { useAnimation } from "#imports";
import TagListItem from "~/components/Base/TagListItem.vue";
import TagList from "~/components/Base/TagList.vue";
import CardSubtitle from "~/components/Base/CardSubtitle.vue";
import CardTitle from "~/components/Base/CardTitle.vue";

/**
 * Data
 */
const technologies = ref(["C#", "WPF", "XAML"]);
const nextStepRef = ref<HTMLElement | null>(null);
const projectInfoRef = ref<HTMLElement | null>(null);
useAnimation([nextStepRef, projectInfoRef]);
</script>

<template>
  <CardTwoThree>
    <template #topLeft> </template>
    <template #topRight> </template>
    <template #bottomLeft>
      <div class="flex flex-wrap gap-4" ref="projectInfoRef">
        <CardTitle>Global CyberSoft</CardTitle>
        <TagList>
          <TagListItem v-for="(technology, i) in technologies" :key="i">
            {{ technology }}
          </TagListItem>
        </TagList>
        <CardSubtitle>
          My very first step into a professional software engineering career 😁.
        </CardSubtitle>
      </div>
    </template>
    <template #bottomRight>
      <div
        class="flex h-full flex-wrap items-end justify-end"
        ref="nextStepRef"
      >
        <div class="flex items-center justify-end gap-x-4">
          <div class="flex items-center rounded-3xl bg-white px-4 py-1">
            <span class="text-gray-600">{{ "Next, check out my" }}</span>
            &nbsp;
            <span class="font-semibold">{{ "LinkedIn" }}</span>
          </div>
          <a
            href="https://www.linkedin.com/in/ngphanducthinh/"
            class="animation-rotate--infinite flex h-24 w-24 items-center justify-center rounded-full bg-gray-200 hover:drop-shadow"
            target="_blank"
          >
            <BaseIcon
              icon="linkedin-in"
              class="text-[#0a66c2]"
              :width="28"
              :height="28"
            />
          </a>
        </div>
      </div>
    </template>
  </CardTwoThree>
</template>
