<script setup lang="ts">
import { AppSidebar } from '@/components/layouts/AppSidebar'
import Navbar from '@/components/layouts/navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useLocale } from '@/hooks/use-locale'
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'


const route = useRoute()
const { lang } = useLocale()

const transitionKey = computed(() => `${route.fullPath}-${lang.value}`)

</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full">
      <Navbar />
      <section class="ps-2">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" :key="transitionKey" />
          </transition>
        </router-view>
      </section>
    </main>
  </SidebarProvider>

</template>