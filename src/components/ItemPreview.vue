<template>
    <section class="item-card">
      <router-link  :to="'/details/' + item._id">
        <div class="img-container">
          <img v-if="item.imgUrl" class="img-card ratio-16-9" :src="item.imgUrl" >
          <img v-else class="img-card ratio-16-9" src="https://image.shutterstock.com/image-photo/ripe-orange-isolated-on-white-260nw-606022676.jpg" alt="">
          <span v-if="item.quantity" class="items-left">{{item.quantity}} left</span> 
          <span v-else class="items-left sold-out">Sold Out</span>
        </div>

      </router-link>
      <div class="item-details flex column">
        <h4>{{item.name}} price: {{item.price}} </h4>
        <div >
          <button @click="subOne">-</button>
          <span>{{number}}</span>  
          <button @click="addOne">+</button>
        </div>
        <button @click="addToUserList">add</button>
      </div>       
    </section>
</template>

<script>

export default {
  props:['item'],
  data(){
    return{
      number: 0
    }
  },
  components: {

  },
  methods:{
    addOne(){
      this.number++;
      this.item.quantity--;
    },
    subOne(){
      if (this.number === 0) return;
      this.number--;
      this.item.quantity++;
    },
    async addToUserList(){
      let item = {
        name: this.item.name,
        price: this.item.price,
        quantity: this.number,
        imgUrl: this.item.imgUrl
      }
      let currItem = this.item
      console.log('qqq',currItem,item)
      await this.$store.commit("addItemToList", { item });
      await this.$store.dispatch({type:'editItem',currItem});
      this.number = 0;
    }
  }
}
</script>