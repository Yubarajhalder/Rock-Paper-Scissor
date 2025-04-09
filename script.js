let rock= document.querySelector(".rock")
let paper= document.querySelector(".paper")
let scissor= document.querySelector(".scissor")
let userscore = document.querySelector(".us")
let compscore = document.querySelector(".cs")
let reset = document.querySelector(".reset")
let clear=()=>{
    userscore.innerText=0;
    compscore.innerText = 0;
}
let uswin = () => {
    let currentNumber = parseInt(userscore.innerText);
    userscore.innerText = currentNumber + 1;
  };
  
  let cswin = () => {
    let currentNumber = parseInt(compscore.innerText);
    compscore.innerText = currentNumber + 1;
  };
  

let compchoice=()=>{
    let rnum=Math.floor(Math.random()*3)
    let rps=["rock","Paper","Scissor"]
    console.log(rnum)
    let cc=rps[rnum]
    return cc

}
let rk=()=>{
    let cc=compchoice()
    if(cc=="Rock"){
        console.log("draw")
    }else if (cc=="Paper"){
        console.log("lost")
        cswin()
    }else{
        console.log("you win")
        uswin()
    }
}
let pk=()=>{
    let cc=compchoice()
    if(cc=="Paper"){
        console.log("draw")
        console.log(cc)
    }else if (cc=="Scissor"){
        console.log("lost")
        cswin()
    }else{
        console.log("you win")
        console.log(cc)
         uswin()
    }
}
let sk=()=>{
    let cc=compchoice()
    if(cc=="scissor"){
        console.log("draw")
    }else if (cc=="rock"){
        console.log("lost")
        cswin()
    }else{
        console.log("you win")
         uswin()
    }
}
rock.addEventListener("click",()=>{rk()})
paper.addEventListener("click",()=>{pk()})
scissor.addEventListener("click",()=>{sk()})
reset.addEventListener("click",()=>{
    clear()
})