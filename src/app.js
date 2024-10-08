window.onload = function() {
  // array with the words
  let first = "Un ";
  let adj = [
    "feo ",
    "rapido ",
    "flaco ",
    "peresozo ",
    "loco ",
    "viejo ",
    "hediondo ",
    "alegre ",
    "bonito "
  ];
  let noun = [
    "anciano ",
    "policia ",
    "perro ",
    "conductor ",
    "cocinero ",
    "gato ",
    "conocido "
  ];
  let action = [
    "se llevo mi ",
    "tiro mi ",
    "brinco sobre mi ",
    "se comio mi ",
    "se robo mi ",
    "quemo mi ",
    "partio mi ",
    "golpeo mi "
  ];
  let possetion = [
    "carro ",
    "computadora ",
    "televisor ",
    "lentes ",
    "reloj ",
    "gorra ",
    "pantalon ",
    "playstation ",
    "celular ",
    "comida "
  ];
  let where = [
    "en mi casa",
    "en el cine",
    "en la playa",
    "en casa de mi abuela",
    "en el centro comercial",
    "en la cama",
    "cerca de la panaderia"
  ];

  // declaring random variables
  let rdm1 = Math.floor(Math.random() * adj.length);
  let rdm2 = Math.floor(Math.random() * noun.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * possetion.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML =
    first +
    adj[rdm1] +
    noun[rdm2] +
    action[rdm3] +
    possetion[rdm4] +
    where[rdm5];
};
