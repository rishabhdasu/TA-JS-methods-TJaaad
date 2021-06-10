// NOTE: You can not use reduce methods to solve this exercise

function countAllPeople() {
  let allPeople = 0;
  got.houses.forEach(house => {
    allPeople = allPeople + house.people.length;
  })
  return allPeople;
}

function peopleByHouses(){
  let final = {};
  got.houses.forEach( house => {
    final[house.name] = house.people.length
  })
  return final
}

function everyone(){
  let final = []
  got.houses.forEach( house => {
    let housePeople = house.people.map( p => p.name)
     final.push(housePeople)
  })
  return final
}

function nameWithS(){
  let final = []
   got.houses.forEach( house => {
     house.people.filter( p => {
      if(p.name.toLowerCase().includes("s")){
        final.push(p.name);
      }
    })
  })
  return final;
}

function nameWithA(){
  let final = []
  got.houses.forEach(house => {
    house.people.filter( p => {
      p.name.toLowerCase().includes("A")
      final.push(p.name)
    })
  })
  return final
}

function surnameWithS(){
  let final = []
  got.houses.forEach(house => {
    house.people.map( p => {
      if(p.name.split(" ")[1].startsWith("S")){
        final.push(p.name)
      }
    })
  })
  return final
}

function surnameWithA(){
  let final = []
  got.houses.forEach( house => {
    house.people.forEach(p => {
      if(p.name.split(" ")[1].startsWith("A")){
        final.push(p.name)
      }
    })
  })
  return final
}

function peopleNameOfAllHouses(){
  let final = {}
  got.houses.forEach( house => {
    let arr = []
    house.people.forEach( p => {
      arr.push(p.name)
    })
    final[house.name] = arr
  })
  return final
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be