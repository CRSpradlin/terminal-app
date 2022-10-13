<script setup>
const awaitingInput = ref(true);
const input = ref("");
if (process.client) {
    window.addEventListener('keydown', async (event) => {
        if(!awaitingInput.value) return;

        const key = event.key;
        switch (key.toLowerCase()) {
            case 'enter':
                awaitingInput.value = false;
                await processEnterKeyDown(document, input);
                awaitingInput.value = true;
                break;
            case 'backspace':
                processBackspaceKeyDown(input);
                break;
            default:
                if (key.length==1)
                    input.value += event.key;
        }
    });
}
</script>

<template>
  <div class="text-stone-500 break-all">
    <div id="history"></div>
    <span id="terminal-line">$server@crspradlin: {{input}}</span><Cursor v-if="awaitingInput" /><br/>
    <span id="output"></span>
  </div>
</template>
