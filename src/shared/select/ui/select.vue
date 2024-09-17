<script setup lang="ts">
import { ref } from 'vue'
import { modsJoin } from '@shared/utils'

type TOption = {
  name: string
  value: string
  isSelected: boolean | null
}

interface Props {
  mods?: string
  options: Array<any>
  onChange?: (value: string) => void
}

const { mods = '', options, onChange = () => {} } = defineProps<Props>()

const isOpen = ref(false)
const allOptions = ref(options as TOption[])

const changeSelectedOption = (valueOption: string) => {
  const isSelectedOption = allOptions.value.find((option) => option.isSelected) as TOption
  const unSelectedOption = allOptions.value.find(
    (option) => option.value === valueOption
  ) as TOption

  isSelectedOption.isSelected = false
  unSelectedOption.isSelected = true

  allOptions.value = allOptions.value
  isOpen.value = false

  onChange(valueOption)
}
</script>

<template>
  <div :class="['select', isOpen ? 'open' : '', modsJoin(mods, 'select')]">
    <div class="select__selected" @click="isOpen = !isOpen">
      {{ allOptions.find((option) => option.isSelected)?.name || allOptions[0].name }}
    </div>
    <ul class="select__items">
      <li
        class="select__item"
        v-for="option of allOptions.filter((option) => !option.isSelected)"
        :key="option.value"
        @click="changeSelectedOption(option.value)"
      >
        <button type="button">
          {{ option.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@layer block {
  .select {
    position: relative;
    width: 100%;
    text-align: left;
    outline: none;

    &__selected {
      display: flex;
      align-items: center;
      gap: 16px;
      color: cl(text);
      border-radius: var(--radius-xs);
      border: 1px solid cl(surface-alt);
      padding: 9px 16px;

      cursor: pointer;
      user-select: none;
      transition: border-radius $time-2;

      &:after {
        @include variable-icon(url('/images/i-arrow-down.svg'), 24px, cl(text, 0.45));
        transition: transform $time-2;
      }
    }

    &__items {
      @include reset-list();

      border-radius: 0px 0px var(--radius-xs) var(--radius-xs);
      overflow: hidden;
      border-right: 1px solid cl(surface-alt);
      border-left: 1px solid cl(surface-alt);
      border-bottom: 1px solid cl(surface-alt);
      position: absolute;
      background-color: cl(whte);
      left: 0;
      right: 0;
      z-index: 1;
      opacity: 0;
      pointer-events: none;
      transition: opacity $time-2;
    }

    &__item {
      text-align: center;
      color: cl(text);
      cursor: pointer;
      user-select: none;
      padding: var(--gap-xs) var(--gap-s);
      transition: background-color $time;

      &:not(:last-child) {
        border-bottom: 1px solid cl(surface-alt);
      }

      @include mq-hover() {
        background-color: cl(surface-alt);
        color: cl(text);
      }
    }
  }
}

@layer state {
  .select {
    &.open {
      .select__selected {
        border-radius: var(--radius-xs) var(--radius-xs) 0px 0px;

        &:after {
          top: 15px;
          transform: rotate(180deg);
        }
      }

      .select__items {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
}
</style>
