import { Typer } from '~~/utils/typer';

export const About = (typer: Typer) => {
    typer.push({ itemType: 'span', value: 'Creator Name: ', classes: ['text-blue-500'] });
    typer.push({ itemType: 'span', value: 'Christopher Spradlin, Chris for short :)' });
    typer.push({ itemType: 'br' });
    typer.push({ itemType: 'span', value: 'Creator Contact: ', classes: ['text-blue-500'] });
    typer.push({ itemType: 'a', value: 'contact@crspradlin.org', classes: ['text-purple-500', 'underline'], href: 'mailto:contact@crspradlin.org' });
    typer.push({ itemType: 'br' });
    typer.push({ itemType: 'br' });
    typer.push({ itemType: 'span', value: 'Site Info: ', classes: ['text-blue-500'] });
    typer.push({ itemType: 'span', value: 'This site was created as an interactive web application to mimic the look and feel of a terminal. Feel free to clone, submit an issue, or fork this web application\'s code on github at this link: ' });
    typer.push({ itemType: 'a', value: 'terminal-app', classes: ['text-purple-500', 'underline'], href: 'https://github.com/CRSpradlin/terminal-app' });
    typer.push({ itemType: 'br' });
};

export const HelpString = 'Displays site and creator info.';
