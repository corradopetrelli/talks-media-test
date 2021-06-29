<template>
  <h1>Talks media test</h1>
  <TableComponent :tableData="tableData"/>
</template>

<script>
import TableComponent from './TableComponent.vue'

export default {
  name: 'PageComponent',
  components: {
    TableComponent
  },

  data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
  }
}
</script>
