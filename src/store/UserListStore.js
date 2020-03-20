import Vue from 'vue'
import Vuex from 'vuex'
import ListService from '../service/UserListService'
 
Vue.use(Vuex)
 
export default ({
  state: {
    // items:{},
    items:[],
    list:null
    // currItem:null,

  },
  getters:{
    userItems(state){
        return state.items;
    },
    currListId(state){
      return state.list._id
    }
    // currItem(state) {
    //   return state.currItem
    // }
  }, 
  mutations: {
    setUserItems(state,{items}){
      console.log('a5',items)
      state.items = items
    },
    // setCurrItem(state, itemId) {
    //   let item = state.items.find(item => item._id === itemId);
    //   state.currItem = item;
    // },
    // editItem(state,{item}){
    //   console.log('b4',{item})
    //   const idx = state.items.findIndex(currItem => currItem._id === item._id)
    //   state.items.splice(idx,1,item)
    //   state.currItem = item
    // },
    // removeItem(state,{itemId}){
    //   const idx = state.items.findIndex(item => item._id === itemId)
    //   state.items.splice(idx,1)    
    // },
    addList(state,{list}){
      //console.log('b4',list)
      state.list = list
    },
    addItemToList(state,{item}){
      let flag = 1;
      state.items.reduce((acc,el)=> {
        if(el.name === item.name){
          el.quantity += item.quantity
          flag--;
        }
        acc.push(el)
        return acc
      },[])
      if(flag)state.items.push(item)

      // if(!state.items[item.name]){
      //   state.items[item.name] = item
      // } else {
      //   let num = item.quantity
      //   state.items[item.name].quantity += num
      // }
    },
    removeItemUSerList(state,name){
      state.items = state.items.filter(item => {
        return item.name !== name;
      })
      // delete state.items[name]
      // console.log(state.items)
    }
    // setItemsFilter(state, filterBy) {
    //   state.filterBy = filterBy;
    // },





  },
  actions: {
    async loadUserItems(context,{listId}){
      const items = await ListService.query(listId);
      context.commit({type:'setUserItems',items})
    },
    // async setCurrItem(context,{itemId}){
    //   const items = await ItemService.query()
    //   context.commit('setCurrItem', itemId)
    //   return items
    // },
    // async getById(context,{itemId}){
    //   const item = await ItemService.getById(itemId)
    //   context.commit({type:'setCurrItem',item})
    //   return item
    // },

    // async editItem(context, {currItem}){

    //   const item = await ItemService.editItem(currItem)
    //   context.commit({type:'editItem',item})
    //   return item
    // },
    
    // async removeItem(context,{itemId}){
    //   await ItemService.removeItem(itemId)
    //   context.commit({type:'removeItem',itemId:itemId})
    // },

    async createList(context){
      const list = await ListService.addList({})
      context.commit({type:'addList',list:list})
      return list
    }    
  }








})
