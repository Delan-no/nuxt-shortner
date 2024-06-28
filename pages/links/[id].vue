<template>
  <div class="mx-auto max-w-md border-2 rounded-lg py-6 px-4">
    <h1 class="text-2xl text-center">
      Modifier le lien
    </h1>
    <GoBack class="text-red-500 text-xl" />
    <div class="w-full">

      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Lien Court
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text" placeholder="Entrez le lien cout">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            Lien Complet
          </label>
          <input
            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password" placeholder="Entrez le lien complet">
          <!-- <p class="text-red-500 text-xs italic">Entrez le Lien Complet.</p> -->
        </div>

        <div class="text-right">
          <button type="submit"
            class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Modifier le lien
          </button>
        </div>
      </form>

    </div>
  </div>
</template>

<script lang="ts" setup>


</script>

<style>
label {
  @apply block mb-2 text-sm font-medium text-gray-900
}

input {
  @apply text-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
}
</style>