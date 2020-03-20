<template>

  <form @submit.prevent="searchItems" >
    <h1 class="search-title">search bar</h1>
    <div class="filter-container">
      <div class="searchItems filter-secodery">   
        <el-input @input="searchItems" placeholder="Search" v-model="filterBy.searchStr"></el-input>
      </div>

      <el-select
        @change="searchItems"
        v-model="filterBy.tags"
        multiple
        collapse-tags
        placeholder="Select"
      >
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>

    </div>
    
  </form>

</template>

<script>
// @ is an alias to /src


export default {
  data() {
    return {
        filterBy: {
          searchStr: "",
          tags: [],
          priceRange: [0, 100]
        },
        options: [
        {
          value: "fruit",
          label: "Fruit"
        },
        {
          value: "meat",
          label: "Meat"
        },
        {
          value: "sea",
          label: "Sea"
        }
      ]
    }
  },
  components: {
 
  },
  methods:{
      searchItems() {
        this.$store.commit("setItemsFilter", { ...this.filterBy });
    },
  }
}
</script>









