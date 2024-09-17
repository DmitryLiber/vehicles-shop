import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '@shared/api'
import { type IVehicle } from './interfaces'

export const useVehiclesStore = defineStore('vehicles', () => {
  const list = ref([] as IVehicle[])
  const isLoading = ref(true)
  const searchInput = ref('')
  const currentPerPage = ref(9)
  const currentPage = ref(1)
  const countPagesVehicles = ref(0)
  const lastPage = ref(0)

  async function getList() {
    isLoading.value = true

    const params = `page=${currentPage.value}&per_page=${currentPerPage.value}${
      searchInput.value !== '' ? `&search=${searchInput.value}` : ''
    }`

    API.get(params).then((res: any) => {
      isLoading.value = false

      const { data, meta } = res

      list.value = data
      currentPage.value = meta.current_page
      lastPage.value = meta.last_page
      countPagesVehicles.value = meta.total
    })
  }

  function firstPageAndGetList() {
    currentPage.value = 1
    getList()
  }

  function onSearch(textSearch: string) {
    searchInput.value = textSearch
    firstPageAndGetList()
  }

  function onChangePerPage(newPer: number) {
    currentPerPage.value = newPer
    firstPageAndGetList()
  }

  function onPrevPage() {
    if (currentPage.value > 1) {
      currentPage.value--
      currentPage.value = currentPage.value
      getList()
    }
  }

  function onNextPage() {
    if (currentPage.value < lastPage.value) {
      currentPage.value++
      currentPage.value = currentPage.value
      getList()
    }
  }

  return {
    list,
    isLoading,
    searchInput,
    currentPerPage,
    currentPage,
    countPagesVehicles,
    lastPage,
    onSearch,
    onChangePerPage,
    onPrevPage,
    onNextPage
  }
})
