<template> 
  <div class="main-page"> 
    <SerachBar></SerachBar>  
    <ItemList :items="items"></ItemList>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemList from '../components/ItemsList'
import SerachBar from '../components/SearchBar'
export default {
  name: 'home',
  components: {
    ItemList,
    SerachBar
  },
  computed:{
    items(){
      return this.$store.getters.items
    }
  }

}
</script>
