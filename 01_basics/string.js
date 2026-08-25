const name="rutuja"
const surname="chavan"

console.log(`my name is ${name} and surname is ${surname}`);


// string declaration
const gameName=new String(`candyCrush_saga`);

console.log(gameName)
console.log(__proto__)
console.log(gameName.length)
console.log(gameName.toLocaleLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('y'))

const gameName2=new String(`  candyCrush  `);
console.log(gameName)
console.log(gameName2.trim())

const newString=gameName.substring(0,4);
console.log(newString)

const newString2=gameName.slice(0,4);
console.log(newString2)

const newString3=gameName.replace('_','-');
console.log(newString3)

const newString4=gameName.split('_');
console.log(newString4)

const newString5=gameName.includes('saga');
console.log(newString5)












