<script setup>
import router from '@/router';
import Header from '../components/Header.vue'
import { ref } from 'vue'

let imageURL = ref('')
let caption = ref('')

function createPost() {
    const reqBody = {
        "image": imageURL.value,
        "caption": caption.value
    }
    fetch("http://localhost:3000/createpost",
        {
            headers: { "Content-Type": "application/json", "Authorization": document.cookie },
            body: JSON.stringify(reqBody),
            method: "POST"
        })
        .then(response => {
            if (response.status === 200) {
                alert("Post successfully uploaded")
                router.push('/posts')
                console.log(document)
            } else {
                alert("Something went wrong - please try again.")
            }
        })
        .catch(error => {
            console.log(error)
        })
}
</script>

<template>
    <Header id="header"></Header>

    <div id="page-container" class="flex-row-center">
        <div id="inputs-container" class="flex-row-center">
            <h2>New post</h2>
            <div id="img-preview">
                <!-- created image preview by setting src as ref variable (imageURL) above -->
                <img :src=imageURL>
            </div>
            <div id="img-container" class="flex-row-center">
                <label for="img-input">
                    Image URL
                </label>
                <input type="text" placeholder="Paste an image URL" id="img-input" class="input-size" v-model="imageURL">
            </div>
            <div id="caption-container" class="flex-row-center">
                <label for="caption-input">
                    Caption
                </label>
                <textarea type="text" placeholder="Write a caption..." id="caption-input" class="input-size"
                    v-model="caption"></textarea>
                <button @click="createPost()" id="share-bttn" class="input-size">
                    Share
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.flex-row-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

}

.input-size {
    width: 300px;
    height: 25px;
    font-size: medium;
}

#page-container {
    background-color: rgb(21, 21, 21);
    height: 100vh;
}

#inputs-container {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    background-color: black;
    width: 600px;
    height: 100%;
    border-color: rgb(57, 57, 57);
    border-style: none solid;
    border-width: 1px;

}

#img-preview img {
    width: 400px;
    height: 400px;
    border: 1px solid rgb(57, 57, 57);
    background-color: white;
}

#share-bttn {
    background-color: #0095f6;
    border: solid 2px #0095f6;
    border-radius: 3px;
    color: white;
    font-weight: bold
}
</style>