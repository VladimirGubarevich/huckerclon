export function filterEmptyElem(array) {
    const filteredArray = array.filter(elem => elem != null);
    return filteredArray;
}