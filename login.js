function iniciar(){
    var pan1 = document.getElementById("usuario").value;
    localStorage.setItem("pan1",pan1);
    window.location = "tipos_de_panes.html";

}