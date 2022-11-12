
var usernameList = ["john", "bob", "micheal"];
var userCheck = false;
var exit = false;

while (userCheck == false){
    var username = window.prompt("inserisci il tuo username");

    for (let i = 0; i < usernameList.length ; i++){
        if (username === usernameList[i]) {
            userCheck = true;
            while (true) {
                if (window.confirm("Vuoi giocare a dadi?")){
                    let myNum = Math.floor((Math.random() * 5) + 1);
                    let cpuNum = Math.floor((Math.random() * 5) + 1);
                    if (myNum > cpuNum){
                        window.alert("Hai vinto tu \nIl tuo dado: "+myNum+"\nIl dato del CPU: "+cpuNum);
                    }
                    else {
                        window.alert("Hai perso tu \nIl tuo dado: "+myNum+"\nIl dato del CPU: "+cpuNum);
                    }
                }
                else {
                    window.alert("Bye "+username);
                    exit = true;
                    break;
                }
                if (window.confirm("vuoi rigiocare?") == false) {
                    window.alert("Bye "+username);
                    exit = true;
                    break;
                }
            }
        }
    }
    if (exit == false){
        window.alert("username sbagliato")
    }
    else {
        break;
    }
}

