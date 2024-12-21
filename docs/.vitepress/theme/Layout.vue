<template>
  <div class="min-h-screen bg-gray-900">
    <header class="sticky top-0 z-50 bg-gray-900/80 backdrop-blur">
      <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2">
          <img src="/logo.svg" alt="Build DAO" class="w-8 h-8" />
          <span class="text-xl font-bold text-white">Build DAO</span>
        </a>
        
        <div class="flex items-center gap-8">
          <a v-for="item in nav" 
             :key="item.text"
             :href="item.link"
             class="text-gray-300 hover:text-white transition-colors">
            {{ item.text }}
          </a>
          
          <a href="/submit"
             class="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg font-medium hover:bg-yellow-400 transition-colors">
            Submit Project
          </a>
        </div>
      </nav>
    </header>

    <main>
      <Content />
    </main>

    <footer class="bg-gray-900 border-t border-gray-800 py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Footer content from the React version -->
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
const { theme } = useData()
const nav = theme.value.nav
</script>