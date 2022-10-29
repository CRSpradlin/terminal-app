<script setup>
const history = useHistory();

const handleMobileKeyboardToggle = () => {
    document.getElementById('mobileInput').focus();
};

const awaitingInput = ref(true);
const input = ref('');
if (process.client) {
    window.addEventListener('keydown', async (event) => {
        if (!awaitingInput.value) { return; }

        const key = event.key;
        switch (key.toLowerCase()) {
        case 'enter':
            awaitingInput.value = false;
            await processEnterKeyDown(document, input, history);
            awaitingInput.value = true;
            break;
        case 'backspace':
            processBackspaceKeyDown(input, history);
            break;
        case 'arrowup':
            event.preventDefault();
            processUpArrowKeyDown(input, history);
            break;
        case 'arrowdown':
            event.preventDefault();
            processDownArrowKeyDown(input, history);
            break;
        default:
            if (key.length === 1) { input.value += event.key; }
            history.value.savedEdit = input.value;
        }
    });
}
</script>

<template>
  <div class="text-stone-200 flex flex-col break-all h-screen">
    <div class="flex flex-grow min-h-fit m-auto">
      <HomeContent />
    </div>
    <div id="history" />
    <span id="terminal-line" @click="handleMobileKeyboardToggle">
      <span class="text-green-500">server@crspradlin</span>:<span class="text-blue-500">~</span>$ {{ input }}<CursorComponent v-if="awaitingInput" /><br>
    </span>
    <input id="mobileInput" class="h-0" type="text">
    <span id="output" />
    <div name="classes needed" class="hidden text-red-500 text-green-500" />
  </div>
</template>
