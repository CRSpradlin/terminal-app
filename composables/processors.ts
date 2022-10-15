import { Typer } from '../utils/typer';
import { ExecuteCommand, ExecutionResultProps } from '../utils/execute_command';
import { Ref } from 'nuxt/dist/app/compat/vue-demi';

export const processEnterKeyDown = async (document: Document, inputRef: Ref<string>) => {
    let executionResult: ExecutionResultProps;
    const outputElement: HTMLElement = document.getElementById('output');
    const terminalLineElement: HTMLElement = document.getElementById('terminal-line');
    const historyElement: HTMLElement = document.getElementById('history');
    const typer: Typer = new Typer(outputElement);

    if (inputRef.value.trim().length > 0) {
        //Excute App
         executionResult = await ExecuteCommand(inputRef, typer, historyElement, terminalLineElement);
    }

    // Needed for re-typing prompt
    typer.push({itemType: 'span', value: 'server@crspradlin', classes: ['text-green-500']});
    typer.push({itemType: 'span', value: ':'});
    typer.push({itemType: 'span', value: '~', classes: ['text-blue-500']});
    typer.push({itemType: 'span', value: '$'});
    //

    await typer.write();

    // Remove redundant prompt
    for (let i = 0; i<4; i++) {
        outputElement.removeChild(outputElement.children[outputElement.children.length-1]);
    }

    if (executionResult && executionResult.redisplayTerminalLine) {
        terminalLineElement.classList.remove('hidden');
    }

    if (!executionResult || (executionResult && executionResult.displayMostRecentCommand)) {
        const spanElement: HTMLElement = document.createElement('span');
        spanElement.innerHTML = terminalLineElement.innerHTML;
        historyElement.appendChild(spanElement);
    }
    
    historyElement.innerHTML += outputElement.innerHTML;
    outputElement.innerHTML = '';

    inputRef.value = "";
}

export const processBackspaceKeyDown = (inputRef: Ref<string>) => {
    if (inputRef.value.length > 0) {
        inputRef.value = inputRef.value.slice(0, inputRef.value.length-1);
    }
} 
