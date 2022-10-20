
import * as clearApp from './clear';
import * as echoApp from './echo';
import * as historyApp from './history';

import { Typer } from '~~/utils/typer';

export const HelpString = 'Shows all the available commands.';

const appHelpStrings = {
    clear: clearApp.HelpString,
    echo: echoApp.HelpString,
    help: HelpString,
    history: historyApp.HelpString
};

export const Help = (typer: Typer) => {
    for (const key of Object.keys(appHelpStrings)) {
        typer.push({ itemType: 'span', value: `${key}: `, classes: ['text-blue-500'] });
        typer.push({ itemType: 'span', value: appHelpStrings[key] });
        typer.push({ itemType: 'br' });
    }
};
