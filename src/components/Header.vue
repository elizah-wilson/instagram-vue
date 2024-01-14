<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div id="header">
        <RouterLink to="/posts">
            <img src="../assets/images/white-instagram.png" alt="white and black instagram logo" id="logo">
        </RouterLink>

        <div id="icons-div">
            <RouterLink to="/create-post">
                <img src="../assets/images/createPost-icon.png" alt="create post icon - a plus sign inside of a box" class="icon-size icon-background">
            </RouterLink>
            <RouterLink to="/posts">
                <img src="../assets/images/white-house.png" alt="white house icon" class="icon-size">
            </RouterLink>

            <RouterLink to="#">
                <img src="../assets/images/white-heart.png" alt="white heart" class="icon-size">
            </RouterLink>

            <RouterLink to="">
                <img src="../assets/images/profile-pic.png" alt="clip art of person silohuette with colorful background"
                    class="icon-size">
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
#header {
    background-color: black;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(57, 57, 57);

    /* Fixed NavBar - stays visible while scrolling*/
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
}

#logo {
    width: 200px;
    height: 80px;
    margin-left: 22rem;
}

#icons-div {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-right: 20rem;
}

.icon-size {
    width: 40px;
    height: 40px
}

.icon-background {
    background-color: white;
    border-radius: 50%;
}
</style>