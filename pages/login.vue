<template>
    <div class="max-w-xl mx-auto">
      <h1 class="mb-4 text-2xl font-bold text-center"> Connexion </h1>
  
      <form @submit.prevent="login(form)">
        <label>
          Email
          <input type="text" v-model="form.email"/>
        </label>
        <label>
          Mot de passe
          <input type="password" v-model="form.password"/>
        </label>
  
        <button type="submit" class="btn"> Se connecter</button>
      </form>
      <p>Pas de compte ?
        <NuxtLink class="underline text-lime-600" to="register"> Inscrivez vous !</NuxtLink>
      </p>
    </div>
  </template>
  
  <script lang="ts" setup>
  definePageMeta({
    layout: 'centered'
  })
  
  import axios from "axios";
  
  interface LoginPayload {
    email: string;
    password: string;
  }
  
  const form = ref<LoginPayload>({
    email: "",
    password: "",
  })
  async function login(payload: LoginPayload) {
    await axios.post('/api/login', payload)
    useRouter().push('/me')
  }
  </script>
  
  <style>
  
  </style>