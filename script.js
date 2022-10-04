const fullName = "Dminic Morro";

let age = 22;

let birthday = "December 25.";

const pineapplePizza = false;

const liveEvents = [
  "I was born in Detroit",
  "I went to Schoolcraft College",
  "I climbed Lone Mountain when I was 18",
  "I love working from home",
];

if ((pineapplePizza = true)) {
  console.log(
    "My name is " +
      fullName +
      " and I like pineapples on pizza. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday
  );
} else if ((pineapplePizza = false)) {
  console.log(
    "My name is" +
      fullName +
      "and I like pineapples on pizza. I am currently" +
      age +
      "years old and my birthday is on" +
      birthday
  );
}
