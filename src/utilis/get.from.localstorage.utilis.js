export function getFromLocalStorage(key){
    let value = localStorage.getItem(key);

    return value;
}