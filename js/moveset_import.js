function placeBsBtn() {
	var importBtn = "<button id='import' class='bs-btn bs-btn-default'>Import</button>";
	$("#import-1_wrapper").append(importBtn);

	$("#import.bs-btn").click(function () {
		var pokes = document.getElementsByClassName("import-team-text")[0].value;
    // var pokes = document.getElementsByClassName("import-team-text").value;
    // var Leder = $.csv.toArrays(pokes);
    console.log(pokes);
		addSets(pokes);
	});


}



function serialize(array, separator) {
	var text = "";
	for (var i = 0; i < array.length; i++) {
		if (i < array.length - 1) {
			text += array[i] + separator;
		} else {
			text += array[i];
		}
	}
	return text;
}


function addSets(pokes) {
	//var rows = pokes.split("\n");
	var currentRow;
	var currentPoke;
	var addedpokes = 0;
	
  //var pokes;
  var i;
  var j;
<<<<<<< HEAD

=======
  var FPlacement = 0;
  var UPlacement = 0;
  var APlacement = 0;
>>>>>>> parent of d87bb24... More bordizer war crimes, spaghetti inside
  var Leder = $.csv.toArrays(pokes);
//var pokes = document.getElementsByClassName("import-team-text")[0].value;
  console.log(pokes);
  console.log(Leder);
  
  var fullout = [];
  //loop the outer array
  for (var i = 0; i < Leder.length; i++) {
     var innerArrayLength = Leder[i].length;
     var userName = Leder[i][0];
     var userId = Leder[i][1];
     var streakLen = Leder[i][2];
     var url1 = Leder[i][3];
     var pokeAmount = Leder[i][4];

     var teamPokes = [];

     teamPokes[0] = Leder[i][5];
     teamPokes[1] = Leder[i][6];
     teamPokes[2] = Leder[i][7];
     teamPokes[3] = Leder[i][8];
     teamPokes[4] = Leder[i][9];
     teamPokes[5] = Leder[i][10];
    console.log(parseInt(pokeAmount))
     switch (parseInt(pokeAmount)) {
       case 1:
         var url1Text = teamPokes[0];
         break;
       case 2:
         var url1Text = teamPokes[0] + " / " + teamPokes[1];
         break;
       case 3:
         var url1Text = teamPokes[0] + " / " + teamPokes[1] + " / " + teamPokes[2];
         break;
       case 4:
         var url1Text = teamPokes[0] + " / " + teamPokes[1] + " / " + teamPokes[2] + " / " + teamPokes[3];
         break;
       case 5:
         var url1Text = teamPokes[0] + " / " + teamPokes[1] + " / " + teamPokes[2] + " / " + teamPokes[3] + " / " +teamPokes[4];
         break;
       case 6:
         var url1Text = teamPokes[0] + " / " + teamPokes[1] + " / " + teamPokes[2] + " / " + teamPokes[3] + " / " +teamPokes[4] + " / " + teamPokes[5];
         break;
     }


     var streakFlags = Leder[i][11];
     var url2 = Leder[i][12];
     var url2Text = Leder[i][13];
     var url3 = Leder[i][14];
     var url3Text = Leder[i][15];


<<<<<<< HEAD
=======
     switch (finish) {
       case "F":
         var FPlacement = FPlacement + 1;
         var Fout_bbcode = "#" + FPlacement + ". " + "[b][user=" + userId + "]" + userName + "[/user][/b], ([b]" + streakLen + "[/b] - [url=" + url1 + "]" + url1Text + "[/url]"
         Ffullout[FPlacement] = Fout_bbcode;
         break;

       case "U":
         var UPlacement = UPlacement + 1;
         var Uout_bbcode = "#" + UPlacement + ". " + "[b][user=" + userId + "]" + userName + "[/user][/b], ([b]" + streakLen + "[/b] - [url=" + url1 + "]" + url1Text + "[/url]"
         Ufullout[UPlacement] = Uout_bbcode;
         break;
     }

     var APlacement = APlacement + 1;
     var Aout_bbcode = "#" + APlacement + ". " + "[b][user=" + userId + "]" + userName + "[/user][/b], ([b]" + streakLen + "[/b] - [url=" + url1 + "]" + url1Text + "[/url]"
     Afullout[APlacement] = Aout_bbcode;

>>>>>>> parent of d87bb24... More bordizer war crimes, spaghetti inside

     //var url1Text = teamPoke1 + " / " + teamPoke2 + " / " + teamPoke3 + " / " + teamPoke4;
    //console.log(userName, userId, streakLen, url1, teamPoke1, teamPoke2, teamPoke3, teamPoke4, streakFlags, url2, url2Text, url3, url3Text, url1Text);
    //var TestingTesting = userName + userId + streakLen + url1 + teamPoke1 + teamPoke2 + teamPoke3 + teamPoke4 + streakFlags + url2 + url2Text + url3 + url3Text + url1Text;
    //console.log(TestingTesting);

     var Placement = i + 1;
     var out_bbcode = "#" + Placement + ". " + "[b][user=" + userId + "]" + userName + "[/user][/b], ([b]" + streakLen + "[/b] - [url=" + url1 + "]" + url1Text + "[/url]"

     fullout[i] = out_bbcode
     //document.getElementsByClassName("leder-result-text")[0].value= TestingTesting;
     // loop the inner array
     for (var j = 0; j < innerArrayLength; j++) {
     console.log('[' + i + ',' + j + '] = ' + Leder[i][j]);
     
   }
   }
 // output the list generated into the fullout array to output field 
     document.getElementsByClassName("leder-result-text")[0].value= fullout.join("\n");
  }



$(document).ready(function () {
	var customSets;
  var Leder;
	placeBsBtn();
	//if (localStorage.customsets) {
	//	customSets = JSON.parse(localStorage.customsets);
	//	updateDex(customSets);
	//	$(bothPokemon("#importedSetsOptions")).css("display", "inline");
	//}// else {
	//	loadDefaultLists();
	//}
});
