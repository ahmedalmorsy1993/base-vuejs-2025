<script setup lang="ts">
import { AppSidebar } from '@/components/layouts/AppSidebar'
import Navbar from '@/components/layouts/navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { useLocale } from '@/hooks/use-locale'
import { RouterView } from 'vue-router'


const { transitionKey } = useLocale()


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