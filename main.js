var Names_of_people = [];

function Recibir_nombre(){
 var Guess_name=document.getElementById("Lista_de_invitados").value;
Names_of_people.push(Guess_name);
console.log(Guess_name);
console.log(Names_of_people);

var longitud_del_nombre= Names_of_people.lenght;
console.log(longitud_del_nombre);

document.getElementById("Nombre_de_invitados").innerHTML=Names_of_people.toString();
}