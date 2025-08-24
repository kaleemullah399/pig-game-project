let gameplayer1score=document.querySelector(".score1");
let gameplayer2score=document.querySelector(".score2");
let picture=[
    // null,
    document.querySelector("#dice1"),
    document.querySelector("#dice2"),
    document.querySelector("#dice3"),
    document.querySelector("#dice4"),
    document.querySelector("#dice5"),
    document.querySelector("#dice6"),
]

let dice=document.querySelector("#rolldice");
let hold=document.querySelector("#hold");

let activeplayer=1;
let score1=0;
let score2=0;

// @ts-ignore
dice.addEventListener("click",()=>{
      let generate=Math.floor(Math.random()*6)+1;
      // @ts-ignore
      picture.forEach(img => img.style.display = "none");

      if(activeplayer===1){
        // @ts-ignore
        picture[generate-1].style.display="block";
        score1+=generate;
        // @ts-ignore
        gameplayer1score.innerHTML=score1
        activeplayer=0;
        checkwinner();
       
      }
      else{
        // @ts-ignore
        picture[generate-1].style.display="block";
        score2+=generate;
        // @ts-ignore
        gameplayer2score.innerHTML=score2;
        activeplayer=1;
        checkwinner();
      }
       
})

let checkwinner=()=>{
      if(score1>=100){
        // @ts-ignore
        gameplayer1score.innerHTML="Winner"
        // @ts-ignore
        dice.disabled=true;
      }else if(score2>=100){
        // @ts-ignore
        gameplayer2score.innerHTML="Winner"
        // @ts-ignore
        dice.disabled=true;
      }
    }

    // @ts-ignore
    hold.addEventListener("click" ,()=>{
          score1=0;
          score2=0;
          activeplayer=1;
          // @ts-ignore
          gameplayer1score.innerHTML="";
          // @ts-ignore
          gameplayer2score.innerHTML="";
           // @ts-ignore
           picture.forEach(img => img.style.display = "none");
           // @ts-ignore
           dice.disabled=false;
    })

  