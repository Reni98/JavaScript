// let betuk = ["a","b","c","d","e"]

// for (let i=0; i < 10;i++){
//     for (let i=0; i < betuk.length; i++){
//         console.log(betuk[i])
//     }
// }

// 3.Feladat

// for (let i=99; i > 0; i--){
//     if (i%3==0){
//         console.log(i);
        
//     }
// }

// 4.Feladat
// for (let i=101; i >= 50; i--){
//     if (i%5==0){
//         console.log(i*2);        
//     }
// }

let szamok = []
for (let i=0;i<10;i++){
    let szam=Math.round(Math.random()*100)
    szamok.push(szam)
}

// let osszeg=0
// let szorzat=1
// for (let i=0;i<szamok.length;i++){
//     osszeg+=szamok[i]
//     szorzat*=szamok[i]
// }
// console.log(szamok);

// console.log("A számok összege:" + osszeg)
// console.log("A számok szorzata:" + szorzat)
// console.log("Az átlag:" + osszeg/szamok.length);

// 11.Feladat
let dobasok=[]
let d=false
let db=0
while (!d){
    let dob = Math.round(Math.random()*6)
    dobasok.push(dob)
    if (dob == 6) {
       db++
    }
    if (db==3){
        d=true
        break
    }
    else{
        continue
    }
}

console.log(dobasok);
let osszeg=0
for (let i= 0;i < dobasok.length;i++){
    osszeg+=dobasok[i]
}
console.log('Dobások átlaga:'+ osszeg/dobasok.length)
