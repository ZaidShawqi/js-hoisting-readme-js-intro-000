function callme() {

  return lyric;
  var lyric = "maybe";
  console.log("lyric")
}


function crazy() {
  // fix the code in here:
 thisIsCrazy();

  var thisIsCrazy = function (){
    console.log("hey!!!")
  }
}

function sayMyName() {
  // fix the code in here:
  var name = "Kristin";
  console.log(name)


  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
