<template>
  <h1>Talks media test</h1>
  <el-input
      placeholder="Search"
      prefix-icon="el-icon-search"
      v-model="searchString"
      clearable>
  </el-input>
  <el-button type="primary" icon="el-icon-search" @click="search(this.searchString)">Search</el-button>

  <TableComponent :tableData="tableData"/>  
</template>

<script>
import TableComponent from './TableComponent.vue'
import axios from "axios";

export default {
  name: 'PageComponent',
  components: {
    TableComponent
  },
  methods: {
      search(query) {
        const options = {
            method: 'GET',
            url: 'https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI',
            params: {q: query, pageNumber: '1', pageSize: '50', autoCorrect: 'false'},
            headers: {
                'x-rapidapi-key': '8bb9e737c2msh6a990b0563a382bp1b2422jsn5083034b298f',
                'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
            }
        };

        var self = this;
        axios.request(options).then(function (response) {
            self.tableData = response.data.value;
        }).catch((error) => {
            this.$message.error('Oops, this is a error message.');

        });
      }

  },
  data() {
      return {
        tableData: [],
        searchString: ''
    }
  }
}
</script>
