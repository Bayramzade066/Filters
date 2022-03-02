let input = document.querySelectorAll("input")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let wraps = document.querySelectorAll(".wraps2")
let box = document.querySelectorAll(".wraps2-box")


//Price Filter 

function PriceFilter(){
    input.forEach(input => {
        input.addEventListener("focus",()=>{
            input.value=""
            input.style.color="black"
        })
        input.addEventListener("keyup",(e)=>{
            
            if(input.value>150){input.value=150;}else if(input.value<0){input.value=0;}
            if ((e.keyCode > 46 && e.keyCode < 58)|| (e.keyCode < 106 && e.keyCode > 95) || e.keyCode==8) { 
                    
            }else{
                input.value=""
            }
            for(let i =0;i<wraps.length;i++){
                for(i=0;i<box.length;i++){
                    
                    myString=parseInt(box[i].dataset.filter)
                    input1Value=parseInt(input1.value)
                    input2Value=parseInt(input2.value)
                    if(myString>=input1Value && myString<=input2Value){
                        box[i].style.opacity="1"
                        box[i].style.transition="0.5s"
                        box[i].style.width="18rem"
                        box[i].style.height="25rem"
                        box[i].style.margin="2rem"
                    }else if(input1.value=="" && input2.value==""){
                        box[i].style.opacity="1"
                        box[i].style.transition="0.5s"
                        box[i].style.width="18rem"
                        box[i].style.height="25rem"
                        box[i].style.margin="2rem"
                    }else{
                        box[i].style.opacity="0"
                        box[i].style.transition="0.5s"
                        box[i].style.width="0rem"
                        box[i].style.height="0rem"
                        box[i].style.margin="0rem"
                    }
                }
                }
    
        })
        
    });
}
PriceFilter()



let boxWidth = box[0].offsetWidth;
let boxHeight = box[0].offsetHeight;

let div = document.createElement("div")
div.style.width=boxWidth + "px"
div.style.height=boxHeight +"px"
div.style.position="absolute"
div.style.backgroundColor="rgba(0, 0, 0, 0.350)"
div.style.zIndex="1"
div.style.transition="0.2s"
div.style.opacity="0"
div.style.left=box[0].offsetLeft + "px"
div.style.top=box[0].offsetTop + "px"
document.querySelector(".wraps2").appendChild(div)


box.forEach(Ananas => {
    
    Ananas.addEventListener("mouseover",()=>{
        let width = Ananas.offsetWidth
        let height = Ananas.offsetHeight
        let x= Ananas.offsetLeft
        let y= Ananas.offsetTop
        div.style.left=x + "px"
        div.style.top = y + "px"
        div.style.width=width + "px"
        div.style.height=height + "px"
        div.style.zIndex="1"
        div.style.opacity="1"
        div.style.transition="0.3s"
        
        // xiyar.firstElementChild.style.opacity="0"
        // xiyar.firstElementChild.style.transition="0.5s"
        if(div.style.left==x +"px" && div.style.top==y+"px"){
            
            // div.addEventListener("mouseover",()=>{
            // console.log(Ananas.firstElementChild)
            // Ananas.firstElementChild.style.transition="0.5s"
            // Ananas.firstElementChild.style.opacity="1"
            // })
            Ananas.addEventListener("mouseover",()=>{

        
                Ananas.firstElementChild.style.transition="0.5s"
                Ananas.firstElementChild.style.opacity="1"
                div.style.opacity="1"
            })
            Ananas.addEventListener("mouseout",()=>{
                div.style.transition="0.2s"
                div.style.opacity="0"
        
                Ananas.firstElementChild.style.transition="0.5s"
                Ananas.firstElementChild.style.opacity="0"
                
            })
            
        }
      
        
    })
    
    
  
});

let p = document.querySelectorAll("P")

p.forEach(pitem => {
    pitem.addEventListener("mouseover",()=>{
        div.style.opacity="1"
        pitem.style.zIndex="999999"
        pitem.style.opacity="1"



    })
    pitem.addEventListener("mouseout",()=>{

        div.style.opacity="0"
        pitem.style.zIndex="999999"
        pitem.style.opacity="0"

    })
});