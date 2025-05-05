<script setup lang="ts">
import { useLocale } from '@/hooks/use-locale'
import { RouterView } from 'vue-router'


const { transitionKey } = useLocale()


</script>

<template>
    <main class="w-full">
        <router-view v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" :key="transitionKey" />
          </transition>
        </router-view>
    </main>

</template>