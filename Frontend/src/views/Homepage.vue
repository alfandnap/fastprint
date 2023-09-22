<script>
import { mapWritableState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import TableRows from '../components/TableRows.vue'

export default {
  components: {
    TableRows
  },
  props: {
  },
  emits: [],
  data() {
    return {
      productData: {}
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchproduk']),
    async getAllProduct() {
      try {
        const data = await this.fetchproduk()

        this.productDataState = this.productDataState.filter(el => {
          if (el.status_id == 1) {
            return el
          }
        })
      } catch (error) {
        console.log(error);
      }
    },
    goToForm(e) {
      e.preventDefault()
      this.$router.push(`/form`)
    }
  },
  computed: {
    ...mapWritableState(useCounterStore, ['productDataState'])

  },
  created() {
    this.getAllProduct()
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
                  <h4 style="margin-left: 10px;">Data Produk</h4>
                  <a class="heading-elements-toggle"><i class="la la-ellipsis-v font-medium-3"></i></a>
                  <div class="heading-elements">
                    <ul class="list-inline mb-0">
                      <a @click="goToForm"><i class="la la-plus" style="font-size: 2.3rem; !important"></i></a>
                    </ul>
                  </div>
                </div>
                <div class="card-content collapse show">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Nama Produk</th>
                            <th>Harga</th>
                            <th>Kategori</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <TableRows v-for="product in productDataState" :key="product.id" :product="product" />
                        </tbody>
                      </table>
                    </div>
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