var buttons = document.querySelectorAll(".drum");

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index].addEventListener("click", function () {
        var letter = this.innerHTML;
        playAudio(letter);
        animation(letter);
    });
}

document.addEventListener("keydown",function (event){
    playAudio(event.key);
    animation(event.key);
});

function playAudio(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(key);
            break;
    }
}

function animation(key){
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function (){document.querySelector("."+key).classList.remove("pressed")},100);
    
}