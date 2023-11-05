<template>
    <form @submit.prevent="login">
       <h1>Login</h1> 
       <label>
        Username
        <input type="text" />
       </label>
       <label>
        Password
        <input type="password" />
       </label>
       <button type="submit">Login</button>
    </form>
</template>

<script setup>
const isLoggedIn = useIsLoggedIn();
definePageMeta({
    layout: 'plain',
});

function login() {
    isLoggedIn.value = true;
    useRouter().push("/");
}
</script>