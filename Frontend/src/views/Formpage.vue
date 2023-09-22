<script>
import { mapWritableState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import KategoryOption from '../components/KategoryOption.vue'

export default {
  components: {
    KategoryOption
  },
  props: ['formType', 'editData'],
  emits: [],
  data() {
    return {
      categoriesData: {},
      statusesData: {},
      FormData: {
        nama_produk: '',
        harga: '',
        kategori_id: '',
        status_id: ''
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchcategory', 'fetchstatus', 'postProduk', 'fetchProdukById', 'editProduk']),
    async getAllData() {
      try {
        const dataCategories = await this.fetchcategory()
        this.categoriesData = dataCategories

        const dataStatuses = await this.fetchstatus()
        this.statusesData = dataStatuses

      } catch (error) {
        console.log(error);
      }
    },
    async submitHandler() {
      if (this.FormData.nama_produk == '' || !this.numberChecker(this.FormData.harga)) {
        return ''
      }
      try {
        if (this.$route.params.id) {
          const data = await this.editProduk(this.FormData)

          if (data?.message == `success to update`) {
            this.$router.push(`/`)
          }
        } else {
          const data = await this.postProduk(this.FormData)

          if (data.message == `${this.FormData.nama_produk} success to update`) {
            this.$router.push(`/`)
          }
        }

      } catch (error) {
        console.log(error);
      }
    },
    async editHandler() {
      try {
        const data = await this.fetchProdukById(this.$route.params.id)

        this.FormData = data

      } catch (error) {
        console.log(error);
      }
    },
    numberChecker(val) {
      return /^\d+$/.test(val)
    },
  },
  computed: {
    ...mapWritableState(useCounterStore, ['isLogin'])

  },
  created() {
    this.getAllData()
    if (this.$route.params.id) {
      this.editHandler()
    }
  },
}
</script>

<template>
  <div class="vertical-layout vertical-menu 2-columns   menu-expanded fixed-navbar" data-open="click"
    data-menu="vertical-menu" data-color="bg-gradient-x-purple-blue" data-col="2-columns">

    <div class="app-content content">
      <div class="content-wrapper">
        <div class="content-wrapper-before"></div>
        <div class="content-header row">
          <div class="content-header-left col-md-4 col-12 mb-2">
            <h3 class="content-header-title">Tables</h3>
          </div>
          <div class="content-header-right col-md-8 col-12">
            <div class="breadcrumbs-top float-md-right">
              <div class="breadcrumb-wrapper mr-1">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active">Tables
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div class="content-body">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Form</h4>
                </div>
                <div class="card-content collapse show">
                  <div class="card-body">
                    <form @submit.prevent="submitHandler">
                      <fieldset class="form-group">
                        <h5 class="mt-2">Nama Produk</h5>
                        <input v-model="FormData.nama_produk" type="text" class="form-control" id="placeholderInput"
                          placeholder="Nama Produk">
                        <p v-show="FormData.nama_produk == ''" class="text-muted"><code>Nama Produk Harus Diisi</code></p>
                      </fieldset>
                      <fieldset class="form-group">
                        <h5 class="mt-2">Harga</h5>
                        <input v-model="FormData.harga" type="number" class="form-control" id="placeholderInput"
                          placeholder="Harga">
                        <p v-show="!numberChecker(FormData.harga)" class="text-muted">
                          <code>Harga Harus Diisi</code>
                        </p>
                      </fieldset>
                      <fieldset class="form-group">
                        <h5 class="mt-2">Kategori</h5>
                        <select v-model="FormData.kategori_id" class="form-control" id="basicSelect">
                          <option v-for="kategory in categoriesData" :key="kategory.id" :value="kategory.id">{{
                            kategory.nama_satuan }}</option>
                        </select>
                      </fieldset>
                      <fieldset class="form-group">
                        <h5 class="mt-2">Status</h5>
                        <select v-model="FormData.status_id" class="form-control" id="basicSelect">
                          <option v-for="status in statusesData" :key="status.id" :value="status.id">{{
                            status.nama_status }}</option>
                        </select>
                      </fieldset>
                      <button type="submit" class="btn mr-1 mb-1 btn-success btn-lg">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>