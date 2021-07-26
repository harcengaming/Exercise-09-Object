//No. 01
let tokek = {
  Nama: 'Tokek',
  Kaki: 4,
  Spesies: 'Genus Gecko',
  Warna: ['Abu-abu kecoklatan', 'Kehijauan', 'kulit perut berwarna lebih muda'],
  Makanan: ['Seranga', 'Cecak', 'Tikus kecil', 'Burung kecil'],
  Suara: 'tokeeek..., tokeeek...',
  Keahlian: () => {
      return "memangsa cecak";
  }
};

console.log("Nama: ", tokek.Nama);
console.log("Jumlah Kaki: ", tokek.Kaki);
console.log("Spesies: ", tokek.Spesies);
console.log("Warna: ", tokek.Warna[0], ",", tokek.Warna[1], ",", tokek.Warna[2]);
console.log("Makanan: ", tokek.Makanan[0], ",", tokek.Makanan[1], ",", tokek.Makanan[2], ",", tokek.Makanan[3]);
console.log("Suara: ", tokek.Suara);
console.log("Keahlian: ", tokek.Keahlian());


//No. 02
const data = 
[
  {
    name: 'Alpha',
    class: 'Dragon',
    club: ['Bola', ' Bulutangkis.'],
  },
  {
    name: 'Beta',
    class: 'Lizard',
    club: ['Membaca', ' Bulutangkis.'],
  },
 ];

 console.log(data[0].name +  " ada di kelas " + data[0].class + " dia mengikuti " + data[0].club);
 console.log(data[1].name +  " ada di kelas " + data[1].class + " dia mengikuti " + data[1].club);


 //No. 03
 let todos = 
[
  {id: 1, todo: "belajar coding"},
  {id: 2, todo: "nanti tidur"},
];

function printAll() {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
  };
};

// printAll();
console.log(printAll());


function printByID(id) {
  return todos[id-1].todo;
};

console.log("Print by ID:", printByID(1));


function add(newTodo) {
  todos.push({
    id: todos.length - 1,
    todo: "ngerjain tugas",
  });
  return newTodo;
};


// const newToDo = todos.push({
//     id: todos.length - 1,
//     todo: "ngerjain tugas",
// });
// console.log(newToDo);

function deleteByID(id) {
  return todos[id-1].todo
};


function updateBYID(newTodo) {
  return todos[id+2].todo
};

//No. 04
let buahBuah = 
[
  {
    nama: 'Apple',
    warna: 'Merah',
    namaLatin: 'Molus sylvestris',
    tipeBiji: 'single seed',
  },
  {
    nama: 'Banana',
    warna: 'Kuning',
    namaLatin: 'Musa paradisiaca',
    tipeBiji: 'double seed',
  },
  {
    nama: 'Blueberry',
    warna: 'Biru tua keunguan',
    namaLatin: 'Vaccinium Carymbosum',
    tipeBiji: 'single seed',
  },
  {
    nama: 'Cherry',
    warna: 'Merah cerah',
    namaLatin: 'Prunus Apetala',
    tipeBiji: 'double seed',
  },
  {
    nama: 'Lemon',
    warna: 'Kuning',
    namaLatin: 'Citrus Limon',
    tipeBiji: 'single seed',   
  },
  {
    nama: 'Mango',
    warna: 'Kuning serta Jingga',
    namaLatin: 'Citrus Reticulata',
    tipeBiji: 'double seed',
  },
  {
    nama: 'Orange',
    warna: 'Geoluhread atau kuning-merah',
    namaLatin: 'Molus sylvestris',
    tipeBiji: 'single seed',
  },
  {
    nama: 'Pear',
    warna: 'Kuning keemasan ataupun hijau',
    namaLatin: 'Pyrus Caucasica',
    tipeBiji: 'double seed',
  }
];

buahBuah.forEach((listbuah) => {
  console.log(listbuah);
});