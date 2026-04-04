let no_button = document.querySelector(".no");
let yes_button = document.querySelector(".yes");
let hover_cont = document.querySelector(".Yes_cont");
let convince = document.querySelector(".convince");
let bg_music = document.querySelector(".bg_music");
let no_music = document.querySelector(".no_music");
let ask = document.querySelector(".ask"); 
let kiss_music = document.querySelector(".kiss_music");

ask.addEventListener('click', () => { 
    document.querySelector(".ask_container").style.display = "none";
    document.querySelector(".container").style.display = "flex";    
    bg_music.play();  
});

hover_cont.addEventListener('mouseenter', () => {
    const randomX = Math.floor(Math.random() * (600 - (-400) + 1)) + (-400);
    const randomY = Math.floor(Math.random() * (300 - (-400) + 1)) + (-400);
    hover_cont.style.transform = `translate(${randomX}px, ${randomY}px)`;
    hover_cont.style.transition = "transform 0.2s ease-in-out";
    bg_music.play();
});


myfunction = () => {
    convince.style.display = "none";
    hoveredButton = 1;
    bg_music.play();
}


yes_button.addEventListener('click', () => {
    no_button.style.display = "none";
    document.querySelector(".pic2").style.display = "block";
    kiss_music.play();
    bg_music.pause();

});

display_convince = () => {
    convince.style.display = "none";
    bg_music.play();
}

no_button.addEventListener('click', () => {
    convince.style.display = "block";
    no_music.play();
    bg_music.pause();
    setTimeout(display_convince, 6500);
});
