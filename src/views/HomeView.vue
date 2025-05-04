<script setup lang="ts">
import { httpClient } from '@/api/http';
import { useQuery } from '@tanstack/vue-query';

const { data } = useQuery({
  queryKey: ['todos'],
  queryFn: () => httpClient.get('/todos/1'),
})
</script>
<template>
  <main class="text-center">
    {{ $t('welcome') }}
    <pre>{{ data?.data }}</pre>
  </main>
</template>