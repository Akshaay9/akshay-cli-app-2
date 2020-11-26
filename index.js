const chalk = require('chalk');
var ask = require("readline-sync");
var username=ask.question(chalk.green("What is you name 😀?\n"))
var userage=ask.question(chalk.green("What is you age?\n"))
var score = 0;


// asking user to choose the quiz
console.log(chalk.blue("Dear " +chalk.red( username ) +" Welcome to Akshay's Quiz\n"))

 var game = ask.question("we have quiz on topics of\n"      +chalk.red("1)Marvel, \n") +                       chalk.yellowBright("2)Game Of thrones, \n")+             chalk.green("3)Indian Politics.....\n") +          "Please type 1 / 2 / 3 and Enter, to play the game (no need to type everything) \n");


//  quiz marvel
var marvel = [
  {
      question:`1) what is Captain america ( chris evean's) screen name
     1: Steve rogers
     2: Bucky barns
     3: Anthonie mackey \n
     (Press 1/2/3 and enter,no need to type whole answer)\n`,
    answer:1

  },
  {
    question: `2) THE AVENGERS: Natasha remarks to Clint that the Battle of New York is a lot like what?
    1: Their time in Budapest
    2: Their time in New ork
    3: Their time in paris \n`,
    answer: 1
  },
  {
    question: `3) What does the Winter Soldier say after Steve recognizes him for the first time?
    1: Who the hell is Bucky
    2: i dont know who you are
    3: dont say Bucky \n`,
    answer: 1
  },
  {
    question: `4) Guardiane of galaxy:What were the three items Rocket claims he needs in order to escape the prison?
    1: A security card, a fork, and an ankle monitor
    2: A security band, a battery, and a prosthetic leg
    3: A pair of binoculars, a detonator, and a prosthetic leg \n`,
    answer: 2
  },
  {
    question: `5) CAPTAIN AMERICA: CIVIL WAR: Who ISN'T on Iron Man's team?
    1: Vision
    2: Blank panther
    3: Hawkeye \n`,
    answer: 3
  },
]
// quiz got
 var got=[
  {
    question: `1) Who was responsible for the creation of NIGHT KING
      1: The childer of forest
      2: The first men,
      3: The drowned god \n
       (Press 1/2/3 and enter,no need to type whole answer)\n`,
    answer: 1

  },
  {
    question: `2) What was HODOR called  before he got his tragic door holding nick name?
     1: Horys
     2: wylis   
     3: Myrys \n`,
    answer: 2
  },
  {
    question: `3) Dany's dragons are called  Dragon, veserion and _____?
     1: Whagar
     2: Drakaris
     3: Rhegal \n`,
    answer: 3
  },
  {
    question: `4) What is the name of the giant Dragon slaying cross-Bow?
     1: Mantis
     2: Millipid
     3: Scorpion \n `,
    answer: 3
  },
  {
    question: `5)What is the name of the Arya's sword?
     1: Needle
     2: Ponty
     3: Sword of Brave\n`,
    answer: 1
  },
 ]
// quiz on politics
var politics=
[
    {
      question:`1) What is the name of our president 
      1: Ram nath kovind
      2: pranab mukargee
      3: prathiba patil\n`,
      answer:1
 
    },
    {
     question:`2) Who is Karnataka's Chief minister
     1: B S Yediyurappa
     2: Kumaraswamy  
     3: Sidharamayya\n`,
     answer:1
    },
    {
     question:`3) Who is INDIS'S defence minister?
     1: Rajnath Singhh
     2: Nirmala Seetharaman
     3: Ajit doval\n`,
     answer:1
    },
    {
     question:`4) Before Mr Narendra Modi,how many PM's were there?
     1: 13
     2: 15
     3: 10\n`,
     answer:1
    },
    {
     question:`5)Who is the CM of goa?
     1: Pramod Sawant
     2: Arvind kejriwal
     3: Nitish kumar\n`,
     answer:1
    }
 ]


// calling the quizz
if (game == 1) {
 
  console.log(chalk.red("So Marvel it is....lets go...🥳 🥳🥳 🥳  "))
  marveltest()
}
else if (game == 2) {
  
  console.log(chalk.red("GOT.....OMG....Lets goo...🥳 🥳🥳 🥳  "))
  gottest()
  
}
else if (game == 3) {
  
  console.log(chalk.red("Politics,cool....lets get started 🥳 🥳🥳 🥳 "))
  politicstest()
  
}
else {
  console.log("Please select 1 or 2  or 3 and press enter to play")
}




//   running quiz by option
function marveltest() {
  for (var i = 0; i < marvel.length; i++) {
    
    play(marvel[i].question, marvel[i].answer)


  }
}
function gottest() {
  
  for (var i = 0; i < got.length; i++) {
    play(got[i].question, got[i].answer)
  }
}
function politicstest() {
  
  for (var i = 0; i < marvel.length; i++) {
    play(politics[i].question, politics[i].answer)
  }
}

//  processing input and outputfunction play(question,answer)
function play(question, answer) {
  var givenAnswer = ask.question(question)
  {
    if (givenAnswer == answer) {
      console.log(chalk.green("correct 👏👏👏"))
      score = score + 1;

      console.log(chalk.blue.bgWhite("your current score is " + score))
      console.log("---------------------")
    }
    else {
      console.log(chalk.red("your answer is wrong😭😭"))
      console.log("the anser is" ,answer)

      console.log(chalk.blue.bgWhite("your current score is " + score))
      console.log("---------------------")

    }
  }
}


// final score

console.log(chalk.black.bgRedBright(" YOUR FINAL SCORE IS " + score))

var highScore=[
    {
      name:"Akshay",
      age:23,
      score:5,
    },
    {
      name:"Rohit",
      age:22,
      score:4,
    },
  
    {
      name:"Ajay",
      age:22,
      score:4,
    },
  
  ]
  console.log("----------------------")
  console.log("Below are the list of High scorers 👇👇👇👇")
   for(i=0;i<highScore.length;i++)
   {
     console.log(highScore[i].name + "  age:"+ highScore[i].age +"  score:"+ highScore[i].score)
   }

     
  var currScore=5
  var missed=highScore[0].score-score


   if(score>=highScore[0].score)
   {
     console.log("______________________________________")
     console.log(chalk.red("Whooo hooo You Are our New High Scorer 🥳🥳🥳🥳🥳"))
     console.log("______________________________________")

     highScore[0].name=username
     highScore[0].age=userage
     console.log(chalk.green("WE HAVE UPDATED OUR LEADER BOARD AND YOUR NAME IS ON THE TOP OF THE LIST 👇👇👇👇👇"))
       console.log("----------------------")
  console.log("Below are the list NEW High scorers")
   for(i=0;i<highScore.length;i++)
   {
     console.log(highScore[i].name + "  age:"+ highScore[i].age +"  score:"+ highScore[i].score)
   }
   }
   else
   {
     console.log("______________________________________")
       console.log(chalk.blue("you missed our high scorers record by "+ missed + " try again......😨 😰 😥 😭😭 "))
   }

