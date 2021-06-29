<template>
  <el-input
      placeholder="Search"
      prefix-icon="el-icon-search"
      v-model="input"
      clearable>
  </el-input>
  <el-button type="primary" icon="el-icon-search">Search</el-button>


  <el-dropdown>
    <el-button type="primary">
      Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item>Action 4</el-dropdown-item>
        <el-dropdown-item>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
 

  <el-table
    :data="tableData"
    :default-sort = "{prop: 'date', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      sortable>
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      sortable>
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      sortable
      :formatter="formatter">
    </el-table-column>
  </el-table>


  <div class="block">
    <el-pagination
      layout="prev, pager, next, total"
      background
      :page-sizes="[10,20,40,80]"
      :page-size="10"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>

  import { defineComponent, ref } from 'vue'

  export default {
    name: 'TableComponent',
    setup() {
      return {
        input: ref('')
      }
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
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
