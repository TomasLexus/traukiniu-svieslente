function spausdintiMarsruta(marsrutas) {
    console.log(`Maršrutas: ${marsrutas.pavadinimas}`);
    console.log(`Išvykimo data ir laikas: ${marsrutas.isvykimoData}`);
    console.log(`Kelionės trukmė: ${marsrutas.kelionesTrukme}`);
    console.log(`Atvykimo data ir laikas: ${marsrutas.atvykimoData}`);
    console.log('------------------------------------------');
  }
  
  module.exports = { spausdintiMarsruta };
  