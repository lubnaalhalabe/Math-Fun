var mynav =document.getElementById('nav') ,
    myclick =document.getElementById('click'),
    myspan =document.getElementById('span'),
    mysch = document.getElementById('jojo'),
    myschool = document.getElementById('school'),
    mykl = document.getElementById('kl'),
    mydivp =document.getElementById('div5'),
    mydiv3 =document.getElementById('div3'),
    mydiv55 =document.getElementById('div55'),
    mydiv33 =document.getElementById('div33'),
    mydiv4 =document.getElementById('div4');
    myclick.style.display = "none";
mynav.onclick = hk;
myspan.onclick = kh;
window.onload = mnb;
mydiv4.onmouseenter =lubna;
mydiv4.onmouseleave =lubna1;
mydiv55.onmouseenter =lubnaa;


function hk(){
    myclick.style.display = "block";
    myclick.style.width = "300px";
    myclick.style.height = "500px";
    mynav.style.display = "none";
}
function kh(){
    myclick.style.display = "none";
    mynav.style.display = "block";
};
function mnb(){
    mysch.style.animation = "scale 4s  linear";};
function lubna(){
    mydiv4.style.animation = "slide 10s linear";
}
    function lubna1(){
        mydivp.style.animation = "none";
        mydiv4.style.animation = "none"
    
    }
    function lubnaa(){
    mydiv33.style.animation ="slide 10s linear";
    }
