// let feltetel=50
// let osszeg=0
// let dobasok=[]
// while (osszeg < feltetel){    
//     let dob = Math.round(Math.random()*6)
//      osszeg+=dob
//     if (osszeg< feltetel){          
//         dobasok.push(dob)
//     }
    
// }
// console.log(dobasok);
// console.log(osszeg);

 let gep = Math.round(Math.random()*10)
function jatek(){
           
        let jatekos=Number(document.getElementById("szam").value)

    console.log(gep);
    
    for (let i=1; i < 4; i++){
        
            if ( jatekos==gep){
        document.getElementById("kiir").innerHTML="Győztél!" + "Találatok száma: " + i      
        break
            }
    
    else if( jatekos < gep ){
        document.getElementById("kiir").innerHTML="Kisebb számot attál meg!" + "Találatok száma: " + i
        break
        }
    else if ( jatekos > gep){
        document.getElementById("kiir").innerHTML="Nagyobb számot attál meg!" + "Találatok száma: " + i
        break
        }
    else{
        document.getElementById("kiir").innerHTML="Nem számot adtál meg!"
        }
        }
            
}