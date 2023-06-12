//let changequote= document.getElementById('quote')
//let quoteD="“Worldly life is short, so turn to Allah before you return to Allah.” – Anonymous"
//let quotetype=["Do not lose hope, nor be sad. -Quran 3:13",
  //             "Never underestimate the power of Dua (supplication)",
    //           "Allah makes the impossible possible.",
      //         "Be like a diamond, precious and rare, not like a stone, found everywhere.",
        //       "No one will reap except what they sow. -Quran 6:164",
          //     "For indeed, with hardship ease. -Quran 94:5",
            //   "Allah is with the doers of good. –Quran 29:69",
              // "Allah is with those who have patience. -Quran 2:153",
               //"Before going to sleep every night, forgive everyone and sleep with a clean heart.",
               //"Dua (supplication) has the power to turn your dreams into reality.",
               //"Once prayer becomes a habit, success becomes a lifestyle"]
//function change_quote(){
 //   quoteD=quotetype[0]
  //  textContent.changequote=quotetype[0]
  //  
//}
let changequote = document.getElementById('quote');
let quoteD = "";
let quotetype = [
  "'Do not lose hope, nor be sad'. -Quran 3:13",
  "'Never underestimate the power of Dua (supplication)'– Anonymous",
  "'Allah makes the impossible possible'.",
  "'Be like a diamond, precious and rare, not like a stone, found everywhere.'– Anonymous",
  "'No one will reap except what they sow'. -Quran 6:164",
  "'For indeed, with hardship ease'. -Quran 94:5'",
  "'Allah is with the doers of good'. –Quran 29:69'",
  "'Allah is with those who have patience'. -Quran 2:153'",
  "'Before going to sleep every night, forgive everyone and sleep with a clean heart.'– Anonymous",
  "'Dua (supplication) has the power to turn your dreams into reality.'– Anonymous",
  "'Once prayer becomes a habit, success becomes a lifestyle'– Anonymous"
];

function change_quote() {
    let randomIndex = Math.floor(Math.random() * quotetype.length);
    let randomQuote = quotetype[randomIndex];
    
    quoteD = randomQuote;
    changequote.textContent = randomQuote;
  }
  

