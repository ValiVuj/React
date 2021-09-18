export function getRandomName() {
    var name = ["Val", "Nike", "Iggy", "Dan"];
    var randomName = name[Math.floor(Math.random() * name.length)];
    return randomName;
}

export function getRandomColor() {
    var color = ["green", "blue", "white", "yellow"];
    var randomColor = color[Math.floor(Math.random() * color.length)];
    return randomColor;
}

    const RANDOM = "RANDOM";

    export default RANDOM;