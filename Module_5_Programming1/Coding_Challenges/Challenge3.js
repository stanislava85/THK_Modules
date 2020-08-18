// https://codepen.io/_stani_slava_/pen/dyMMwYw 

myTestString = "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, ";

myTestArray = myTestString.split(" "); 

console.log(myTestArray);

/* step 2 */
for (let i=0; i < myTestArray.length; i++){
  myTestArray[i] = myTestArray[i].replace("s", "$");
}

for (let i=0; i < myTestArray.length; i++){
  myTestArray[i] = myTestArray[i].replace("S", "$");
}

console.log(myTestArray);

/*step 3*/
myNewString = myTestArray.join(" ");
console.log(myNewString);