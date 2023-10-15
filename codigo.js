
let boton = document.querySelector("#tema"); 
let body = document.querySelector("body");
let darkmode = false



boton.addEventListener ("click", () => {

    if(darkmode == false){
        darkmode = true;
        body.style.backgroundColor = "white"
    }else{
        darkmode = false;
        body.style.backgroundColor = "black"
    }
});

function playMusic() {
    var iframe = document.getElementById("musicIframe");
    var playButton = document.querySelector("#Musica .play-button");
    iframe.style.display = "block";
    playButton.style.display = "none";
}