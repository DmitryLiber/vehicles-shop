<template>
  <div class="lang">En</div>
</template>

<style lang="scss" scoped>
@layer block {
  .lang {
    @include font(15px, 1.47, 500);

    display: flex;
    align-items: center;

    &::before,
    &::after {
      content: '';
      width: 24px;
      aspect-ratio: 1;
    }

    &::before {
      background-image: url(/images/flag-uk.svg);
      margin-right: 14px;
    }

    &::after {
      background-image: url(/images/i-arrow-down.svg);
    }
  }
}
</style>
