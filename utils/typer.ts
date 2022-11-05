import { Delay } from './helpers';

export type TyperItem = {
    itemType: 'a' | 'br' | 'span',
    value?: string,
    classes?: string[],
    href?: string
}

export class Typer {
    outputElement: HTMLElement;
    typerQueue: TyperItem[];

    constructor (outputElement: HTMLElement) {
        this.outputElement = outputElement;
        this.typerQueue = [];
    }

    push = (newTyperItem: TyperItem) => {
        this.typerQueue.push(newTyperItem);
    };

    write = async () => {
        for (const typerItem of this.typerQueue) {
            const newOutputEntry = document.createElement(typerItem.itemType);
            if (typerItem.itemType === 'a' && typerItem.href !== undefined) {
                // Did this because type script was throwing errors about href not being a property of element.
                // We are checking element type before hand so we should be good.
                // eslint-disable-next-line dot-notation
                newOutputEntry['href'] = typerItem.href;
            }
            this.outputElement.appendChild(newOutputEntry);
            if (typerItem.classes) {
                for (const cssClass of typerItem.classes) {
                    newOutputEntry.classList.add(cssClass);
                }
            }
            if (typerItem.value) {
                for (let i = 0; i < typerItem.value.length; i++) {
                    newOutputEntry.innerHTML += typerItem.value[i];
                    await Delay(10);
                    window.scrollTo(0, document.body.scrollHeight);
                }
            }
        }
    };
}
