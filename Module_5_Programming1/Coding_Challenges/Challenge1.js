//  https://codepen.io/_stani_slava_/pen/xxVVEqQ

let arr1 = ["Wesley Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];

let first_name = [];
let last_name = [];
for (i = 0; i < arr1.length; i++) {
  let split_name = arr1[0].split(" ");
    first_name.append(split_name[0]);
    last_name.append(split_name[1]);
}
console.log(first_name);
console.log(last_name);