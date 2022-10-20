export const useHistory = () => {
    return useState('history', ():string[] => {
        return [];
    });
};
