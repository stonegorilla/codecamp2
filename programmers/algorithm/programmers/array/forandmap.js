let animals = [
  { friends: ["lion", "tiger", "turtle"] },
  { friends: ["pig", "cow", "human"] },
];
for (let i = 0; i < animals.length; i++) {
  let animal = animals[i];

  for (let j = 0; j < animal.friends.length; j++) {
    let friend = animal.friends[j];
    console.log(friend);
  }
}

animals.forEach((animal) => {
  animal.friends.forEach((friend) => {
    console.log(friend);
  });
});
