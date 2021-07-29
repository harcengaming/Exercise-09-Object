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

function printByID(id) {
  return todos[id - 0].todo;
};

function add(newTodo) {
  todos.push({
    id: todos.length + 1,
    todo: newTodo,
  });
  return todos;
};

function deleteByID(id) {
  todos.splice(id - 1, 1);
  return todos;
};

// function updateByID(id) {
//   todos.splice[id + 2].todo;
//   return todos;
// };

objIndex = todos.findIndex((obj => obj.id == 1));

//Log object to Console.
console.log("Before update: ", todos[objIndex]);

//Update object's name property.
todos[objIndex].todo = "belajar CRUD"


printAll();
console.log("Print by ID:", printByID(1));
console.log("Add : ", add("ngerjain tugas"));
console.log("Delete : ", deleteByID(2));
// console.log("Update :", updateByID(2));
console.log("Update: ", todos[objIndex]);


//No. 04
let buahBuah = 
[
  {
    nama: 'Apple',
    warna: 'Merah',
    nama_latin: 'Molus sylvestris',
    tipe_biji: 'single seed',
    gambar_buah: 'images/apple.png',
  },
  {
    nama: 'Banana',
    warna: 'Kuning',
    nama_latin: 'Musa paradisiaca',
    tipe_biji: 'double seed',
    gambar_buah: 'images/banane-large.jpg',
  },
  {
    nama: 'Blueberry',
    warna: 'Biru tua keunguan',
    nama_latin: 'Vaccinium Carymbosum',
    tipe_biji: 'single seed',
    gambar_buah: 'images/blueberry.jpg',
  },
  {
    nama: 'Cherry',
    warna: 'Merah cerah',
    nama_latin: 'Prunus Apetala',
    tipe_biji: 'double seed',
    gambar_buah: 'images/cherry.jpg',
  },
  {
    nama: 'Lemon',
    warna: 'Kuning',
    nama_latin: 'Citrus Limon',
    tipe_biji: 'single seed',
    gambar_buah: 'images/lemon.png',   
  },
  {
    nama: 'Mango',
    warna: 'Kuning serta Jingga',
    nama_latin: 'Citrus Reticulata',
    tipe_biji: 'double seed',
    gambar_buah: 'images/mango.jpg',
  },
  {
    nama: 'Orange',
    warna: 'Geoluhread atau kuning-merah',
    nama_latin: 'Molus sylvestris',
    tipe_biji: 'single seed',
    gambar_buah: 'images/orange.jpg',
  },
  {
    nama: 'Pear',
    warna: 'Kuning keemasan ataupun hijau',
    nama_latin: 'Pyrus Caucasica',
    tipe_biji: 'double seed',
    gambar_buah: 'images/pear.jpg',
  }
];

buahBuah.forEach((listbuah) => {
  console.log(listbuah);
});



for (let i = 0; i < 8; i++) {
  document.write(
    `<div id="buah">
      <img src=${buahBuah[i].gambar_buah} />  
      <p>${buahBuah[i].nama}</p>
      <p>${buahBuah[i].warna}</p>
      <p>${buahBuah[i].nama_latin}</p>
      <p>${buahBuah[i].tipe_biji}</p>
      
    </div>`);
};

//selesai