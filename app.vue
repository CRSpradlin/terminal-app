<script lang="ts" setup>
import './assets/css/tailwind.css';
const config = useAppConfig();
</script>

<template>
  <title>{{ config.title }}</title>
  <div class="mt-[-80px] sm:mt-0 w-full h-full min-w-[300px]">
    <ConsoleComponent />
  </div>
</template>
