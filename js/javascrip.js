var arregloPendientes = [];
var id=0;
var id1=0;
var ide= Date.now();
var ide2= Date.now();
function objPendiente(titulo,pendiente){
  this.titulo= titulo;

  //var lista= document.createElement("ul");

}

function insertaPendiente(nuevoObjeto){
  var pendiente = document.createElement("p");
  pendiente.id=ide;
  var nodoPadre=pendiente.id;
  //pendiente.id=id1;

  var item = document.createElement("ul");
  item.id=ide;
  item.innerText = nuevoObjeto.titulo;
  var eliminar= document.createElement("input");
  eliminar.type="button";
  eliminar.value="BORRAR >.<"
  eliminar.onclick=function(){
    listaPendientes.removeChild(pendiente);
  }
  pendiente.appendChild(eliminar);
  //item.id=id1;
  pendiente.appendChild(item);
  //var elemento= document.createElement("li");
  //item.appendChild(elemento)

  var texto = document.createElement("input");
  texto.type="text";
  texto.id=ide2;
  texto.value="";

  console.log(texto.value);
  //console.log(texto.id);



      pendiente.appendChild(texto);


  var btn = document.createElement("input");
  btn.type="button";
  btn.value="nuevo";
  btn.onclick = function(){
    var nuevoPendiente= document.createElement("li");
  //  var texto = document.getElementById(ide2.value);
    pendiente.appendChild(nuevoPendiente);
    var nodoTexto= document.createTextNode(texto.value);
    nuevoPendiente.appendChild(nodoTexto);
    var borrar= document.createElement("input");
    borrar.type="button";
    borrar.value="Borrar";
    pendiente.appendChild(borrar);
    borrar.onclick=function(){
      pendiente.removeChild(borrar);
      pendiente.removeChild(nuevoPendiente);
    }
    //document.getElementById('mylocation').innerText=msg;
    //document.getElementById(ide).innerText=texto;
    //nuevoPendiente.innerText(texto);
    //elemento.appendChild(nuevoPendiente);

  }
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
  btn.onclick= function(){
    var nuevoPendiente = document.createElement("ul");
    var texto = document.getElementById("")
  }

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
