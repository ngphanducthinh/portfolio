<script lang="ts" setup></script>

<template>
  <CardTwoOne>
    <template #topLeft>
      <IntroductionTechnologyList />
    </template>
    <template #topRight>
      <div class="mt-3 flex flex-wrap items-center justify-end gap-4">
        <div class="animation-slide-down">
          <div class="flex items-center rounded-3xl bg-white px-4 py-1">
            <span class="text-gray-600">{{ "Certified" }}</span>
            &nbsp;
            <span class="font-semibold">{{ "Vue.js Developer" }}</span>
          </div>
        </div>

        <a
          href="https://certificates.dev/vuejs/certificates/9a23b63b-5b56-4f47-8c7e-3760903b1ed2"
          class="animation-slide-down hover:drop-shadow"
          target="_blank"
        >
          <img
            src="https://certificates.dev/images/developer.svg"
            alt="Certified Vue.js Developer"
            class="h-16 w-16"
          />
        </a>
      </div>

      <div class="mt-3 flex flex-wrap items-center justify-end gap-4">
        <div class="animation-slide-down">
          <div class="flex items-center rounded-3xl bg-white px-4 py-1">
            <span class="text-gray-600">{{ "Personal" }}</span>
            &nbsp;
            <span class="font-semibold">{{ "Design System" }}</span>
          </div>
        </div>

        <a
          href="https://ngphanducthinh.github.io/7pmlabs-design-system"
          class="animation-slide-down flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#c2e59c] to-[#64b3f4] hover:drop-shadow"
          target="_blank"
        >
          <BaseIcon
            icon="paintbrush-solid"
            :width="32"
            :height="32"
            class="text-white"
          />
        </a>
      </div>
    </template>
    <template #bottomLeft>
      <div class="flex h-full flex-wrap">
        <div class="animation-slide-down w-full">
          <h1 class="text-4xl font-semibold">
            {{ "Nguyen Phan Duc Thinh" }}
          </h1>
          <h2 class="mt-2 text-2xl font-semibold text-gray-600">
            {{ "Senior Frontend Engineer" }}
          </h2>
        </div>
        <div class="flex w-full items-end gap-2">
          <div
            class="animation-chevron h-[140px] w-[140px] rounded-full bg-[url('/images/avatar.jpg')] bg-cover bg-center bg-no-repeat"
          />
          <a
            href="https://www.linkedin.com/in/ngphanducthinh/"
            class="animation-chevron flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 hover:drop-shadow"
            target="_blank"
          >
            <BaseIcon icon="linkedin-in" />
          </a>

          <a
            href="https://github.com/ngphanducthinh"
            class="animation-chevron flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 hover:drop-shadow"
            target="_blank"
          >
            <BaseIcon icon="github" />
          </a>
        </div>
      </div>
    </template>
    <template #bottomRight>
      <div class="flex h-full flex-col flex-wrap justify-between">
        <div
          class="animation-slide-down underline-smooth text-2xl text-gray-800"
        >
          <span>
            Possess a professional background of 8 years as a Software
            Developer, with a primary emphasis on Frontend development for 7
            years.
          </span>
        </div>
        <div class="flex justify-end">
          <BaseIcon
            icon="hand-point-down"
            :width="36"
            :height="36"
            class="animate-bounce text-[#6b7280]"
          />
        </div>
      </div>
    </template>
  </CardTwoOne>
</template>

<style scoped lang="scss">
.underline-smooth {
  span {
    background-image: linear-gradient(90deg, #c2e59c, #64b3f4);
    background-size: 0 3px;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 600ms ease;
  }

  &:hover {
    span {
      background-size: 100% 3px;
    }
  }
}
</style>
