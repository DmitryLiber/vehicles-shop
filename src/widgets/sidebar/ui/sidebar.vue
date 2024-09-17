<script lang="ts" setup>
const menuItems = [
  {
    name: 'Profile',
    link: '/',
    icon: 'i-user'
  },
  {
    name: 'Vehicles',
    link: '/vehicles',
    icon: 'i-vehicles'
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: 'i-settings'
  }
]
</script>

<template>
  <aside class="sidebar">
    <span class="sidebar__header">Demo Test</span>
    <ul class="sidebar__list">
      <li v-for="item in menuItems" class="sidebar__list-item">
        <RouterLink
          :to="item.link"
          class="sidebar__list-link"
          active-class="active"
          :style="`--icon: url(./images/${item.icon}.svg)`"
          >{{ item.name }}</RouterLink
        >
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
@layer block {
  .sidebar {
    background-color: cl(primary-secondary);
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    z-index: var(--index-2);
    border-bottom: 1px solid rgba(#{cl(border--rgb)}, 0.25);
    color: cl(whte);
    padding: 30px 0 0;

    &__header {
      @include font(24px, 1, 700);

      display: block;
      margin-bottom: var(--gap-xl);
      padding-left: 56px;
    }

    &__list {
      @include reset-list();
    }

    &__list-item {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
    }

    &__list-link {
      @include font(16px, 1.25, 500);
      --icon-color: #{cl(whte, 0.45)};
      --border-color: transparent;

      color: cl(whte, 0.45);
      padding: 12px 30px 12px 28px;
      display: flex;
      align-items: center;
      gap: 20px;
      transition:
        color $time,
        background-color $time;
      border-left: 2px solid var(--border-color);

      &::before {
        @include variable-icon(var(--icon), 24px, var(--icon-color));
      }
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      aspect-ratio: 256/144;
      background-image: url('/images/wave.svg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }
  }
}

@layer state {
  .sidebar {
    &__list-link {
      @include mq-hover() {
        --icon-color: #{cl(whte)};
        color: cl(whte);
        background-color: cl(whte, 0.2);
      }

      &.active {
        --border-color: #{cl(primary)};
        --icon-color: #{cl(whte)};
        color: cl(whte);
        background-color: cl(whte, 0.2);
      }
    }
  }
}
</style>
