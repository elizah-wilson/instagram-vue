<script setup>
import { reactive } from 'vue'
import Header from '../components/Header.vue'

let posts = reactive([])

fetch('http://localhost:3000/getposts',
    {
        headers: { 'Authorization': document.cookie } // grabs and saves auth token from login for each user
    })
    .then(response => {
        return response.json()
    })
    .then(json => {

        posts.push(...json)
        //         ...spread operator: allows us to put an array into another array 
    })
    .catch(error => {
        console.log(error)
    })
</script>

<template>
    <div id="page-container">
        <Header id="header"></Header>
        <div class="margin-top-80">
            <div v-for="post in posts" id="timeline">
                <div class="post-container">
                    <div class="card-header">
                        <img src="../assets/images/profile-pic.png" class="profile-pic">
                        <p>{{ post.username }}</p>
                    </div>
                    <div class="card-img-container">
                        <img class="post-img" :src=post.image>
                    </div>
                    <div class="card-footer">
                        <div class="likes-container">
                            <div id="heart-bttn">
                                <p>🤍</p>
                            </div>
                            <p>{{ post.likes.length }}</p>
                        </div>
                        <div class="caption">
                            <p> {{ post.caption }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
     
<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#page-container {
    height: 100%;
    overflow: hidden;
}

#timeline {
    display: flex;
    justify-content: center;
    background-color: rgb(21, 21, 21);
    color: white;
    font-family: Arial, Helvetica, sans-serif;
}

.margin-top-80 {
    margin-top: 80px;
}

.post-container {
    background-color: black;
    border: 1px solid rgb(57, 57, 57);
}

.card-header {
    display: flex;
    align-items: center;
    font-size: large;
    font-weight: bold;
    gap: 10px;
    padding: 10px;
}

.profile-pic {
    width: 30px;
    height: 30px;
}

.post-img {
    width: 600px;
    height: 600px;
}


.likes-container {
    display: flex;
    gap: 10px;
    padding: 10px;
}

#heart-bttn {
    width: 6em;
    height: 2em;
    font-size: 1em;
}

button {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    letter-spacing: 1px;
    font-size: 1em;
}

.caption {
    padding: 10px;
}

</style>