import { Ref } from 'nuxt/dist/app/compat/vue-demi';

export const Clear = (historyElement: HTMLElement, terminalLineElement: HTMLElement, inputRef: Ref<string>) => {
    historyElement.innerHTML = '';
    inputRef.value = '';
    terminalLineElement.classList.add('hidden');
};

export const HelpString = 'Clears the terminal screen.';
