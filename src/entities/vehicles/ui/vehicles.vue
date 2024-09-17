<script setup lang="ts">
import { onMounted } from 'vue'
import Grid from '@shared/grid'
import Button from '@shared/button'
import Field from '@shared/field'
import Select from '@shared/select'
import Card from '@shared/card'
import Pagination from '@/shared/pagination'
import { useVehiclesStore } from '@entities/vehicles'
import LoaderCircle from '@shared/loaderCircle'
import { debounce } from '@shared/utils'

const optionsDimension = [
  { value: '9', name: '9', isSelected: true },
  { value: '27', name: '27' },
  { value: '54', name: '54' }
]

const vehiclesStore = useVehiclesStore()

const onSearchVehicle = debounce((textSearch: string) => vehiclesStore.onSearch(textSearch), 1000)

onMounted(() => {
  vehiclesStore.onChangePerPage(vehiclesStore.currentPerPage)
})
</script>

<template>
  <div class="vehicles-filters">
    <Field
      placeholder="Search VIN"
      mods="icon-append"
      icon="i-zoom.svg"
      class="vehicles-filters__search"
      :value="vehiclesStore.searchInput"
      @input="(e) => onSearchVehicle(e.target.value)"
    />
    <div class="vehicles-filters__select">
      <span class="vehicles-filters__select-label">Select vehicles per page:</span>

      <Select
        :options="
          optionsDimension.map((el) => ({
            ...el,
            isSelected: +el.value === vehiclesStore.currentPerPage
          }))
        "
        :onChange="(value) => vehiclesStore.onChangePerPage(+value)"
      ></Select>
    </div>
    <Button
      mods="icon-prepend"
      :style="`--icon: url(/images/i-plus.svg)`"
      class="vehicles-filters__btn"
      >Add Vehicle</Button
    >
  </div>

  <LoaderCircle
    color="var(--color-surface-secondary)"
    size="40px"
    mods="center"
    v-if="vehiclesStore.isLoading"
  />
  <slot v-else>
    <Grid columns="3">
      <Card v-for="vehicle in vehiclesStore.list" :key="vehicle.id ?? 0" :data="vehicle" />
    </Grid>

    <div class="vehicles-pagination">
      <span class="vehicles-pagination__counts"
        >Showing {{ vehiclesStore.currentPerPage }} out of {{ vehiclesStore.countPagesVehicles }}
      </span>
      <Pagination
        :currentPage="vehiclesStore.currentPage"
        :lastPage="vehiclesStore.lastPage"
        :onPrevPage="() => vehiclesStore.onPrevPage()"
        :onNextPage="() => vehiclesStore.onNextPage()"
      />
    </div>
  </slot>
</template>

<style lang="scss">
.vehicles-filters {
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  gap: 32px;

  &__btn {
    margin-left: auto;
  }

  &__search {
    max-width: 354px;
  }

  &__select {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__select-label {
    line-height: 1.37;
    flex-shrink: 0;
  }
}

.vehicles-pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 45px;

  &__counts {
    line-height: 1.37;
  }
}
</style>
