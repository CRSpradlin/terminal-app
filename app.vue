<script lang="ts" setup>
import './assets/css/tailwind.css';
const config = useAppConfig();
</script>

<template>
  <title>{{ config.title }}</title>
  <div class="hidden md:block fixed h-full w-full opacity-[.13] blur-md z-10 bg-[url('/digitalRain.gif')] bg-no-repeat bg-cover bg-center" />
  <div class="z-0 mt-[-80px] sm:mt-0 w-full h-full min-w-[300px]">
    <ConsoleComponent />
  </div>
</template>
