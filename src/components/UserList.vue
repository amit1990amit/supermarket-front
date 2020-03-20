<template>
    <section>
        <UserListItem v-for="(item,idx) in list" :key="idx" :item="item"></UserListItem>
    </section>
</template>

<script>
import UserListItem from './UserListItem';

export default {
    props:['list'],
    components:{
        UserListItem
    },
    created(){
        console.log('gggggggg',this.list)
    },
    methods:{
        // removeItemUSerList(){

        // }
    }
}
</script> 