<template>
    <section class="item-user-list">
        <img class="user-item-img" :src="item.imgUrl" alt="">
        <div>
            <h2>Name: {{item.name}}</h2>
            <h2>Price: {{item.price}}</h2>
            <h2>Number of Items: {{item.quantity}}</h2>
        </div>
        <el-button  @click="OnRemove" type="danger">Delete</el-button>
    </section>
</template>

<script> 
export default {
    props:['item'],
    methods:{
        async OnRemove(){
            console.log('remove')
            let currItem = this.item
             //this.$emit("removeItemUSerList");
            await this.$store.commit("removeItemUSerList", this.item.name);
            await this.$store.dispatch({type:'addItem',currItem});
        }
    },
    created(){
        console.log(this.item)
    }
}
</script>

<style scoped>
    .item-user-list{
        display: flex;
        /* border: 1px solid black; */
        padding: 7px;
        align-items: center;
    }
    button{
        height: 40px;
        margin-left: 40px;
    }
</style>