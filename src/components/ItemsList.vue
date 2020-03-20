<template>
    <section class="cards-container">
        <ItemPreview v-for="(item,idx) in items" :key="idx" :item="item"></ItemPreview>
    </section>
</template>

<script>
import ItemPreview from './ItemPreview'
export default {
    props:['items'],
  components: {
      ItemPreview
  }
}
</script> 