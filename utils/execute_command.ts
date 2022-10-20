import { Ref } from 'nuxt/dist/app/compat/vue-demi';
import { Typer } from './typer';
import { Clear } from '~~/console_apps/clear';
import { CMDNotFound } from '~~/console_apps/cmd_not_found';
import { Echo } from '~~/console_apps/echo';
import { Help } from '~~/console_apps/help';

export type ExecutionResultProps = {
    displayMostRecentCommand: boolean,
    redisplayTerminalLine: boolean
}

// eslint-disable-next-line require-await
export const ExecuteCommand = async (inputRef: Ref<string>, typer: Typer, historyElement: HTMLElement, terminalLineElement: HTMLElement) => {
    const inputValue = inputRef.value;
    const resultProps: ExecutionResultProps = {
        displayMostRecentCommand: true,
        redisplayTerminalLine: false
    };
    const inputArray = inputValue.split(' ');
    switch (inputArray[0].toLowerCase()) {
    case 'clear':
        Clear(historyElement, terminalLineElement, inputRef);
        resultProps.displayMostRecentCommand = false;
        resultProps.redisplayTerminalLine = true;
        break;
    case 'echo':
        Echo(inputArray, typer);
        break;
    case 'help':
        Help(typer);
        break;
    default:
        CMDNotFound(inputArray, typer);
    }
    return resultProps;
};
