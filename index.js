
document.addEventListener("keypress", function (event) {
   var val=event.key;
   play(val);
   buttonAnimation(val);


});


for(let i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var obj=this;

    this.style.color="black";
    setTimeout(function(){
        var text=obj.innerHTML;
        play(text);
        buttonAnimation(text);


        

        obj.style.color="#DA0463"

    },100)
    

});
}
function play(text){
    switch (text) {
        case "w":{(new Audio("sounds/tom-2.mp3")).play();
                    break;
    }
        case "a":(new Audio("sounds/kick-bass.mp3")).play();
                    break;
        case "s":(new Audio("sounds/snare.mp3")).play();
                    break;
         case "d":(new Audio("sounds/tom-1.mp3")).play();
                    break;   
         case "j":(new Audio("sounds/crash.mp3")).play();
                    break;  
        case "k":(new Audio("sounds/tom-3.mp3")).play();
                    break;       
        case "l":(new Audio("sounds/tom-4.mp3")).play();
                    break;

            
    
        default:
            console.log(text);

            break;
    }
}

function buttonAnimation(text) {
    document.querySelector("."+text).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+text).classList.remove("pressed");
        
    }, 100);



    
}




// var val=new Audio("sounds/crash.mp3");
// val.play();
