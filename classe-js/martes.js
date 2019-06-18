let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

let frase = who[Math.round(Math.random()* (who.length - 1))] +" "+ what[Math.round(Math.random()* (who.length -1 ))] + " " + when[Math.round(Math.random()* (who.length -1))];

document.getElementById("juanito").innerHTML=frase;




