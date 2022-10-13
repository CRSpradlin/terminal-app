type TyperItem = {
    itemType: 'br' | 'span',
    value?: string,
    classes?: string[],
}

const delay = (amount) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(true);
    }, amount);
})

export class Typer {
    outputElement: any;
    typerQueue: TyperItem[];

    constructor (outputElement) {
        this.outputElement = outputElement;
        this.typerQueue = [];
    };

    push = (newTyperItem: TyperItem) => {
        this.typerQueue.push(newTyperItem);
    };

    write = async () => {
        for (const typerItem of this.typerQueue) {
            const newOutputEntry = document.createElement(typerItem.itemType);
            this.outputElement.appendChild(newOutputEntry);
            if (!typerItem.value) continue;
            for (let i=0; i<typerItem.value.length; i++) {
                newOutputEntry.innerHTML += typerItem.value[i];
                await delay(10);
            }
            newOutputEntry.classList.add('text-red-500');
        }
    };
    
}

export const processEnterKeyDown = async (document, inputRef) => {
    const outputElement = document.getElementById('output');
    const terminalLineElement = document.getElementById('terminal-line');
    const historyElement = document.getElementById('history');
    const typer = new Typer(outputElement);

    //Excute App
    typer.push({itemType: 'span', value: 'chickenbutts'});
    typer.push({itemType: 'br'});
    typer.push({itemType: 'span', value: '$server@crspradlin:'});

    await typer.write();
    //Execute App

    const spanElement = document.createElement('span');
    spanElement.innerHTML = terminalLineElement.innerHTML;

    outputElement.removeChild(outputElement.children[outputElement.children.length-1]);
    historyElement.appendChild(spanElement);
    
    const breakElement = document.createElement('br');
    historyElement.appendChild(breakElement);
    historyElement.innerHTML += outputElement.innerHTML;
    outputElement.innerHTML = '';

    inputRef.value = "";
}

export const processBackspaceKeyDown = (inputRef) => {
    if (inputRef.value.length > 0) {
        inputRef.value = inputRef.value.slice(0, inputRef.value.length-1);
    }
} 
