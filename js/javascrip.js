var arregloPendientes = [];
var id=0;
var id1=0;
function objPendiente(titulo,pendiente){
  this.titulo= titulo;
  var lista= document.createElement("ul");

}
function insertaPendiente(nuevoObjeto){
  var pendiente = document.createElement("p");
  pendiente.id=id1;

  var item = document.createElement("ul");
  item.innerText = nuevoObjeto.titulo;
  item.id=id;
  pendiente.appendChild(item);
  var btn = document.createElement("input");
  btn.type="button";
  btn.value="nuevo";
    dfadfadsfs

  var texto = document.createElement("input");
  texto.type="text";
  texto.id=id1;

  console.log(texto.id);


  //var arreglo= regresaArreglo();

  //arreglo.forEach(function(objPendiente){

      pendiente.appendChild(texto);
      pendiente.appendChild(btn);


    //item.innerText =objPendiente.titulo;

    //console.log(objPendiente.titulo),
    //console.log(objPendiente.listaPendientes);
//  });
  document.getElementById('listaPendientes').appendChild(pendiente);
}
function agregaComentario(){
  //item="item.id"
  var nuevoItem= document.createElement("li");
  var txt= document.getElementById(id1);
   nuevoItem.innerText=txt;
   console.log(txt);
   document.getElementById(id1).appendChild(nuevoItem);
  //document.getElementById("id").appendChild(nuevoItem);
  //document.getElementById("item.id").appendChild(nuevoItem);
}
function insertaBoton(nuevoObjeto){
  var btn = document.createElement("input");
  btn.type="button";
  btn.value="Crear pendiente";

  document.getElementById("listaPendientes")
}
function creaLista(){
  var lista = document.createElement("ul");
  document.getElementById("listaPendientes").appendChild(lista);
  //listaPendiente.appendChild(lista);


}

function creaObjetoPendiente(){
  var nuevoObjeto = new objPendiente();
  nuevoObjeto.titulo= document.getElementById('nombrePendiente').value;
  console.log(nuevoObjeto)
  insertaPendiente(nuevoObjeto);

  //insertamos nuestro nuevo objeto a el arreglo de pendientes
  arregloPendientes.push(nuevoObjeto);
  id++;
  id1++;

}
function regresaArreglo(){
  return arregloPendientes;
}
