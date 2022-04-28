class Cooking{
    title : string;
    meal : number;
    element: string[];

    constructor(title: string,meal: number, element: string[]) {
        this.title = title;
        this.meal = meal;
        this.element = element;

    }

}
let cooking = new Cooking(` Sườn xào chua ngọt`,2,[`400 g sườn thăn`,`4 tbsp nước mắm`,`5 tsp đường`,`5 tsp nước cốt chanh`,`1/3 bát nước sôi`,`Hành khô, tỏi, ớt, hành lá`,`2 quả cà chua`,`Hành tây (ớt chuông)`])

console.log(`Ten mon an` + cooking.title)
console.log(`Khau phan an `+ cooking.meal)
console.log(`Thanh phan: `)

for (let i = 0; i < cooking.element.length; i++) {
    console.log(` - ` + cooking.element[i])

}



