<script lang="ts" setup>
import { modsJoin } from '@shared/utils'

interface Props {
  mods?: string
  tag?: string
}

const { mods = '', tag } = defineProps<Props>()
</script>

<template>
  <component :is="tag ? tag : 'span'" :class="['badge', modsJoin(mods, 'badge')]">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@layer block {
  .badge {
    @include font(15px, 1.47, 700);

    background-color: cl(surface);
    padding: 4px 14px;
    color: cl(text, 0.8);
    border-radius: var(--radius-xxs);
  }
}

@layer mods {
  .badge--alt {
    background-color: cl(surface-fourth);
  }
}
</style>
