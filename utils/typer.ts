import { Delay } from './helpers';

export type TyperItem = {
    itemType: 'br' | 'span',
    value?: string,
    classes?: string[],
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
            this.outputElement.appendChild(newOutputEntry);
            if (typerItem.classes) {
                for (const cssClass of typerItem.classes) {
                    newOutputEntry.classList.add(cssClass);
                }
            }
            if (typerItem.value) {
                for (let i = 0; i < typerItem.value.length; i++) {
                    newOutputEntry.innerHTML += typerItem.value[i];
                    await Delay(15);
                }
            }
        }
    };
}
