var Zadatak = parseInt(prompt("Unesite broj zadatka"));
switch (Zadatak) {
  case 1: {
    //Zadatak 1.

    var broj = parseInt(
      prompt(
        "unesite broj - proverava da li je broj deljiv sa 3 i 4 (koren broja), ako nije da li je deljiv sa 5 (broj na kvadrat)"
      )
    );
    var rezultat;
    if (broj % 3 == 0 && broj % 4 == 0) {
      rezultat = Math.sqrt(broj);
      console.log(
        "Broj: ",
        +broj + "je deljiv sa 3 i sa 4 i racunamo koren broja"
      );
    }
    if (broj % 5 == 0) {
      rezultat = broj * broj;
    }
    if (!(broj % 3 == 0 && broj % 4 == 0) && !(broj % 5 == 0)) {
      rezultat = "Uneli ste broj koji ne zadovoljava uslove zadatka";
    }

    console.log("Rezultat je: " + rezultat);
    break;
  }

  case 2: {
    //Zadatak 2.

    var cena = parseFloat(
      prompt("Unesite cenu - racunamo apoene od 100, 20 i jedan dinar")
    );
    var broj100;
    var broj20;
    var broj1;

    broj100 = parseInt(cena / 100);
    broj20 = parseInt((cena % 100) / 20);
    broj1 = (cena % 100) - broj20 * 20;

    console.log(
      "Za cenu ",
      +cena +
        " broj apoena od 100 dinara je " +
        broj100 +
        ", broj apoena od 20 dinara je " +
        broj20 +
        ", broj apoena od 1 dinar je " +
        broj1
    );

    break;
  }

  case 3: {
    //Zadatak 3.

    var sat_poleteo = parseInt(prompt("Unesite sate kada je avion poleteo."));
    var min_poleteo = parseInt(prompt("Unesite minute kada je avion poleteo."));
    var sek_poleteo = parseInt(
      prompt("Unesite sekunde kada je avion poleteo.")
    );

    var sek_ukupno_leteo = parseInt(prompt("Unesite vreme leta u sekundama"));
    console.log(
      "Vreme poletanja aviona je: " +
        sat_poleteo +
        ":" +
        min_poleteo +
        ":" +
        sek_poleteo
    );
    console.log("Avion je leteo ukupno " + sek_ukupno_leteo + "sekundi.");

    var sek_vreme =
      sat_poleteo + 3600 + min_poleteo * 60 + sek_poleteo + sek_ukupno_leteo;
    console.log("Ukupno sekundi " + sek_vreme);

    var sat_sleteo = parseInt(sek_vreme / 3600);
    var min_sleteo = parseInt((sek_vreme % 3600) / 60);
    var sek_sleteo = (sek_vreme % 3600) % 60;
    if (sat_sleteo >= 24) {
      sat_sleteo = sat_sleteo - 24;
    }
    if (min_sleteo < 10) {
      min_sleteo = "0" + sek_sleteo;
    }
    if (sek_sleteo < 10) {
      sek_sleteo = "0" + sek_sleteo;
    }
    console.log(
      "Tacno vreme kada je avion sleteo je: " +
        sat_sleteo +
        ":" +
        min_sleteo +
        ":" +
        sek_sleteo
    );

    break;
  }
  case 4: {
    //Zadatak 4.
    var S = parseInt(prompt("Unesite sate:"));
    var M = parseInt(prompt("Unesite minute"));
    console.log("S =" + S + ",", "M = " + M);

    if (M == 0 && (S == 0 || !S == 24)) {
      console.log("Tacno vreme je PONOC");
    }
    if ((M = 0 && (!S == 0 || S == 24))) {
      console.log("Tacno vreme je:" + S + "sati.");
    }
    if (M < 30 && (S == 0 || S == 24)) {
      console.log("Tacno vreme je: " + M + "minuta posle ponoci.");
    }
    if (M < 30 && (!S == 0 || !S == 24)) {
      console.log("Tacno vreme je: " + S + "sati i " + M + "minuta");
    }
    if (M > 30 && S == 23) {
      M = 60 - M;
      console.log("Tacno vreme je: " + M + "minuta do ponoci.");
    }
    if (M > 30 && !(S == 23)) {
      M = 60 - M;
      S = S + 1;
      console.log("Tacno vreme je: " + M + "minuta do" + S + "sati.");
    }

    break;
  }

  default: {
    console.log("Uneli ste broj koji nije u intervalu od 1 do 4.");
  }
}
