export const Delay = (amount: number) => new Promise<boolean>((resolve) => {
    setTimeout(() => {
        resolve(true);
    }, amount);
})