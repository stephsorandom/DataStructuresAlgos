// Given the following data structure

const data = [
  {
    name: 'John Smith',
    age: new Map([['age', 88]]),
    favoriteMovie: [
      {
        title: 'Hulk',
        genre: 'action',
        rating: 6,
      },
    ],
  },
  {
    name: 'Tony Kim',
    age: new Map([['age', 3]]),
    favoriteMovie: [
      {
        title: 'Top Gun',
        genre: 'action',
        rating: 10,
      },
    ],
  },
  {
    name: 'John Smith',
    age: new Map([['age', 35]]),
    favoriteMovie: [
      {
        title: 'Saw',
        genre: 'horror',
        rating: 8,
      },
    ],
  },
];

// Using the bubble sort, please sort each profile
// by ascending order for the following properties:

// *** If you want to know how to retrieve a value from a map,
// please see https://developer.mozilla.org/en- US/docs/Web/JavaScript/Reference/Global_Objects/Map/get

// PART 1 : Sort by age
//(solution should look like this)

const sortedByAges = [
  {
    name: 'Tony Kim',
    age: new Map([['age', 3]]),
    favoriteMovie: [
      {
        title: 'Top Gun',
        genre: 'action',
        rating: 10,
      },
    ],
  },
  {
    name: 'John Smith',
    age: new Map([['age', 88]]),
    favoriteMovie: [
      {
        title: 'Hulk',
        genre: 'action',
        rating: 6,
      },
    ],
  },
];

const sortedByAge = (arr) => {
  map1 = data.age;

  // mapObj.get(key) key == age...what we want to sort by

  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr.reverse();
};
//console.log(sortedByAge(data,age))
console.log(map1);

//PART 2 : Sort by movie Rating
//(solution should look like this)

const sortedByRating = [
  {
    name: 'John Smith',
    age: new Map([['age', 88]]),
    favoriteMovie: [
      {
        title: 'Hulk',
        genre: 'action',
        rating: 6,
      },
    ],
  },
  {
    name: 'John Smith',
    age: new Map([['age', 35]]),
    favoriteMovie: [
      {
        title: 'Saw',
        genre: 'horror',
        rating: 8,
      },
    ],
  },
  {
    name: 'Tony Kim',
    age: new Map([['age', 3]]),
    favoriteMovie: [
      {
        title: 'Top Gun',
        genre: 'action',
        rating: 10,
      },
    ],
  },
];
