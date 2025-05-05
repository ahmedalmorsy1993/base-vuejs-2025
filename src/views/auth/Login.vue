<template>
  <div class="w-full h-screen justify-center flex-col flex place-items-center">
    <h1 class="text-3xl font-bold text-center mb-4">Login</h1>
    <form @submit="onSubmit" class="space-y-5 w-full md:w-2/3 lg:w-1/2 px-2">
      <TextInput label="Email" placeholder="username" name="username" />
      <TextInput label="Password" type="password" name="password" />
      <Button type="submit" class="w-full">Login</Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { useForm } from 'vee-validate'
import { object, string } from 'yup'

const { handleSubmit } = useForm({
  validationSchema: object({
    username: string().required(),
    password: string().required(),
  }),
})

const onSubmit = handleSubmit((values, { setErrors }) => {
  console.log(values)
})
</script>
