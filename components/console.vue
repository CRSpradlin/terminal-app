<script setup>
const awaitingInput = ref(true);
const input = ref("");
</script>

<template>
  <div class="text-stone-500 break-all">
    <div id="history"></div>
    <span id="terminal-line">$server@crspradlin: {{input}}</span><Cursor v-if="awaitingInput" /><br/>
    <span id="output"></span>
  </div>
</template>
