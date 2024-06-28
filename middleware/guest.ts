import axios from "axios";
export default defineNuxtRouteMiddleware(async(to, from) => {
    console.log('Guest middleware');

    // try {
    //    const {data:user} =await axios.get('/user');

    //     // if(user){ 
    //     //     return navigateTo('/profiles') //redirige sur profiles
    //     // }
        
    // } catch (error) {
        
    // }
    
})