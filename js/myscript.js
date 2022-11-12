//GIOCO DEI DADI CON CHECK DEL USERNAME




//array con lista username
var usernameList = ["john", "bob", "micheal"];
//variabili condizione while
var userCheck = false;
var exit = false;

//loop controllo username
while (userCheck == false){
    // chiede username
    var username = window.prompt("Inserisci il tuo username");
    //se si clicca annulla esce dal while principale
    if (username == null){
        break;
    }
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
                        window.alert("Hai vinto tu! \nIl tuo dado: "+myNum+"\nIl dato del CPU: "+cpuNum);
                    }
                    //perdita
                    if (myNum < cpuNum) {
                        window.alert("Hai perso tu! \nIl tuo dado: "+myNum+"\nIl dato del CPU: "+cpuNum);
                    }
                    if (myNum == cpuNum) {
                        window.alert("Parità!\nIl tuo dado: "+myNum+"\nIl dato del CPU: "+cpuNum);
                    }
                    //domanda tryagain
                    if (window.confirm("Vuoi riprovare?") == false) {
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