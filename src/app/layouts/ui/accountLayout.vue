<script setup lang="ts">
import Sidebar from '@widgets/sidebar'
</script>

<template>
  <div class="account">
    <Sidebar />
    <div class="account__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.account {
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: var(--gap-m);
  padding-right: 30px;

  &__content {
    padding-top: var(--gap-m);
  }
}
</style>
