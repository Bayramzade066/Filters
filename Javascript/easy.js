let buttons = document.querySelectorAll(".buttons button");
let single = document.querySelectorAll(".single")


buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
        for(let i=0;i<single.length;i++){
            single[i].style.opacity = `0`;
            single[i].style.visibility = `hidden`;
            single[i].style.transform = `scale(0)`;
            single[i].style.width='0';
            single[i].style.height='0';
            single[i].style.margin='0';
            
            if(e.target.dataset.filter==single[i].dataset.filter){
                single[i].style.opacity = `1`;
                single[i].style.width='13rem';
                single[i].style.height='13rem';
                single[i].style.margin='1.5rem';
                single[i].style.visibility = `visible`;
                single[i].style.transform = `scale(1)`;
                single[i].style.transition='0.5s';
            }
            if(e.target.dataset.filter=='all'){
                single[i].style.opacity = `1`;
                single[i].style.width='13rem';
                single[i].style.height='13rem';
                single[i].style.margin='1.5rem';
                single[i].style.visibility = `visible`;
                single[i].style.transform = `scale(1)`;
                single[i].style.transition='0.5s';
             }
        }
    })
});