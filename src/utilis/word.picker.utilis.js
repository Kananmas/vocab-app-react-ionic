export default function wordPicker(list) {
    let index = randomRange(list.length);
    let word = list.splice(index, 1)
    return word[0];
}


function randomRange(length) {
    return Math.floor(Math.random() * length);
}
