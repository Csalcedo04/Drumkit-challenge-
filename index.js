var numberofdrumbuttons= document.querySelectorAll(".drum").length; 
//funtion to play the sounds of the objects
function makesound(key){
    switch (key) {
            case "w":
                const tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                const tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                const tom3 = new Audio("sounds/tom-3.mp3"); 
                tom3.play();
                break;
            case "d":
                const tom4 = new Audio("sounds/tom-3.mp3"); 
                tom4.play();
                break;
            case "j":
                const snare = new Audio("sounds/snare.mp3"); 
                snare.play();
                break;
            case "k":
                const crash = new Audio("sounds/crash.mp3"); 
                crash.play(); 
                break;
            case "l":
                const kick = new Audio("sounds/kick-bass.mp3"); 
                kick.play();
                break;
            default:
                console.log (key)
               
        }
}


// a loop to selecti all the buttons and play the sound when gets click it
for (var i=0;i<numberofdrumbuttons; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function () {//audio.play();
        const buttonInnierHtml= this.innerHTML
        makesound(buttonInnierHtml)
        buttonAnimation(buttonInnierHtml)
        // It's what the listener going to do when it detects a click
        });       
}

//a listener to trigger the sounds when's the right keys get press
document.addEventListener("keydown", (event)=>{
    makesound(event.key)
    buttonAnimation(event.key)
})
//animation function: add and remuve the class "pressed" during 1sg then it get removed 
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");
    
    setTimeout(function() {activeButton.classList.remove("pressed"); },100 );
    
    console.log("hola")
}