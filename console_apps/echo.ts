import { Typer } from '~~/utils/typer';

export const Echo = (inputArray: string[], typer: Typer) => {
    inputArray = inputArray.slice(1);
    typer.push({ itemType: 'span', value: inputArray.join(' ') });
    typer.push({ itemType: 'br' });
};
