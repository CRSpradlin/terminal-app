export type HistoryState = {
    list: string[],
    index: number,
    savedEdit: string
}

export const useHistory = () => {
    return useState('history', ():HistoryState => {
        return {
            list: [],
            index: 0,
            savedEdit: ''
        };
    });
};
