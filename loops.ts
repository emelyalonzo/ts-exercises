//#1
const clothesItems:string[] = [
    "Camiseta de Pokemon",
    "Pantalón coquinero",
    "Gorra de gansta",
    "Camiseta de Basket",
    "Cinrurón de Orión",
    "AC/DC Camiseta",
];

for (let i:number = 0; i < clothesItems.length; i++) {
    if (clothesItems[i].includes("Camiseta")) {
        console.log(clothesItems[i]);
    }
};

//#2
interface Alumn {
    name:string,
    T1:boolean,
    T2:boolean,
    T3:boolean,
    isApproved:boolean
}
const alumnsArray: Alumn[] = [
    { name: "Pepe Viruela", T1: false, T2: false, T3: true, isApproved:false},
    { name: "Lucia Aranda", T1: true, T2: false, T3: true, isApproved:false },
    { name: "Juan Miranda", T1: false, T2: true, T3: true, isApproved:false},
    { name: "Alfredo Blanco", T1: false, T2: false, T3: false, isApproved:false},
    { name: "Raquel Benito", T1: true, T2: true, T3: true, isApproved:false},
];
const approvedAlumns = (alumns: Alumn[]) => {
    for (let i = 0; i < alumns.length; i++) {
        if ((alumns[i].T1 && alumns[i].T2) ||(alumns[i].T1 && alumns[i].T3) ||(alumns[i].T2 && alumns[i].T3)) {
            alumns[i].isApproved = true;
        } else {
            continue;
        }
    }
};
approvedAlumns(alumnsArray);
console.log(alumnsArray);

//#3
const places:string[] = [
    "Japon",
    "Venecia",
    "Murcia",
    "Santander",
    "Filipinas",
    "Madagascar",
];
for (const element of places) {
    console.log(element);
};

//#4
interface Alien {
    name: string,
    race: string,
    planet: string,
    weight: string
};
const alien1: Alien = {
    name: "Wormuck",
    race: "Cucusumusu",
    planet: "Eden",
    weight: "259kg",
};
for (const key in alien1) {
    console.log(key + ": " + alien1[key]);
};

//#5
interface Place {
    id: number,
    name: string
}
const placesTravel: Place[] = [
    { id: 5, name: "Japan" },
    { id: 11, name: "Venecia" },
    { id: 23, name: "Murcia" },
    { id: 40, name: "Santander" },
    { id: 44, name: "Filipinas" },
    { id: 59, name: "Madagascar" },
];
const deleteTwoElementsById = (array:Place[], id1:number, id2:number) => {
    for (let key = 0; key < array.length; key++) {
      if (array[key].id == id1 || array[key].id == id2) {
        array.splice(key, 1);
      }
    }
    console.log(array);
}
deleteTwoElementsById(placesTravel, 11, 40);

//#6
interface Toy {
    id: number,
    name: string
};
const toysArray: Toy[] = [
    { id: 5, name: "Buzz MyYear" },
    { id: 11, name: "Action Woman" },
    { id: 23, name: "Barbie Man" },
    { id: 40, name: "El gato con Guantes" },
    { id: 40, name: "El gato felix" },
];
for (const i of toysArray) {
    if (i.name.includes("gato")) {
        toysArray.splice(toysArray.indexOf(i));
    }
};
console.log(toysArray);

//#7
interface ToyTwo {
    id: number,
    name: string,
    sellCount: number
};
const popularToysArray = [];
const toysArrayTwo: ToyTwo[] = [
  { id: 5, name: "Buzz MyYear", sellCount: 10 },
  { id: 11, name: "Action Woman", sellCount: 24 },
  { id: 23, name: "Barbie Man", sellCount: 15 },
  { id: 40, name: "El gato con Guantes", sellCount: 8 },
  { id: 40, name: "El gato felix", sellCount: 35 },
];
for (const iterator of toysArrayTwo) {
  if (iterator.sellCount > 15) {
    popularToysArray.push(iterator);
  }
};
console.log(popularToysArray);