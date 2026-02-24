function nevekkiir(){
    // let nevek_tomb=["Próba Elek","Jane Doe","John Doe","Elek"]

    let nevek_tomb=[]
    while (nevek_tomb.length != 4){
        let nev = prompt("Adj meg egy nevet: ")
        
       if(nev.length >=8 && nev.length <= 50){
            nevek_tomb.push(nev)
            console.log("Sikeresen hozzáadtad a nevet.");
            
        }
        nevek_tomb.push(nev)
    }
    let kiir=document.getElementById("nevek")
    kiir.innerHTML=""

    for (let i=0;i< nevek_tomb.length;i++){
      
             kiir.innerHTML += "<li>" + nevek_tomb[i] + "</li>"
                     
        

       
    }
}