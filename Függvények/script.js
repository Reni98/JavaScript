// function osszed(a,b){
//     return a + b
// }
// console.log(osszed(5,3));

// function hello(){
//     console.log("Hello World!");
// }
// hello()

// let jegyek_tomb=[]

// function jegyek(){
//     for (let i=1;i<5;i++){
//         let bekert_jegy = prompt("Add meg a jegyet:")
//         jegyek_tomb.push(bekert_jegy) 
//     }         
//     return jegyek_tomb
// }

// let tomb =jegyek(jegyek_tomb)

// function atlag(t){
//     let osszeg=0    
//     for (let i=0;i < t.length;i++){
//         osszeg+=Number(t[i])
//     }          
//     let atlag = osszeg/t.length
//     console.log("Az átlagod:" + atlag);    
// }
// atlag(tomb)
let aldal=prompt("Add meg az a oldalt: ")
let boldal=prompt("Add meg a b oldalt: ")

function teglalapTerulet(a,b){
    return a*b   
    
}
let tszamit=(teglalapTerulet(aldal,boldal));
console.log("A terület eredménye: " + tszamit);

function teglalapKerulet(a,b){
    // return (a+b)*2
}

let kszamit=(teglalapKerulet(aldal,boldal))
console.log("A kerület eredménye: " + kszamit);
