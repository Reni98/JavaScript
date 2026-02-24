// function szamokatmegad(){
//     let numbers=[]
    
//     while (numbers.length != 4){
//         let szam=prompt("Adj meg egy számot")
//         numbers.push(szam)
//     }

//     return numbers
// }

// let szamok=szamokatmegad()
// console.log(szamok);

// function duplazas(tomb){
//     let ujtomb=[]
//     for (let i=0; i < tomb.length;i++){
//         let szam=Number(tomb[i])*2
//         ujtomb.push(szam)
//     }
//     return ujtomb

// }
// let newarray=duplazas(szamok)
// console.log(newarray);

//Hozzatok létre egy függvényt, ahol bekéritek a tárgyak nevét
//Következő függvényben vizsgáljátok meg, hogy melyik a leghosszabb szó

function szavaktMegad(){
    let szavak=[]
    while (szavak.length!=3){
        let szo=prompt("Adj meg egy szót: ")
        szavak.push(szo)
    }
    return szavak
}

let szavaktomb=szavaktMegad()
console.log(szavaktomb);

function lehosszabbSzo(sztomb){
    let lhosszabb=0
    let lhszo=""
    for (let i=0;i<sztomb.length;i++){
        if(sztomb[i].length>lhosszabb){
            lhosszabb=sztomb[i].length            
            lhszo=sztomb[i]
        }
    }
    return [lhosszabb,lhszo]

}
let leghosszabb=lehosszabbSzo(szavaktomb)
let lszh=leghosszabb[0]
console.log(lszh);

let lsz=leghosszabb[1]
console.log(lsz);

function kiir(lszh,lsz){
    console.log("Leghosszabb szó: " + lsz + " Hossza: " + lszh);    
}
kiir(lszh,lsz)