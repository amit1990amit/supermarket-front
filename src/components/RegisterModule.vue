<template>
  <section class="register-container"> 
    <button @click="toggleRegister" class="exit-btn">X</button>
    <h5 class="errorMsg">{{msg}}</h5>
    <form class="secondery-reg-container">
      <span>First Name*</span>
      <el-input v-model="signupCred.firstname" type="text"></el-input>
      <span>Last Name*</span>
      <el-input v-model="signupCred.lastname" type="text"></el-input>
      <span>Country*</span>
      <el-input v-model="signupCred.location.country" type="text"></el-input>
      <span>City*</span>
      <el-input v-model="signupCred.location.city" type="text"></el-input>
      <span>Email*</span>
      <el-input v-model="signupCred.email" type="email"></el-input>
      <div class="mini-container flex align-center">
        <span>Gender*</span>
        <el-select v-model="signupCred.gender" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <span>Birthday*</span>
        <el-date-picker v-model="signupCred.birthDay" value-format="timestamp" type="datetime"></el-date-picker>
      </div>
      <!-- <span>Add profile image</span>
      <input class="edit-img-input" @change="uploadImg" type="file" /> -->

      <span>User Name*</span>
      <el-input v-model="signupCred.username" type="text"></el-input>
      <span>Password*</span>
      <el-input v-model="signupCred.password" placeholder="Please input password" show-password></el-input>
      <span>Reapet Password*</span>
      <el-input v-model="password" placeholder="Please input password" show-password></el-input>
      <el-button class="login-btn" @click="doSignup" type="success">SingUp</el-button>
    </form>
  </section>
</template>




<script >
// import CloudService from "../services/CloudService.js";
export default {
  data: () => ({
    msg: null,
    
    signupCred: {
      mony:120,
      listId:null,
      location: {
        country: null,
        city: null
      }
    },
    password: null,
    options: [
      {
        value: "Male",
        label: "Male"
      },
      {
        value: "Female",
        label: "Female"
      }
    ]
  }),

  methods: {
    toggleRegister() {
      this.$emit("toggleRegister");
      this.msg = null;
      this.signupCred = {
        location: {
          country: null,
          city: null
        }
      };
    },
    // uploadImg() {
      //   CloudService.uploadImg(event).then(
        //     res => (this.signupCred.imgUrl = res.url)
    //   );
    // },
    async doSignup() {
      await this.$store.dispatch({type:"createList"})
      this.signupCred.listId = this.$store.getters.currListId
      console.log('a1',this.signupCred)
      const cred = this.signupCred;
      if (!cred.email || !cred.password || !cred.username)
        return (this.msg = "Please fill up the form");
      this.$store
        .dispatch({ type: "signup", userCred: cred })
        .then(() => console.log("user added"));
      this.toggleRegister();
      this.msg = null;
      this.signupCred = {
        location: {
          country: null,
          city: null
        }
      };
    }
  }
};
</script>
<style scoped>
.register-container {
  max-width: 530px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 15px;
  position: absolute;
  top: 50px;
  right: 10%;
  left: 10%;
  margin: auto;
  z-index: 10;
  display: none;
}
.secondery-reg-container {
  display: flex;
  flex-direction: column;
}
.secondery-reg-container > * {
  margin-bottom: 10px;
}
.mini-container > *:not(:last-child) {
  margin-right: 7px;
}
.exit-btn {
  background-color: transparent;
  border: 0;
  font-size: 1.2rem;
  margin: 10px 10px 10px 0;
  outline: none;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  /* float: right; */
}

.errorMsg {
  height: 15px;
  display: flex;
  justify-content: center;
  margin: 0;
  color: brown;
}
</style>