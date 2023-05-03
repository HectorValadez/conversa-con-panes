var firebaseConfig = {
    apiKey: "AIzaSyAZ0Y1zXhiz27YF6AWq8I30khP2mLtgRsI",
    authDomain: "panes-3628f.firebaseapp.com",
    databaseURL: "https://panes-3628f-default-rtdb.firebaseio.com",
    projectId: "panes-3628f",
    storageBucket: "panes-3628f.appspot.com",
    messagingSenderId: "696781999320",
    appId: "1:696781999320:web:aafc38b413904bdd1e1bad"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var pan1 = localStorage.getItem("pan1");
document.getElementById("bienvenido").innerHTML = "bienvenido " + pan1 + " al mundo de los panes";
function bolsa() {
    var tipo_pan = document.getElementById("tipos_de_panes").value;
    firebase.database().ref().child(tipo_pan).update({ pan: "chocolate" });
    document.getElementById("tipos_de_panes").value = "";

}
function obtenerPanesDelDia(){
    firebase.database().ref("/").on("value", function (snapshot) {
        document.getElementById("pan_del_dia").innerHTML="<hr>";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              renglon='<div id="'+childKey+'" onclick="migajon(this.id)">'+childKey+'</div><hr>' ;
              document.getElementById("pan_del_dia").innerHTML+=renglon;

        });
  });
}
obtenerPanesDelDia();
function migajon (panera){
    localStorage.setItem("panera",panera);
    window.location="horno.html"
}