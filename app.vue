<script lang="ts" setup>
import './assets/css/tailwind.css';
const config = useAppConfig();
</script>

<template>
  <title>{{ config.title }}</title>
  <div class="hidden md:block fixed h-full w-full opacity-[.13] blur-md bg-[url('/digitalRain.gif')] bg-no-repeat bg-cover bg-center" />
  <div class="relative bg-transparent mt-[-80px] sm:mt-0 w-full h-full min-w-[300px]">
    <ConsoleComponent />
  </div>
  <div name="classes needed" class="hidden text-red-500 text-green-500 underline" />
</template>
