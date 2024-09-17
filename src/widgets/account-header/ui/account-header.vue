<script lang="ts" setup>
import Typography from '@shared/typography'
import Badge from '@shared/badge'
import Button from '@shared/button'
import Avatar from '@shared/avatar'
import Lang from '@shared/lang'
</script>

<template>
  <header class="account-header">
    <div class="account-header__left">
      <Typography tag="h1" mods="heading1">Vehicles</Typography>
      <Badge>256</Badge>
    </div>
    <div class="account-header__right">
      <Button
        mods="icon, outline"
        :style="`--icon: url(/images/i-plus.svg)`"
        class="account-header__btn-plus"
      ></Button>

      <Avatar img="avatar.jpg" class="account-header__avatar">John Doe</Avatar>
      <Lang />
    </div>
  </header>
</template>

<style lang="scss" scoped>
@layer block {
  .account-header {
    display: flex;
    align-items: center;
    position: relative;
    padding-bottom: 26px;
    margin-bottom: 32px;

    &__left {
      display: flex;
      align-items: center;
      gap: 18px;
    }

    &__right {
      margin-left: auto;
      display: flex;
      align-items: center;
    }

    &__btn-plus {
      margin-right: 40px;
    }

    &__avatar {
      margin-right: 32px;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: var(--gap-m-neg);
      width: calc(100% + (var(--gap-m) * 2));
      height: 1px;
      background-color: cl(surface-alt);
    }
  }
}
</style>
