'use strict'

var name = prompt("Hello my name is Israa , Whats your name ?");
 alert("Welcome to my website " + name  + " :) ");

/*confirm(" Are you a female ? ");
if(confirm == true){
    document.body.style.background = "pink"; 
} else {
    document.body.style.background = "lightblue"; 
}*/


var gender = prompt("Are you a female ? please let your answer be yes or no").toUpperCase();
if(gender == 'YES' || gender == 'Y'){
    document.body.style.background = "pink";
    alert(" the background of the webpage will be pink "); 
} else if(gender == 'NO' || gender == 'N') {
    document.body.style.background = "lightblue"; 
    alert(" the background of the webpage will be lightblue "); 
} else {
    alert(" your didn't enter yes or no  :(  ")
}

var me = prompt("Do you know if I am a girl or a boy ?").toUpperCase();
if(me == 'YES' || me == 'Y'){
    alert(" Yes I am a girl ");
} else if(me == 'NO' || me == 'N') {
    alert(" its ok .. I am a girl");
} else {
    alert(" your didn't enter yse or no :( ...  I am Girl ")
}
  
var prog = prompt("Do you think that I like programming ? ").toUpperCase();
if(prog == 'YES' || prog == 'Y'){
    alert(" Yes I like it so much ");
} else if(prog == 'NO' || prog == 'N') {
    alert(" No I do like it  ");
} else {
    alert(" your didn't enter yes or no :(  ... yes I like it ")

var handmade = prompt("Do you think that I like the hand made things ? ").toUpperCase();
if(handmade == 'YES' || handmade == 'Y'){
    alert(" Yes I like it and I have my own hand made gifts");
} else if(handmade == 'NO' || handmade == 'N') {
    alert("No , I do like it and I have my own hand made gifts ");
} else {
    alert(" your didn't enter yes or no :( ... yes I do like it ")
}
}

var art = prompt("Do you know what kind of hand made I use to make ? ").toUpperCase();
if(art == 'YES' || art == 'Y'){
    alert(" So you already know me , thats great ");
} else if(art == 'NO' || art == 'N') {
    alert(" The hand made that I use to make is String art ");
} else {
    alert(" your didn't enter yes or no :( ... I make a string art ")
}

var art = prompt("Do you know what the String art is ? ").toUpperCase();
if(art == 'YES' || art == 'Y'){
    alert(" Great , I'm gonna show you some of my works ");
} else if(art == 'NO' || art == 'N') {
    alert(" It's ok .. now your going to know it  ");
} else {
    alert(" your didn't enter yes or no :( ")
}


/*function Name(name){

    var type = typeof name;
    console.log(type);

    if(type === String ){        
    var msg = alert("Welcome to my website " + name  + " :) ");
    } else {
        msg = Name(name) ;   
    }
 return msg ;
}*/


