//#1
interface Movie {
    title: string,
    duration: number,
    categories: string[]
}
const movieNames: Movie[] = [
    { title: "Madaraspar", duration: 192, categories: ["comedia", "aventura"] },
    { title: "Spiderpan", duration: 122, categories: ["aventura", "acción"] },
    {
      title: "Solo en Whatsapp",
      duration: 223,
      categories: ["comedia", "thriller"],
    },
    {
      title: "El gato con guantes",
      duration: 111,
      categories: ["comedia", "aventura", "animación"],
    },
];
const sortCategory = (array: Movie[]) => {
    let result = {};
    for (const iterator of array) {
        for (let i:number = 0; i < iterator.categories.length; i++) {
            if (iterator.categories[i] in result) {
                result[iterator.categories[i]].push(iterator.title);
            } else {
                result[iterator.categories[i]] = [];
                result[iterator.categories[i]].push(iterator.title);
            }
        }
    }
    return result;
}
console.log(sortByCategory(movies));

//#2
interface UserMovies {
    name: string, 
    favoritesSounds: {}
}
const userObjects: UserMovies[] = [
    {
      name: "Manolo el del bombo",
      favoritesSounds: {
        wave: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Mortadelo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Super Lopez",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "El culebra",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
];
const averageSound = (array: UserMovies[]) => {
    let result = { total: 0, count: 0 };
    for (const iterator of array) {
        for (const key in iterator.favoritesSounds) {
        result.total += iterator.favoritesSounds[key].volume;
        result.count++;
        }
    }
    return console.log("The average volume of the users is: " + result.total / result.count);
}
averageSounds(userObjects);

//#3
const userObjectsTwo: UserMovies[] = [
    {
      name: "Manolo el del bombo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 50 },
        rain: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "Mortadelo",
      favoritesSounds: {
        waves: { format: "mp3", volume: 30 },
        shower: { format: "ogg", volume: 55 },
        train: { format: "mp3", volume: 60 },
      },
    },
    {
      name: "Super Lopez",
      favoritesSounds: {
        shower: { format: "mp3", volume: 50 },
        train: { format: "ogg", volume: 60 },
        firecamp: { format: "mp3", volume: 80 },
      },
    },
    {
      name: "El culebra",
      favoritesSounds: {
        waves: { format: "mp3", volume: 67 },
        wind: { format: "ogg", volume: 35 },
        firecamp: { format: "mp3", volume: 60 },
      },
    },
  ];
const favouriteSound = (array: UserMovies[]) => {
    let result = {};
    for (const iterator of array) {
        for (const key in iterator.favoritesSounds) {
            if (key in result) {
                result[key] += 1;
            } else {
                result[key] = 1;
            }
        }
    }
    return console.log(result);
}
favouriteSound(userObjectsTwo);

//#4
const animals: string[] = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];
const findIndex = (array:string[], text:string) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return "The index of " +array[i]+ " is " +i;
    }
  }
  return "Not found";
}
console.log(findIndex(animals,"Serpiente"));
console.log(findIndex(animals,"Mosquito"));

//#5
const dicee = (number:number) => {
    return console.log(Math.ceil(number * Math.random()));
}

//#6
const swapInArray = (array:string[], element1:string, element2:string) => {
    let result = [];
    for (const key in array) {
        if (array[key] == element1) {
            result.push(element2);
        } else if (array[key] == element2) {
            result.push(element1);
        } else {
            result.push(array[key]);
        }
    }
    return console.log(result);
}
swapInArray(['a', 'b', 'c','d'], 'a', 'c');
swapInArray(['a', 'b', 'c','d'], 'c', 'd');
