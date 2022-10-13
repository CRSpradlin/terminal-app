<script lang="ts" setup>
import './assets/css/tailwind.css'
import Console from './components/console.vue';
const config = useAppConfig();
</script>

<template>
  <div class="w-full h-full">
    <Console />
  </div>
</template>
