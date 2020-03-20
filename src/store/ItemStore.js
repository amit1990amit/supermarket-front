import Vue from 'vue';
import Vuex from 'vuex';
import ItemService from '../service/ItemService';


Vue.use(Vuex)


export default ({
    state: {
      items:[],
      currItem:null,
      filterBy: {
        searchStr: '',
        tags: [],
        priceRange: [0, 100]
      },
    },
    getters:{
      items(state){
        let filterBy = state.filterBy;
        let filteredItems = [...state.items];
        let regex = new RegExp(filterBy.searchStr, 'i');
        if (filterBy.searchStr.length > 0) {
          filteredItems = filteredItems.filter(item => {
              return regex.test(item.name)
  
          })
        }
        if (filterBy.tags.length > 0) 
        filteredItems = filteredItems.filter(item => {
            return filterBy.tags.includes(item.tag);
        })
        
  
        return filteredItems
      },
      currItem(state) {
        return state.currItem
      }
    }, 
    mutations: {
      setItems(state,{items}){
        state.items = items
      },
      setCurrItem(state, itemId) {
        let item = state.items.find(item => item._id === itemId);
        state.currItem = item;
      },
      editItem(state,{item}){
        const idx = state.items.findIndex(currItem => currItem.name === item.name)
        state.items.splice(idx,1,item)
        state.currItem = item
      },
      removeItem(state,{itemId}){
        const idx = state.items.findIndex(item => item._id === itemId)
        state.items.splice(idx,1)    
      },
      addItem(state,{item}){
        const idx = state.items.findIndex(currItem => currItem.name === item.name);
        idx > -1 ? state.items.splice(idx,1,item) : state.items.push(item);  
      },
      setItemsFilter(state, filterBy) {
        state.filterBy = filterBy;
    },
  
  
  
  // removeMeal(state, {
  //     mealId
  // }) {
  //     const idx = state.meals.findIndex(meal => meal._id === mealId)
  //     state.meals.splice(idx, 1)
  // },
  // addMeal(state, {
  //     meal
  // }) {
  //     state.meals.push(meal)
  // },
  // editMeal(state, {
  //     updatedMeal
  // }) {
  //     const idx = state.meals.findIndex(currMeal => currMeal._id === updatedMeal._id);
  //     state.meals.splice(idx, 1, updatedMeal);
  //     state.currMeal = updatedMeal
  // },
  // setMealsFilter(state, filterBy) {
  //     state.filterBy = filterBy;
  // },
  // setMainFilter(state, filterBy) {
  //     state.mainFilter = filterBy;
  //     console.log(state.mainFilter);
  
  // },
  // sortMeals(state, sortBy) {
  //     state.meals.sort((a, b) => (a.price > b.price ? 1 : -1));
  // },
  // userMeals(state, userId) {
  //     const meals = state.meals.filter(meal => {
  //         return meal.ownerId.id === userId.userId
  //     });
  //     state.userMeals = meals;
  // },
  
  
  
    },
    actions: {
      async loadItems(context){
        const items = await ItemService.query();
        context.commit({type:'setItems',items})
      },
      async setCurrItem(context,{itemId}){
        const items = await ItemService.query()
        context.commit('setCurrItem', itemId)
        return items
      },
      async getById(context,{itemId}){
        const item = await ItemService.getById(itemId)
        context.commit({type:'setCurrItem',item})
        return item
      },
  
      async editItem(context, {currItem}){
        const item = await ItemService.editItem(currItem)
        context.commit({type:'editItem',item})
        return item
      },
      
      async removeItem(context,{itemId}){
        await ItemService.removeItem(itemId)
        context.commit({type:'removeItem',itemId:itemId})
      }, 
  
      async addItem(context,{currItem}){
        const item = await ItemService.addItem(currItem)
        context.commit({type:'addItem',item:item})
        return item
      }
      
      
      
      // async addMeal(context, {
      //     currMeal
      // }) {
      //     const meals = await MealService.add(currMeal)
      //     context.commit({
      //         type: 'addMeal',
      //         meal: meals
      //     })
      //     return meals
      // },
      
      //   async removeMeal(context, payload) {
    //     await MealService.remove(payload.mealId)
    //     context.commit({
    //         type: 'removeMeal',
    //         mealId: payload.mealId
    //     })
    // },
  
  //   async editMeal(context, {
  //     currMeal
  // }) {
  //     const meals = await MealService.edit(currMeal)
  //     context.commit({
  //         type: 'editMeal',
  //         updatedMeal: meals
  //     })
  //     return meals
  // },
  
  
  
  
  
  
  
  
    },

  })