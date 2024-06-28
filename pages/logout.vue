<template>
    <div>
      Déconnexion...
    </div>
  </template>
  
  <script lang="ts" setup>
  import axios from "axios";
  
  definePageMeta({
    layout: 'simple'
  })
  
  await axios.post('/api/logout')
  </script>
  
  <style>
  
  </style>