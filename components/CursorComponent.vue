<script setup>
const content = ref('');
setInterval(() => {
    if (content.value.length) {
        content.value = '';
    } else {
        content.value = '|';
    }
}, 500);
</script>

<template>
  <span>{{ content }}</span>
</template>
