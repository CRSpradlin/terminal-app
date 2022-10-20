import { Ref } from 'nuxt/dist/app/compat/vue-demi';
import { Typer } from '~~/utils/typer';

export const History = (historyStateRef: Ref<string[]>, typer: Typer) => {
    for (const historyItem of historyStateRef.value) {
        typer.push({ itemType: 'span', value: historyItem, classes: ['text-blue-500'] });
        typer.push({ itemType: 'br' });
    }
};

export const HelpString = 'Displays list of all previous commands executed.';
