<script setup>
import { ref } from 'vue'
import router from '@/router'

const email = ref('')
const username = ref('')
const password = ref('')


function register() {

    const reqBody = {
        "email": email.value,
        "username": username.value,
        "password": password.value
    }

    fetch("http://localhost:3000/createuser",
        {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reqBody),
            method: "POST"
        })
        .then(response => {
            if(response.status === 201) {
                alert("Account created! Login to continue.")
                router.push("/")
            }
            else("Something went wrong! Please try again.")
        })
        .catch(error => {
            console.log(error)
        })
}

</script>

<template>
    <div class="centered-column fill-screen">
        <div id="container" class="centered-column">
            <img id="logo" src="../assets/images/instagram.svg">
            <p class="text">Sign up to see photos and videos from your friends.</p>
            <input type="text" name="login" id="email" placeholder="Email" class="input-size" v-model="email">
            <input type="text" name="login" id="username" placeholder="Username" class="input-size" v-model="username">
            <input type="password" name="login" id="password" placeholder="Password" class="input-size" v-model="password">
            <button id="signup-bttn" class="input-size" @click="register()">
                <RouterLink id="signup-bttn" to="#">Sign up</RouterLink> <!-- router link goes to no where?-->
            </button>
        </div>
    </div>
</template>

<style scoped>
.fill-screen {
    width: 100vw;
    height: 100vh;
}

#container {
    height: 500px;
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

#signup-bttn {
    background-color: #0095f6;
    border: solid 2px #0095f6;
    border-radius: 3px;
    color: white;
    font-weight: bold;

}

.text {
    font-weight: bold;
    font-size: larger;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #0095f6;
    width: 300px;
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

