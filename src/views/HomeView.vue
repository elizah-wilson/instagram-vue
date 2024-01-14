<script setup>
import router from '@/router';
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
// need to request vartiable at rest so we can access them letter 
// need to bind the variables to the corresponding inputs
let email = ref('')
let password = ref('')

// two way binding : two diff things (variable and html element) always equal to eachother
function login() {

  const reqBody = {
    // ref is an object and need to use dot value to get values of variables/inputs
    "email": email.value,
    "password": password.value
  }

  //added body to the fetch
  // header to tell what type of data to get (this can be found in the insomnia routes we created)
  fetch("http://localhost:3000/login", 
  {
    headers: {"Content-Type":"application/json"}, 
    body: JSON.stringify(reqBody),
    method: "POST"
  })
    .then(response => {
      return response.json()
    })
    .then(json => {
      document.cookie = json // creates a cookie that saves information, target --> auth token
      router.push('/posts')
    })
    .catch(error => {
      console.log(error)
      alert('Email or Password is incorrect. Try again.')
    })
}
</script>

<template>
  <div id="container" class="centered-column">
    <div id="login-container" class="centered-column">
      <img id="logo" src="../assets/images/instagram.svg">
      <!-- add v-binder if you want attributes to be a state variable - able to change and make it reactive -->
      <!-- v-model bings the input value to the variable  -->
      <input type="text" name="login" id="email" placeholder="Email" class="input-size" v-model="email">
      <input type="password" name="login" id="password" placeholder="Password" class="input-size" v-model="password">
      <button id="login-bttn" class="input-size" @click="login()">Log in</button>
    </div>
    <div id="register-container" class="centered-column">
      <p class="no-margin">
        Don't have an account? <RouterLink to="/register" id="link" href="#">Register</RouterLink>
      </p>
    </div>
  </div>
</template>

<style scoped>
#container {
  height: 100vh;
}

#login-container {
  height: 450px;
  width: 400px;
  border: 2px solid lightgrey;
  gap: 15px;
}

#logo {
  width: 350px;
  height: 125px;
}

.input-size {
  width: 300px;
  height: 25px;
  font-size: medium;
}

#login-bttn {
  background-color: #0095f6;
  border: solid 2px #0095f6;
  border-radius: 3px;
  color: white;
  font-weight: bold;
}

#register-container {
  border: 2px solid lightgray;
  width: 400px;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 10px;
}

#link {
  text-decoration: none;
  font-weight: bold;
  font-size: larger;
  color: #0095f6;
}

.centered-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.no-margin {
  margin: 0;
}
</style>
