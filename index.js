let animal = "dog"

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  let pet = 'dog';
  let newAnimal = pet.split('');
  newAnimal[0]='c';
  newAnimal[1]='a';
  newAnimal[2]='t';
  let animal = newAnimal.join('');

  return animal
}

function add2(n) {
  let two = 2
  return n + two

  // Feel free to move things around!
}