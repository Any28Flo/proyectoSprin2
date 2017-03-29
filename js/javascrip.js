function objPendiente(titulo){
  var titulo= this.titulo;
  var listaPendiente= creaLista();



}

function creaLista(){
  var lista = document.createElement("ul");

}
function creaObjetoPendiente(){
  var nuevoObjeto = new objPendiente();
  nuevoObjeto.titulo= document.getElementById('nombrePendiente').value;
  console.log(nuevoObjeto)
}
