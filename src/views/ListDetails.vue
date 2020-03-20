<template>
    <section>
        <h2>Mony left: {{user.mony}}</h2>
        <UserList :list="list"></UserList>
        <el-button class="buy-btn" v-if="user" @click="buyItems" type="success">Buy</el-button>
        <h1> {{msg}} </h1>
    </section>
</template>

<script>
import UserList from '../components/UserList';

export default {
    data(){
        return {
            msg:''
        }
        
    },
    components:{
        UserList
    },
    async created(){
        const listId = this.$store.getters.userListId
        //if (!listId) return;
        await this.$store.dispatch({ type: "loadUserItems", listId }); 
    },
    computed:{
        list(){
           return this.$store.getters.userItems
        },
        user() {
            return this.$store.getters.loggedinUser;
        }
    },
    methods:{
        async buyItems(){
            let sum = this.list.reduce((acc,el)=>{
                return acc + el.quantity * el.price
            },0)
            if(this.user.mony > sum) {
                this.user.mony -= sum
                let user = this.user
                await this.$store.dispatch({type:"updateUser",user})
                this.msg = ''
            } else {
                this.msg = 'Sorry you dont have enough mony'
            }
        }
    }
    // watch:{
    //     // list: function(newVal,oldVal) {
    //     //     console.log('tttttttttttt',newVal,oldVal)

    //     // },
    //     list: {
    //         handler: function(val1,val2){
    //             console.log('jandler',val1,val2)
    //         }
    //     }
    // }
}
</script>

<style   scoped>
  .el-button{
      margin: 8px;
  }
  h2{
      text-align: center;
  }
</style>