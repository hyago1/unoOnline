
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.use(express.static('public'))
app.use(express.urlencoded());

app.use(express.json({ extended: true }));




let roomName
let users = new Array()
users.length = 2


//da placa de vez:
let names = "";
//da placa de vez:


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/page/index.html');
});

app.get('/gameOnline', (req, res) => {

  res.sendFile(__dirname + '/page/gameOnline.html');
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});
var p = 10;


const cards = [
  {
    cod: "B+4",
    color: "#0f0f0f",
    number: "M4",
  },
  {
    cod: "B+4",
    color: "#0f0f0f",
    number: "M4",
  },
  {
    cod: "B+4",
    color: "#0f0f0f",
    number: "M4",
  },
  {
    cod: "B+4",
    color: "#0f0f0f",
    number: "M4",
  },
  {
    cod: "R+2",
    color: "#d60b11",
    number: "M2",
  },
  {
    cod: "R1",
    color: "#d60b11",
    number: 1,
  },
  {
    cod: "BlockR",
    color: "#d60b11",
    number: "@",
  },
  {
    cod: "R2",
    color: "#d60b11",
    number: 2,
  },
  {
    cod: "R3",
    color: "#d60b11",
    number: 3,
  },
  {
    cod: "R4",
    color: "#d60b11",
    number: 4,
  },
  {
    cod: "R5",
    color: "#d60b11",
    number: 5,
  },
  {
    cod: "R6",
    color: "#d60b11",
    number: 6,
  },
  {
    cod: "R7",
    color: "#d60b11",
    number: 7,
  },
  {
    cod: "R8",
    color: "#d60b11",
    number: 8,
  },
  {
    cod: "R9",
    color: "#d60b11",
    number: 9,
  },
  {
    cod: "G1",
    color: "#67bd42",
    number: 1,
  },
  {
    cod: "BlockG",
    color: "#67bd42",
    number: "@",
  },
  {
    cod: "G+2",
    color: "#67bd42",
    number: "M2",
  },
  {
    cod: "G2",
    color: "#67bd42",
    number: 2,
  },
  {
    cod: "G3",
    color: "#67bd42",
    number: 3,
  },
  {
    cod: "G4",
    color: "#67bd42",
    number: 4,
  },
  {
    cod: "G5",
    color: "#67bd42",
    number: 5,
  },
  {
    cod: "G6",
    color: "#67bd42",
    number: 6,
  },
  {
    cod: "G7",
    color: "#67bd42",
    number: 7,
  },
  {
    cod: "G8",
    color: "#67bd42",
    number: 8,
  },
  {
    cod: "G9",
    color: "#67bd42",
    number: 9,
  },
  {
    cod: "B1",
    color: "#133fc2",
    number: 1,
  },
  {
    cod: "BlockB",
    color: "#133fc2",
    number: "@",
  },
  {
    cod: "B+2",
    color: "#133fc2",
    number: "M2",
  },
  {
    cod: "B2",
    color: "#133fc2",
    number: 2,
  },
  {
    cod: "B3",
    color: "#133fc2",
    number: 3,
  },
  {
    cod: "B4",
    color: "#133fc2",
    number: 4,
  },
  {
    cod: "B5",
    color: "#133fc2",
    number: 5,
  },
  {
    cod: "B6",
    color: "#133fc2",
    number: 6,
  },
  {
    cod: "B7",
    color: "#133fc2",
    number: 7,
  },
  {
    cod: "B8",
    color: "#133fc2",
    number: 8,
  },
  {
    cod: "B9",
    color: "#133fc2",
    number: 9,
  },
  {
    cod: "Y1",
    color: "#f7f01e",
    number: 1,
  },
  {
    cod: "BlockY",
    color: "#f7f01e",
    number: "@",
  },
  {
    cod: "Y+2",
    color: "#f7f01e",
    number: "M2",
  },
  {
    cod: "Y1",
    color: "#f7f01e",
    number: 2,
  },
  {
    cod: "Y3",
    color: "#f7f01e",
    number: 3,
  },
  {
    cod: "Y4",
    color: "#f7f01e",
    number: 4,
  },
  {
    cod: "Y5",
    color: "#f7f01e",
    number: 5,
  },
  {
    cod: "Y6",
    color: "#f7f01e",
    number: 6,
  },
  {
    cod: "Y7",
    color: "#f7f01e",
    number: 7,
  },
  {
    cod: "Y8",
    color: "#f7f01e",
    number: 8,
  },
  {
    cod: "Y9",
    color: "#f7f01e",
    number: 9,
  },
  {
    cod: "Joker",
    color: "#0f0f0f",
    number: "()",
  },
  {
    cod: "Joker",
    color: "#0f0f0f",
    number: "()",
  },
  {
    cod: "Joker",
    color: "#0f0f0f",
    number: "()",
  },
  {
    cod: "Joker",
    color: "#0f0f0f",
    number: "()",
  },
];



const jokerCard = { cod: "Joker", number: "X" }

var scramble = new Array();
scramble.length = 7;
var scramble2 = new Array();
scramble2.length = 7;

var pileStart = '';
var pile;

var game = new Array();
game.length = 1000;
var pull = new Array();
pull.length = 500;

//Aux's
var scrambleAux = new Array();
scrambleAux.length = 7;
var scramble2Aux = new Array();
scramble2Aux.length = 7;
//Aux's


//Aux's
var gameAux = new Array();
gameAux.length = 1000;
var pullAux = new Array();
pullAux.length = 500;
//Aux's

var lastColor = '';
var lastNumber = '';

var validation = false;

var turn = 1;

var idPlayer
idPlayer = 0


var rooms = []




function createGame() {

  var n = Math.floor(Math.random() * cards.length); 
  
  if(cards[n].cod != "Joker" || cards[n].cod != "B+4" ){

      for (let i = 0; i < game.length; i++) {
    if (game[i] == null) {
      game[i] = n;
    }

    lastColor = cards[n].color;
    lastNumber = cards[n].number


     
    if (pileStart == '') {
      console.log("criou o pile start");
      pileStart = `
          <div  style="background-color:${cards[n].color};" class="card" id="${i}" > 
          <div class="cornerUpDiv">
          <span id="cornerUp"> ${specialCard(
        cards[n].number,
        "u"
      )}</span> </div> <span> ${specialCard(
        cards[n].number,
        "m"
      )}</span> 
          <div class="cornerDownDiv">
          <span id="cornerDown"> ${specialCard(
        cards[n].number,
        "d"
      )}</span></div> 
          </div>`;

    }


    break;
  }
  }
  else{
    createGame();
  }


  for (let i = 0; i < scramble2.length; i++) {
    if (scramble[i] == null) {
      scramble[i] = Math.floor(Math.random() * cards.length);
    }
  }
  for (let i = 0; i < scramble2.length; i++) {
    if (scramble2[i] == null) {
      scramble2[i] = Math.floor(Math.random() * cards.length);
    }
  }
}


function specialCard(typeCard, U, player) {
  var circleMainBlock = `<div class="circleBlock"><div class="diagonal"></div></div>`;
  var circleUBlock = `<div class="circleUDBlock"><div class="diagonal"></div></div>`;
  var circleDBlock = `<div class="circleUDBlock"><div class="diagonal"></div></div>`;
  var circleMain = `<div class="circle"></div>`;
  var circleU = `<div class="circleUD"></div>`;
  var circleD = `<div class="circleUD"></div>`;

  if (typeCard == "()") {
    if (U == "u") {
      return circleU;
    }
    if (U == "d") {
      return circleD;
    }
    if (U == "m") {
      return circleMain;
    }
  }

  if (typeCard == "@") {
    if (player == 1) {
      turn = 1
    }
    if (player == 2) {
      turn = 2
    }
    if (U == "u") {
      return circleUBlock;
    }
    if (U == "d") {
      return circleDBlock;
    }
    if (U == "m") {
      return circleMainBlock;
    }
  }

  return typeCard;
}

function addCardsInDeck(deck) {
  if (deck == 1) {
    for (let i = 0; i < scramble.length; i++) {
      if (scramble[i] == null) {
        scramble[i] = Math.floor(Math.random() * cards.length);
      }
    }
  }
  if (deck == 2) {
    for (let i = 0; i < scramble2.length; i++) {
      if (scramble2[i] == null) {
        scramble2[i] = Math.floor(Math.random() * cards.length);
      }
    }
  }

}

function verificationCard(scram) {
  console.log(cards[scram].color);
  console.log(cards[scram].cod);

  if (cards[scram].color == lastColor) {
    console.log("True color");
    validation = true;
  } else if (cards[scram].number == lastNumber) {
    validation = true;
    console.log("True number");
  } else if (cards[scram].color == "#0f0f0f") {
    validation = true;
  }

  return validation;
}

function joker(color, vf, sc) {

  var pileJ = `
  <div  style="background-color:${color};" class="card"  > 
  <div class="cornerUpDiv">
  <span id="cornerUp"> ${jokerCard.number}</span> </div> <span> ${jokerCard.number}</span> 
  <div class="cornerDownDiv">
  <span id="cornerDown"> ${jokerCard.number}</span></div> 
  </div>`;

  io.in(roomName).emit('escolha', color, vf, sc, pileJ)
}

function addFourCards(player, id) {
  if (player == 2) {
    scramble.length = scramble.length + 4;
    addCardsInDeck(1)
  }
  if (player == 1) {
    scramble2.length = scramble2.length + 4;
    addCardsInDeck(2)
  }
  joker("#0f0f0f", true, 2)

}

function addTwoCards(player, id) {
  if (player == 1) {
    scramble2.length = scramble2.length + 2;
    addCardsInDeck(2)
  }
  if (player == 2) {
    scramble.length = scramble.length + 2;
    addCardsInDeck(1)
  }
  console.log("turno: " + turn)
  io.emit('showCard', scramble, scramble2, pile,users)

}

function searchID(name){
  let id = null
    for(var i = 0; i <= rooms.length; i++){   
     if(rooms[i] != null){
        if(rooms[i].nameRoom == name){
         id = i
      
        break
     }
   }
}
  return id

}
function searchUID(idU){
  let id = null
    for(var i = 0; i <= rooms.length; i++){   
     if(rooms[i] != null){
        for(var a = 0; a <= rooms.length; a++){

             if(rooms[i].users[a].id == idU){
         id = i
      
        break
     }
        }
     
   }
}
  return id

}
io.on('connection', (socket) => {

  pile = pileStart
  console.log("conection aqui")
  console.log(socket.id)

  socket.on('start', (usu, namOfRoom) => {
    console.log(">>>>>>>>>> " + usu)



    let room =  { 
       "nameRoom": namOfRoom,
                "users":[ 
                  ],
       "deck1":scramble,
       "deck2":scramble2
  }
    

    let user = {
      "nome": usu,
      "id": socket.id
    }

    if (rooms != []) {
      console.log(rooms.length == 0)
      for (let i = 0; i <= rooms.length; i++) {
        
        if(rooms.length == 0){
                rooms.push(room)
               roomName = namOfRoom

       
             rooms[i].users.push(user)
             console.log("adcionou o usuario");
                console.log(rooms)
         

          socket.leaveAll();
          console.log(users)
          console.log("criou a sala");

          socket.join(namOfRoom)
          createGame();
          io.in(namOfRoom).emit('start', scramble, scramble2, pileStart, rooms[searchID(namOfRoom)].users[0].nome, users)
          break
        }

        ///////////////////////////////////////////////////////////
   
        if (rooms[i].nameRoom != namOfRoom) { 
    
          roomName = namOfRoom
    
          rooms[i].push(room)
          
             rooms[i].users.push(user)
             console.log("adcionou o usuario");
      
            
              console.log(rooms)
         
          

          socket.leaveAll();
          console.log(users)
          console.log("criou a sala");
          socket.join(namOfRoom)
          createGame();
          io.in(namOfRoom).emit('start', scramble, scramble2, pileStart, rooms[searchID(namOfRoom)].users[0].nome, users)
          break
        }
        else {
          roomName = namOfRoom


             rooms[i].users.push(user)
             console.log("adcionou o usuario");
             console.log(rooms)
         
          
          socket.leaveAll();
          console.log(users)
          console.log("entrou na sala");
          socket.join(namOfRoom)
          io.in(namOfRoom).emit('start', scramble, scramble2, pileStart, rooms[searchID(namOfRoom)].users[0].nome,users)
          break
    }
        }

            }

    

  })




  socket.on("disconnect", (reason) => {
    let id = null;
   for(var i = 0; i <= rooms[searchUID(socket.id)].users.length; i++){
     
     if(rooms[searchUID(socket.id)].users != null){

        if(rooms[searchUID(socket.id)].users[i] == socket.id){
         id = a
      
        break
        }
     
     
   
    }
   }
  
    
    if(id != null){
      
      users.splice(id, 1)
    }
    if(users == 0){
      names = ""
    }
    
  console.log(rooms)


    io.in(roomName).emit('showPlayersOn', users)

  });





  socket.on('reset', () => {
    scramble = new Array();
    scramble.length = 7
    scramble2 = new Array();
    scramble2.length = 7
    game = new Array();
    game.length = 1000;
    users = new Array()
    users.length = 2

    console.log("removido")
    console.log(users)

    pull = new Array();
    pull.length = 500;
    lastColor = ''
    lastNumber = ''
    pileStart = ''
    turn = 1
    createGame()
    io.in(roomName).emit('showCard', scramble, scramble2, pileStart, names ,users)
  })

  socket.on('chooseColor', (color, vf, scram) => {
    lastColor = color;
    lastNumber = cards[scram].number;




    pile = `
        <div  style="background-color:${color};" class="card"  > 
        <div class="cornerUpDiv">
        <span id="cornerUp"> ${jokerCard.number}</span> </div> <span> ${jokerCard.number}</span> 
        <div class="cornerDownDiv">
        <span id="cornerDown"> ${jokerCard.number}</span></div> 
        </div>`;

    joker(color, vf, scram)

  })

  socket.on('push', () => {

    if (turn == 1) {

      scramble.length = scramble.length + 1;
      addCardsInDeck(1)
    }
    if (turn == 2) {

      scramble2.length = scramble2.length + 1;
      addCardsInDeck(2)

    }
    console.log("turno: " + turn)
    io.emit('showCard', scramble, scramble2, pile, names,  users)
  })

  socket.on('play', (scram, id, player) => {

    validation = false;

    if (player == turn) {


      if (verificationCard(scram) == true) {
        if (player == 1) {
          if (users[1] != null) {
            names = rooms[searchUID(socket.id)].users[1];
          }
          else {
            names = "Outro player"
          }
          turn = 2


        }
        if (player == 2) {

          turn = 1
       
          names = rooms[searchUID(socket.id)].users[0];

        }
        lastColor = cards[scram].color;
        lastNumber = cards[scram].number;

        for (let i = 0; i < game.length; i++) {
          if (game[i] == null) {
            game[i] = scram;
          }

          if (cards[scram].number == "()") {

            joker("#0f0f0f", true, scram)

          }

          if (cards[scram].number == "M4") {
            if (player == 1) {

              addFourCards(1, id);
            }
            if (player == 2) {

              addFourCards(2, id);
            }
          }

          if (cards[scram].number == "M2") {
            if (player == 1) {

              addTwoCards(1, id);
            }
            if (player == 2) {

              addTwoCards(2, id);
            }
          }

          pile = `
          <div  style="background-color:${cards[scram].color
            };" class="card" id="${i}" > 
          <div class="cornerUpDiv">
          <span id="cornerUp">${specialCard(
              cards[scram].number,
              "u", player
            )}</span> </div> <span>${specialCard(
              cards[scram].number,
              "m", player
            )}</span> 
          <div class="cornerDownDiv">
          <span id="cornerDown">${specialCard(
              cards[scram].number,
              "d", player
            )}</span></div> 
          </div> `;

          if (player == 1) {
            scramble.splice(id, 1);
          }
          if (player == 2) {
            scramble2.splice(id, 1);
          }

          break;
        }
      }

    }



    io.in(roomName).emit('showCard', scramble, scramble2, pile, names,users)

  })


});


