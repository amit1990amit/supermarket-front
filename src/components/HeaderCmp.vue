<template>
  <header>
    <nav class='sticky'>
      <div class="row">
        <router-link to="/">
          <img src="@/img/logo.png" alt="shoping list logo" class="logo" />
        </router-link>
                <!-- <i id="menu-btn" :class="{openMenu:openMenu}" @click="getOpenMenu" class="fa fa-bars"></i> -->
                <!-- <div :class="{openMenu:openMenu }" class="screen" @click="getOpenMenu"></div> -->
          <ul class="main-nav">
            <li @click="getOpenMenu" v-if="user">
              <router-link class="route-nav" to="/lists">List</router-link>
            </li>
            <li v-if="user">
              <router-link class="route-nav"  :to="'/details/'">add</router-link>
            </li>
            <!-- <li @click="getOpenMenu">
              <router-link class="route-nav" to="/add">your list</router-link>
            </li> -->
            <li class="pointer" v-if="!user" @click="logIn"> 
              <a>LOGIN</a>
            </li>
            <li class="pointer" v-else @click="doLogout">
              
              <a>LOGOUT</a>
            </li>
            <li class="pointer" v-if="!user" @click="SignUp">  
              <a>SIGNUP</a>
            </li>
            <!-- <li v-else>
              <router-link :to="'/user/' + user._id">
                Profile
              </router-link>
            </li> -->
          </ul>
        

      </div>
      
    </nav>
    
  </header>

</template>

<script>
// @ is an alias to /src


export default {

  components: {
 
  },
  data(){
    return {
      openMenu: false
    }
  },
  methods:{
    getOpenMenu() {
      this.openMenu = !this.openMenu;
    },
    logIn() {
      this.openMenu = !this.openMenu;
      this.$emit("toggleLogIn");
    },
    SignUp() {
        console.log('c1')
      this.openMenu = !this.openMenu;
      this.$emit("toggleRegister");
    },
    doLogout() {
      this.openMenu = !this.openMenu;
      this.$store.dispatch({ type: "logout" });
    },
  },
  computed: {
    user() {
      return this.$store.getters.loggedinUser;
    }
  },
}
</script>