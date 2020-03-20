<template>
  <div id="app" >
    <HeaderCmp @toggleRegister="toggleRegister" @toggleLogIn="toggleLogIn"></HeaderCmp>
    <router-view class="page-body"/>
    <Register-module @toggleRegister="toggleRegister" :class="{ active: isActive}"></Register-module>
    <LogIn @toggleLogIn="toggleLogIn" :class="{ active: isLogIn}"></LogIn>
    <FooterCmp></FooterCmp>
  </div>
</template>

<script>
import HeaderCmp from './components/HeaderCmp';
import FooterCmp from './components/FotterCmp';
import LogIn from './components/LogIn';
import RegisterModule from './components/RegisterModule.vue';
export default {
  data() {
    return {
      isActive: false,
      isLogIn: false,
      isLogOut: true
    };
  },
  methods: {
    toggleRegister() {
      
      this.isActive = !this.isActive;
    },
    toggleLogIn() {
      console.log('c2')
      this.isLogIn = !this.isLogIn;
    }
  },
  components: {
    HeaderCmp,
    FooterCmp,
    LogIn,
    RegisterModule
  },
  created(){
    this.$store.dispatch('loadItems')

  }
}
</script>

<style  scoped>
  .page-body{
    min-height: 85vh;
    margin-top: 90px;
  }

  .page-body p {
        text-align: center;
        margin: 0;
        margin-bottom: 20px;
  }

</style>


