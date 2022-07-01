let btn1 = document.getElementById("btn1");
function flip1(){
  btn1.classList.toggle("active");
  if(btn1.classList.contains("active")){
    document.getElementById("pop1").style.display="block";
    document.getElementById('headword1').style.fontWeight='bold';
    document.getElementById('arrow1').style.transform='rotate(180deg)';
  }else{
    document.getElementById("pop1").style.display="none";
    document.getElementById('headword1').style.fontWeight='normal';
    document.getElementById('arrow1').style.transform='none';
  }
}
btn1.addEventListener("click",flip1);

let btn2 = document.getElementById("btn2");
function flip2(){
  btn2.classList.toggle("active");
  if(btn2.classList.contains("active")){
    document.getElementById("pop2").style.display="block";
    document.getElementById('headword2').style.fontWeight='bold';
    document.getElementById('arrow2').style.transform='rotate(180deg)';
  }else{
    document.getElementById("pop2").style.display="none";
    document.getElementById('headword2').style.fontWeight='normal';
    document.getElementById('arrow2').style.transform='none';
  }
}
btn2.addEventListener("click",flip2);

let btn3 = document.getElementById("btn3");
function flip3(){
  btn3.classList.toggle("active");
  if(btn3.classList.contains("active")){
    document.getElementById("pop3").style.display="block";
    document.getElementById('headword3').style.fontWeight='bold';
    document.getElementById('arrow3').style.transform='rotate(180deg)';
  }else{
    document.getElementById("pop3").style.display="none";
    document.getElementById('headword3').style.fontWeight='normal';
    document.getElementById('arrow3').style.transform='none';
  }
}
btn3.addEventListener("click",flip3);

let btn4 = document.getElementById("btn4");
function flip4(){
  btn4.classList.toggle("active");
  if(btn4.classList.contains("active")){
    document.getElementById("pop4").style.display="block";
    document.getElementById('headword4').style.fontWeight='bold';
    document.getElementById('arrow4').style.transform='rotate(180deg)';
  }else{
    document.getElementById("pop4").style.display="none";
    document.getElementById('headword4').style.fontWeight='normal';
    document.getElementById('arrow4').style.transform='none';
  }
}
btn4.addEventListener("click",flip4);

let btn5 = document.getElementById("btn5");
function flip5(){
  btn5.classList.toggle("active");
  if(btn5.classList.contains("active")){
    document.getElementById("pop5").style.display="block";
    document.getElementById('headword5').style.fontWeight='bold';
    document.getElementById('arrow5').style.transform='rotate(180deg)';
  }else{
    document.getElementById("pop5").style.display="none";
    document.getElementById('headword5').style.fontWeight='normal';
    document.getElementById('arrow5').style.transform='none';
  }
}
btn5.addEventListener("click",flip5);