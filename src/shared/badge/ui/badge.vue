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

  .badge--success {
    background-color: cl(surface-fifth);
    color: cl(success);
  }

  .badge--icon-check {
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
      @include variable-icon(url('/images/i-check.svg'), 16px, cl(success));
    }
  }
}
</style>
