let x = prompt()

let str ="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, mollitia?";
let array = str.split("");

let box = 0;
for (let i =0; i < array.length; i++) {
  if (array[i]== "e" || array[i] == "i" ||array[i] == "u" || array[i] == "o" || array[i] == "a") {
    box++
  }
}

console.log(box);



