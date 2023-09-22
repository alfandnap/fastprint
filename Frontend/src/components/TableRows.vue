<script>
import { mapWritableState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  props: ['product'],
  methods: {
    ...mapActions(useCounterStore, ['deleteProduk']),
    editHandler(e) {
      e.preventDefault();
      this.$router.push(`/edit/${this.product.id}`)
    },
    async deleteHandler(e) {
      try {
        e.preventDefault()

        this.$swal.fire({
          title: 'Do you want to delete?',
          // showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'delete',
          denyButtonText: `Don't save`,
        }).then(async (result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {


            const data = await this.deleteProduk(this.product)
    
            if (data?.message == `${this.product.nama_produk} success to delete`) {
              await this.$router.push(`/`)
            }

            await this.$swal.fire('Deleted!', '', 'success')

          } else if (result.isDenied) {
            this.$swal.fire('Changes are not saved', '', 'info')
          }
        })


      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<template>
  <tr>
    <th scope="row">{{ product.id }}</th>
    <td>{{ product.nama_produk }}</td>
    <td>{{ product.harga }}</td>
    <td>{{ product.Satuan.nama_satuan }}</td>
    <td>{{ product.Status.nama_status }}</td>
    <td>
      <div class="icon-container">
        <a @click="editHandler">
          <i class="la la-edit"></i>
        </a>
        <a @click="deleteHandler">
          <i class="la la-close"></i>
        </a>
      </div>
    </td>
  </tr>
</template>

<style scoped>
.icon-container {
  display: flex;
  justify-content: space-between;
}

.la {
  display: flex;
  margin: 3px;
}
</style>