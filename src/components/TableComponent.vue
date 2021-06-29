<template>
  <el-input
      placeholder="Search"
      prefix-icon="el-icon-search"
      v-model="input"
      clearable>
  </el-input>
  <el-button type="primary" icon="el-icon-search">Search</el-button>


  <el-select v-model="tableDataPerPage" placeholder="Select">
    <el-option
      v-for="item in listOfTableDataPerPage"
      :key="item"
      :label="item"
      :value="item">
    </el-option>
  </el-select> 

  <el-table
    :data="pagedTableData"
    :default-sort = "{prop: 'id', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      sortable>
    </el-table-column>
    <el-table-column
      prop="title"
      label="Title"
      sortable>
    </el-table-column>
    <el-table-column
      prop="url"
      label="Url"
      sortable>
    </el-table-column>
    
    <el-table-column
      prop="description"
      label="Description"
      sortable>
    </el-table-column>
    <el-table-column
      prop="language"
      label="Language"
      sortable>
    </el-table-column>
    <el-table-column
      prop="datePublished"
      label="Data Published"
      sortable
      :formatter="dateFormatter">
    </el-table-column>
  </el-table>


  <div class="block">
    <el-pagination
      layout="prev, pager, next, total"
      background
      :page-size="tableDataPerPage"
      :total="this.tableData.length"
      @current-change="setCurrentPage">
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
        listOfTableDataPerPage: [1,5,10,15,20],
        currentPage: 1,
        tableDataPerPage: 1
      }
    },
    props: {
      tableData: {
        required: true,
        type: Object
      }
    },
   computed: {
      pagedTableData() {
        return this.tableData.slice(this.tableDataPerPage * this.currentPage - this.tableDataPerPage, this.tableDataPerPage * this.currentPage)
      }
    },
    methods: {
      dateFormatter(row){
        let datePublished = new Date(row.datePublished);
        return datePublished.toISOString().substring(0, 10);
      },

      setCurrentPage (val) {
        this.currentPage = val
      }
    }
  }
</script>
