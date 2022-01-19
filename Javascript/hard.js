let brand = $("#Brand")
let model = $("#Model")
let year = $("#Year")
let box = $(".box")
let Moption = $("#Model > option")
let select = $("select")
let reset = $(".reset")
brand.val("")
model.val("")
year.val("")
select.change(function(){   
    
    box.each(function(){
        if( $(this).data("brand") == brand.val() && model.val()==null && year.val()==null){
            $(this).delay(700).fadeIn()
            
        }else if( $(this).data("brand") == brand.val() &&  $(this).data("model") == model.val() && year.val()==null  ){
            $(this).delay(700).fadeIn()

        }else if($(this).data("brand") == brand.val() &&  $(this).data("model") == model.val() && $(this).data("year") == year.val()){
            $(this).delay(700).fadeIn()
            $(this).attr("style", "margin:1rem 0")
        }else if($(this).data("brand") == brand.val() && model.val()==null && $(this).data("year") == year.val()){
            $(this).delay(700).fadeIn()
        }else{
            $(this).delay(700).fadeOut()
        }
    
    
    
    
    
    
    })
})
brand.change(function(){
    Moption.each(function(){
        if(brand.val()==$(this).attr("id")){
            $(this).show()
        }else{
            model.val("")
            $(this).hide()
        }
    });

    
   
})



reset.click(function(){
    location.reload();
})



$(window).on('load', function(){
    for(let i = 0; i < box.length; i++){
        let target = Math.floor(Math.random() * box .length -1) + 1;
        let target2 = Math.floor(Math.random() * box .length -1) +1;
        box .eq(target).before(box .eq(target2));
    }
});
