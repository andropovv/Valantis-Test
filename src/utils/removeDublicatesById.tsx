export function removeDuplicatesById(arr: any[]) {
    const uniqueIds = new Set();
    return arr.filter((obj) => {
        if (!uniqueIds.has(obj.id)) {
            uniqueIds.add(obj.id);
            return true;
        }
        return false;
    });
}
