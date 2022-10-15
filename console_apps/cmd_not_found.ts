import { Typer } from "~~/utils/typer";

export const CMDNotFound = (inputArray: string[], typer: Typer) => {
    typer.push({itemType: 'span', value: 'ERROR:', classes: ['text-red-500']});
    typer.push({itemType: 'span', value: ` Cound not find the command "${inputArray[0]}". Type "help" to view a list of commands.`});
    typer.push({itemType: 'br'});
}