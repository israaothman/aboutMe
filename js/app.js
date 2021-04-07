'use strict';

function allJS (){

  var score = 0;
  var myMsg = '';
  var correctNum = 10 ;
  var guessTimes = 1;
  var movList =['harry potter','lord of the ring','fantastic beasts','aladdin'];
  var guessTimes2 = 1;



  var Uname = prompt('Hello my name is Israa , Whats your name ?');
  alert('Welcome to my website ' + Uname + ' :)');



  function Q1 (gender){

    if(gender === 'YES' || gender === 'Y'){
      myMsg = alert('Then I guess you\'re gonna like the colors of my webpage :) ');
    } else if(gender === 'NO' || gender === 'N') {

      myMsg =alert(' I hope you like my webpage colors :P ');
    } else {
      myMsg =alert(' you didn\'t enter yes or no  :( ');
    }

    return myMsg ;
  }


  var gender = prompt('Are you a female ? please let your answer be yes or no').toUpperCase();
  Q1(gender);


  function Q2 (me){

    if(me === 'YES' || me === 'Y'){
      myMsg = alert(' Yes I am a girl ');
      score ++;
    } else if(me === 'NO' || me === 'N') {
      myMsg = alert(' its ok .. I am a girl');
    } else {
      myMsg = alert(' you didn\'t enter yse or no :( ...  I am Girl');
    }

    return myMsg;
  }


  var me = prompt('Do you know if I am a girl or a boy ?').toUpperCase();
  Q2(me);


  function Q3 (prog){


    if(prog === 'YES' || prog === 'Y'){
      myMsg = alert(' Yes I like it so much ');
      score ++;
    } else if(prog === 'NO' || prog === 'N') {
      myMsg = alert(' No I do like it ');
    } else {
      myMsg = alert('you didn\'t enter yes or no :(  ... yes I like it ');}

    return myMsg;
  }

  var prog = prompt('Do you think that I like programming ? ').toUpperCase();
  Q3(prog);


  function Q4 (handmade){

    if(handmade === 'YES' || handmade === 'Y'){
      myMsg = alert(' Yes I like it and I have my own hand made gifts');
      score ++;
    } else if(handmade === 'NO' || handmade === 'N') {
      myMsg = alert('No , I do like it and I have my own hand made gifts ');
    } else {
      myMsg = alert(' you didn\'t enter yes or no :( ... yes I do like it ');
    }
    return myMsg;
  }

  var handmade = prompt('Do you think that I like the hand made things ? ').toUpperCase();
  Q4(handmade);


  function Q5 (art){

    if(art === 'YES' || art === 'Y'){
      myMsg = alert(' So you already know me , thats great ');
      score ++;
    } else if(art === 'NO' || art === 'N') {
      myMsg = alert(' The hand made that I use to make is String art ');
    } else {
      myMsg = alert(' you didn\'t enter yes or no :( ... I make a string art ');
    }

    return myMsg;
  }




  var art = prompt('Do you know what kind of hand made I use to make ? ').toUpperCase();
  Q5(art);


  function Q6 (str){

    if(str === 'YES' || str === 'Y'){
      myMsg = alert(' Great , I\'m gonna show you some of my works ');
      score ++;
    } else if(str === 'NO' || str === 'N') {
      myMsg = alert(' It\'s ok .. now you are going to know it ');
    } else {
      myMsg = alert('you didn\'t enter yes or no :( ');
    }

    return myMsg;
  }

  var str = prompt('Do you know what the String art is ? ').toUpperCase();
  Q6(str);

  function Q7 (guess){

    while(guessTimes < 4){

      if (guess < correctNum && guess > 6) {
        guess = Number(prompt('Your close !! .... try again  ? '));
      }else if (guess > correctNum && guess < 14) {
        guess = Number(prompt('Your close !! .... try again  ? '));
      } else if (guess < 7 ) {
        guess = Number(prompt('Your are too low !! .... try again  ? '));
      }else if (guess > 13 ) {
        guess = Number(prompt('Your are too high !! .... try again  ? '));
      }
      else if(guess === correctNum ){
        myMsg = alert('Correct, You\'r gussing is right ');
        score++;
        break;
      }

      guessTimes ++;
    }


    if(guessTimes === 4){
      myMsg = alert('sorry You have lost all your attempts :( ');
    }

    return myMsg;
  }

  var guess =  Number(prompt('Guess what is my favourite number ? "Hint ... it\'s between 1-20 " '));
  Q7(guess);



  function Q8(){

    while(guessTimes2 < 6){



      for(var i = 0 ; i < movList.length ; i++ ){
        if (movie !== movList[i]) {
          continue; }
        else {
          myMsg = alert('Correct, You\'r gussing is right and you\'re gonna see list of my favourite movies inside the website');
          score++;
          break;
        }
      }
      if(movie === movList[i]){
        break;
      } else {
        guessTimes2 ++ ;
        movie = prompt('NO .. Try again .. hint { I like fantasy movies } ;) ').toLowerCase();
      } }


    if(guessTimes2 === 6){
      myMsg = alert('sorry You have lost all your attempts :( you\'re gonna see a list of my favourite movies inside the website');
    }


    return myMsg;
  }


  var movie = prompt('Try to guess one of my favourite movies .. ;) ').toLowerCase();
  Q8();
  alert('You\'r score is ' + score + ' out of 7 .. ' );


}



console.log(score);


