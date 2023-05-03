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
panadera=localStorage.getItem("panera");
document.title=panadera;
function obtener_sandwich (){
    firebase.database().ref(panadera).on("value", function (snapshot) {
        document.getElementById("bolsa_de_pan").innerHTML="";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              childvalue=childSnapshot.val();
              if(childKey!="pan"){
                  renglon='<h4>'+childvalue["pan1"]+'</h4><h4>'+childvalue["relleno"]+'</h4><button id="'+childKey+'" value="'+childvalue["chocolate"]+'" onclick="me_gusta(this.id)">🥐'+childvalue["chocolate"]+'</button>' ;
                  
                }
              document.getElementById("bolsa_de_pan").innerHTML+=renglon;

        });
  });
}
function meter_al_horno(){
    relleno=document.getElementById("hola").value;
    pan1=localStorage.getItem("pan1");
    firebase.database().ref(panadera).push({pan1:pan1,relleno:relleno,chocolate:0});
    document.getElementById("hola").value="";
}
function me_gusta(id){
    var likes=document.getElementById(id).value;
    likes++;
    firebase.database().ref(panadera).child(id).update({chocolate:likes});

}
obtener_sandwich()