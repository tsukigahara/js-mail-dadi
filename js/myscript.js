//GIOCO DEI DADI CON CHECK DEL USERNAME




//array con lista username
var usernameList = ["john", "bob", "micheal"];
//variabile per controllo username
var userCheck = false;
//variabile per uscire dal while principale
var exit = false;

//loop controllo username
while (userCheck == false){
    // chiede username
    var username = window.prompt("Inserisci il tuo username");
    // ciclo per controllo username 
    for (let i = 0; i < usernameList.length ; i++){
        //if per controllo username
        if (username === usernameList[i]) {
            userCheck = true;
            //domanda gioco
            if (window.confirm("Hey "+username+".\nVuoi giocare a dadi?")){
                // loop del gioco
                while (true) {
                    // codice gioco dadi
                    let myNum = Math.floor((Math.random() * 5) + 1);
                    let cpuNum = Math.floor((Math.random() * 5) + 1);
                    //vincita
                    if (myNum > cpuNum){
                        window.alert("Hai vinto tu \nIl tuo dado: "+myNum+"\nIl dato del CPU: "+cpuNum);
                    }
                    //perdita
                    else {
                        window.alert("Hai perso tu \nIl tuo dado: "+myNum+"\nIl dato del CPU: "+cpuNum);
                    }
                    //domanda tryagain
                    if (window.confirm("vuoi rigiocare?") == false) {
                        window.alert("Buona giornata "+username+"!");
                        exit = true;
                        break;
                    }
                }
            }
            //se si clicca annulla
            else {
                window.alert("Buona giornata "+username+"!");
                exit = true;
            }
        }
    }
    //codice per uscire dal while principale
    if (exit == false){
        window.alert("Username sbagliato.\nRiprova.")
    }
    else {
        break;
    }
}