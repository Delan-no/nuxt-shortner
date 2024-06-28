<template>
    <div>
  
      <nav class="flex justify-between items-center mb-4 prose">
        <h1>Mes liens</h1>
        <div class="flex items-center gap-3 justify-end">
          <SeachInput :model-value="search" />
          <NuxtLink to="/links/create"
            class="no-underline px-4 py-2 bg-gray-600 text-white hover:bg-gray-800 rounded-md transition duration-300">
            Créer un Lien
          </NuxtLink>
        </div>
      </nav>
  
      <div v-if="true">
        <table class="w-full border text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th>Lien Complet</th>
              <th>Lien Court</th>
              <th>Nbr. Vues</th>
              <th>Supprimer</th>
              <th>Editer</th>
              <th aria-label="Rafraichir">
                <Icon name="mdi:refresh" class="w-6 h-6 text-blue-500"/>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="link in links" :key="link.id" class="bg-white border-b">
              <td>
                <a :href="link.full_links" target="_blank">{{ link.full_links }}</a>
              </td>
              <td>
                <a href="{{ `${useRuntimeConfig().public.appUrl}/${link.short_links}` }}" target="_blank">
                  {{ link.short_links }}
                </a>
              </td>
              <td>
                {{ link.view }}
  
              </td>
              <td>
                <button>
                  <Icon name="mdi:trash" class="text-red-500 h-6 w-6"/>
                </button>
              </td>
              <td>
                <NuxtLink :to="`/links/${link.id}/`">
                  <Icon name="material-symbols:edit-square-outline" class="text-blue-500 w-6 h-6"/>
                </NuxtLink>
              </td>
              <td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div v-else>
        <Icon name="" />
  
        <p>
          <!-- Afficher si on entre un terme de rechercher et qu'on ne trouve rien -->
          <span>Aucun lien ne correspond à votre recherche.</span>
  
          <!-- Afficher si au chargement de la page si aucu lien n'est retourné de la BDD -->
          <span>Aucun lien créé pour le moment
            <NuxtLink to="#" class="text-green-600 underline">
              Créez votre premier lien
            </NuxtLink>
          </span>
        </p>
      </div>
      
    </div>
  </template>
  
  <script lang="ts" setup>
  
  const search = ref<string>("");
  
  const links = [
    {
      short_links: "edlk",
      full_links: "https://youtube.com",
      view: 3,
      id: 1,
    },
    {
      short_links: "delk",
      full_links: "https://w3school.com",
      view: 8,
      id: 2,
    },
    {
      short_links: "kdel",
      full_links: "https://devdocs.io",
      view: 1,
      id: 3,
    },
  ]
  
  
  </script>
  
  <style scoped>
  th {
    @apply px-6 py-3;
  }
  
  td {
    @apply px-6 py-4;
  }
  </style>