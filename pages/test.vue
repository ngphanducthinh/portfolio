<script lang="ts" setup></script>

<template>
  <div class="avatar avatar-circle animation-rotate">
    <img
      src="https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"
      alt="image"
    />
  </div>

  <div class="avatar avatar-circle animation-land">
    <img
      src="https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"
      alt="image"
    />
  </div>

  <div class="avatar avatar-circle animation-slide-down">
    <img
      src="https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"
      alt="image"
    />
  </div>

  <div class="avatar avatar-circle animation-iris-out-circle">
    <img
      src="https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"
      alt="image"
    />
  </div>

  <div class="avatar animation-iris-out">
    <img
      src="https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"
      alt="image"
    />
  </div>

  <div
    class="avatar avatar-circle animation-chevron hover:animation-chevron--reverse"
  >
    <img
      src="https://sm.ign.com/t/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.300.jpg"
      alt="image"
    />
  </div>
</template>

<style scoped lang="scss">
.avatar {
  width: 200px;
  height: 200px;

  &--circle {
    clip-path: circle(50% at 50% 50%);
  }
}
</style>
