const marsrutai = require('../data/marsrutai.json');
const marsrutaiView = require('../views/marsrutaiView');

exports.trumpiausiaKelione = (req, res) => {
  let trumpiausiaKelione = marsrutai.reduce((trumpiausia, marsrutas) => {
    let laikas = marsrutas.kelionesTrukme.split(':');
    let valandos = parseInt(laikas[0]);
    let minutes = parseInt(laikas[1]);
    let bendrasLaikas = valandos * 60 + minutes;
    if (bendrasLaikas < trumpiausia) {
      return bendrasLaikas;
    }
    return trumpiausia;
  }, Infinity);

  let trumpiausiMarsrutai = marsrutai.filter(marsrutas => {
    let laikas = marsrutas.kelionesTrukme.split(':');
    let valandos = parseInt(laikas[0]);
    let minutes = parseInt(laikas[1]);
    let bendrasLaikas = valandos * 60 + minutes;
    return bendrasLaikas === trumpiausiaKelione;
  });

  res.send(trumpiausiMarsrutai);
};

exports.ilgiausiaKelione = (req, res) => {
  let ilgiausiaKelione = marsrutai.reduce((ilgiausia, marsrutas) => {
    let laikas = marsrutas.kelionesTrukme.split(':');
    let valandos = parseInt(laikas[0]);
    let minutes = parseInt(laikas[1]);
    let bendrasLaikas = valandos * 60 + minutes;
    if (bendrasLaikas > ilgiausia) {
      return bendrasLaikas;
    }
    return ilgiausia;
  }, 0);

  let ilgiausiMarsrutai = marsrutai.filter(marsrutas => {
    let laikas = marsrutas.kelionesTrukme.split(':');
    let valandos = parseInt(laikas[0]);
    let minutes = parseInt(laikas[1]);
    let bendrasLaikas = valandos * 60 + minutes;
    return bendrasLaikas === ilgiausiaKelione;
  });

  res.send(ilgiausiMarsrutai);
};

exports.kelionesIlgesnesNeiPara = (req, res) => {
  let ilgaKelione = 24 * 60;
  let ilgosKeliones = marsrutai.filter(marsrutas => {
    let laikas = marsrutas.kelionesTrukme.split(':');
    let valandos = parseInt(laikas[0]);
    let minutes = parseInt(laikas[1]);
    let bendrasLaikas = valandos * 60 + minutes;
    return bendrasLaikas > ilgaKelione;
  });

  res.send(ilgosKeliones);
};
