export default defineNuxtRouteMiddleware((to, from) => {
 const userisLoggedIn = false;
    if(!userisLoggedIn) {
    return navigateTo({path: '/login'});
 }
})
