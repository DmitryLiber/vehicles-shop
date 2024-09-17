<script lang="ts" setup>
import { modsJoin } from '@shared/utils'

import Badge from '@/shared/badge'
interface Props {
  mods?: string
  img?: number | string
  tag?: string
  data?: any
}

const { mods = '', tag, data } = defineProps<Props>()
</script>

<template>
  <component :is="tag ? tag : 'article'" :class="['card', modsJoin(mods, 'card')]">
    <div class="card__header">
      <div class="card__header-right">
        <button class="card__control-more"></button>
      </div>
    </div>

    <div class="card__main">
      <picture class="card__img">
        <img
          :src="data.preview ? data.preview : '/images/default-car.png'"
          :alt="data.vehicle_name"
          loading="lazy"
          width="315"
          height="135"
        />
      </picture>

      <h2 class="card__title">{{ data.vehicle_name }}</h2>
      <span class="card__subtitle">WDB {{ data.vin }}</span>
    </div>

    <div class="card__footer">
      <div class="card__footer-left">
        <Badge mods="success, icon-check" v-if="data.uploads === data.angles_count"
          >{{ data.uploads }}/{{ data.angles_count }}</Badge
        >
        <Badge mods="alt" v-else>{{ data.uploads }}/{{ data.angles_count }}</Badge>
      </div>
      <div class="card__footer-right">
        <div class="card__desc">3 days left</div>
      </div>
    </div>
  </component>
</template>

<style lang="scss" scoped>
@layer block {
  .card {
    border-radius: var(--gap-s);
    background-color: cl(surface);
    padding: 40px 24px 16px;
    display: flex;
    flex-direction: column;
    position: relative;

    &__header {
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      display: flex;
    }

    &__header-right {
      margin-left: auto;
    }

    &__control-more {
      &::before {
        content: '';
        @include variable-icon(url('/images/i-more.svg'), 24px, cl(text, 0.6));
      }
    }

    &__img {
      @include center;

      width: 100%;
      aspect-ratio: 315 / 135;
      overflow: hidden;
      margin-bottom: 24px;

      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
      }
    }

    &__title {
      @include font(20px, 1.1, 700);
    }

    &__subtitle {
      @include font(15px, 1.33, 500);
      letter-spacing: 0.02em;
      color: cl(text, 0.6);
      margin-top: 12px;
      display: block;
    }

    &__main {
      flex-grow: 1;
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 18px;
      margin-top: 18px;
      border-top: 1px solid cl(surface-alt);
    }

    &__desc {
      @include font(15px, 1.33, 500);
      color: cl(text, 0.6);
    }
  }
}
</style>
