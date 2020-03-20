<template>
    <section class="item-card" v-if="currItem">
        <!-- <img v-if="currItem.imgUrl" class="details-image" :src="currItem.imgUrl" alt="">
        <img v-else class="details-image" src="https://image.shutterstock.com/image-photo/ripe-orange-isolated-on-white-260nw-606022676.jpg" alt=""> -->
      <div class="item-details flex column">
        <div class="detail-row">
            <span>name: </span>
            <el-input class="details-input" type="text" v-model="currItem.name" :placeholder="currItem.name"></el-input>
        </div>
        <div class="detail-row">
            <span>price: </span>
            <el-input class="details-input" type="number" v-model="currItem.price" :placeholder="currItem.price"></el-input>
        </div>
        <div class="detail-row">
            <span>quantity: </span>
            <el-input class="details-input" type="number" v-model="currItem.quantity" :placeholder="currItem.quantity"></el-input>
        </div>
        <div class="detail-row">
            <span>Type: </span>
            <el-select class="details-input" v-model="currItem.tag" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select>
            
        </div>
        <div class="detail-row">
            <span>Upload Image </span>
            <el-input class="edit-img-input details-input" @change="uploadImg" type="file" />
        </div>
        
        <!-- <p>price: {{item.price}}</p>
        <p>left: {{item.quantity}}</p> -->

      </div>  
      <el-button v-if="currItem._id" @click="save" type="success">Save</el-button>
      <el-button v-else @click="add" type="success">Add</el-button>  
      <el-button  v-if="currItem._id" @click="removeItem()" type="danger">Delete</el-button>  
   
    </section>
</template>

<script>
import CloudService from '../service/CloudService';
export default {
    data(){
        return {
            currItem : {
                name:'',
                price:0,
                quantity:0,
                tag:'fruit',
                imgUrl:''
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
    async created() {
        // this.$store.dispatch("loadMeals");
        const itemId = this.$route.params._id;
        if (!itemId) return;
        const item = await this.$store.dispatch({ type: "getById", itemId });
        this.currItem = item
    },
    methods: {
        async save(){
            let currItem = this.currItem;
            console.log('tttttttt',currItem)
            await this.$store.dispatch({type:'editItem',currItem});
            this.$router.push('/');
        },
        async removeItem(){
            const itemId = this.currItem._id
            await this.$store.dispatch({type:'removeItem',itemId})
            this.$router.push('/');
        },
        async add(){
            let currItem = this.currItem;
            await this.$store.dispatch({type:'addItem',currItem});
            this.$router.push('/'); 
        },
        uploadImg() {
            CloudService.uploadImg(event).then(
            res => (this.currItem.imgUrl = res.url)
        );
    },


    },
    

    //       let currMeal = this.currMeal;
    //   await this.$store.dispatch({ type: "editMeal", currMeal });
    //   this.$router.push(`/meal`);
    // computed:{
    //     item(){
    //         return this.$store.getters.currItem
    //     }
    // }
}
</script>