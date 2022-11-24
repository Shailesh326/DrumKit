for(var i=0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        var c = this.innerHTML;
        func2(c);
        func3(c);
    });
}
document.addEventListener("keypress",function(event){
  // console.log(event.key);
  func2(event.key);
  func3(event.key);
});
function func2(c) {
    switch (c) {
        case "w": var crash = new Audio("sounds_crash.mp3");
            crash.play(); break;
        case "a": var kick = new Audio("sounds_kick-bass.mp3");
            kick.play(); break;
        case "s": var snare = new Audio("sounds_snare.mp3");
            snare.play(); break;
        case "d": var tom1 = new Audio("sounds_tom-1.mp3");
            tom1.play(); break;
        case "j": var tom2 = new Audio("sounds_tom-2.mp3");
            tom2.play(); break;
        case "k": var tom3 = new Audio("sounds_tom-3.mp3");
            tom3.play(); break;
        case "l": var tom4 = new Audio("sounds_tom-4.mp3");
            tom4.play(); break;
        default:console.log(c);
    }
}
function func3(c){
  document.querySelector("."+c).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+c).classList.remove("pressed");
  },350)
}
