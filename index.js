
/*document.querySelectorAll("button.drum")[0].addEventListener("click", handleClick1);
document.querySelectorAll("button.drum")[1].addEventListener("click", handleClick2);
document.querySelectorAll("button.drum")[2].addEventListener("click", handleClick3);
document.querySelectorAll("button.drum")[3].addEventListener("click", handleClick4);
document.querySelectorAll("button.drum")[4].addEventListener("click", handleClick5);
document.querySelectorAll("button.drum")[5].addEventListener("click", handleClick6);
document.querySelectorAll("button.drum")[6].addEventListener("click", handleClick7);

function handleClick1(){
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
 }

 function handleClick2(){
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
 }

 function handleClick3(){
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
 }

 function handleClick4(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
 }

 function handleClick5(){
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
 }

 function handleClick6(){
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
 }

 function handleClick7(){
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
 }
*/


for(var i=0 ; i<7; ++i){
    document.querySelectorAll("button.drum")[i].addEventListener("click", handleClick);
}

function handleClick(){
    if(this.classList[0] === "w"){
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        this.classList.add("pressed");
    }else if(this.classList[0] === "a"){
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        this.classList.add("pressed");

    }else if(this.classList[0] === "s"){
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        this.classList.add("pressed");
        
    }else if(this.classList[0] === "d"){
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        this.classList.add("pressed");

    }else if(this.classList[0] === "j"){
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        this.classList.add("pressed");

    }else if(this.classList[0] === "k"){
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        this.classList.add("pressed");
    }else{
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        this.classList.add("pressed");

    }
}

document.addEventListener("keypress", handlePress);


function handlePress(event){
    var me = document.querySelector("."+event.key);
    switch(event.key){
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            me.classList.add("pressed");
        break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            me.classList.add("pressed");
        break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            me.classList.add("pressed");
        break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            me.classList.add("pressed");
        break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            me.classList.add("pressed");
        break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            me.classList.add("pressed");
        break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            me.classList.add("pressed");
        break;
    }
   
}