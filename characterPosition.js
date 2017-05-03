function characterPosition(inputString) {
var noSpaces = inputString.split(" ").join("");
var finalCount = {};
for(var i = 0; i<noSpaces.length; i++) {
var character = noSpaces[i];
if (finalCount[character]){
  finalCount[character].push(i);
} else {
  finalCount[character] =[i];
   }
  } return finalCount;
}
console.log(characterPosition("lighthouse in the house"))