export function getRandomInt(
    min: number,
    max: number
): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function getRandomFloat(
    min: number,
    max: number,
    toFixed: number
): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(toFixed));
}