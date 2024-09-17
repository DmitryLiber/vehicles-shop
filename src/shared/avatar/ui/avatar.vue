<script lang="ts" setup>
import { modsJoin } from '@shared/utils'
interface Props {
  mods?: string
  img: string
}

const { mods = '', img } = defineProps<Props>()
</script>

<template>
  <div :class="['avatar', modsJoin(mods, 'avatar')]" :style="`--icon: url(/images/${img})`">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@layer block {
  .avatar {
    @include font(15px, 1.47, 500);

    display: flex;
    align-items: center;
    gap: 14px;

    &::before {
      content: '';
      background-image: var(--icon);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: var(--radius-xxs);
      display: block;
      width: 46px;
      aspect-ratio: 1;
    }
  }
}
</style>
