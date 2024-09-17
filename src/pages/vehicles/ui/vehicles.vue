<script setup lang="ts">
import { LoginLayout } from '@app/layouts'
import AccountHeader from '@widgets/account-header'
import { Vehicles } from '@entities/vehicles'
</script>

<template>
  <LoginLayout>
    <AccountHeader />
    <Vehicles />
  </LoginLayout>
</template>
