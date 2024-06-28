<template>
    <div class="relative">
      <label for="seach"> 
        <Icon name="mdi:magnify" class="absolute top-[50%] translate-y-[-50%] w-6 h-6" />
        <input type="text" 
        placeholder="Rechercher un lien" 
        class="pl-10 p-2 rounded-md border" 
        v-model="modelValue"
        />
      </label>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  // defineProps({
  //   modelValue: {type: String, require: true}
  // })
  
  const modelValue = defineModel() // on attend du parent une props modelValue
  </script>
  
  <style>
  
  </style>