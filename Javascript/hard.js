let brand = $("#Brand")
let model = $("#Model")
let year = $("#Year")
let box = $(".box")
let Moption = $("#Model > option")
let select = $("select")
let reset = $(".reset")
let hover = $(".hover")
brand.val("")
model.val("")
year.val("")

select.change(function(){   
    hover.each(function(){
        if( $(this).data("brand") == brand.val() && model.val()==null && year.val()==null){
            $(this).delay(700).fadeIn() 
        }else if( $(this).data("brand") == brand.val() &&  $(this).data("model") == model.val() && year.val()==null  ){
            $(this).delay(700).fadeIn()
        }else if($(this).data("brand") == brand.val() &&  $(this).data("model") == model.val() && $(this).data("year") == year.val()){
            $(this).delay(700).fadeIn()
            $(this).attr("style", "margin:1rem 0")
        }else if($(this).data("brand") == brand.val() && model.val()==null && $(this).data("year") == year.val()){
            $(this).delay(700).fadeIn()
        }
        else{
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
            year.val("")
            $(this).hide()
        }
    }
    );
    
    hover.each(function(){
        if(brand.val()==$(this).data("brand")){
            $(this).delay(700).fadeIn()
        }else{
            $(this).delay(700).fadeOut()
        }
    })
})

reset.click(function(){
    location.reload();
})

for(let i = 0; i < hover.length; i++){
    let target = Math.floor(Math.random() * hover .length -2) + 2;
    let target2 = Math.floor(Math.random() * hover .length -2) +2;
    hover .eq(target).before(hover .eq(target2));
}

$(window).on('load', function(){
    for(let i = 0; i < hover.length; i++){
        let target = Math.floor(Math.random() * hover .length -2) + 2;
        let target2 = Math.floor(Math.random() * hover .length -2) +2;
        hover .eq(target).before(hover .eq(target2));
    }
});


// hover

const getHoverDirection = function (event) {
    var directions = ['top', 'right', 'bottom', 'left'];
    var item = event.currentTarget;

    var h = item.offsetHeight;
    var x = (event.clientX - item.getBoundingClientRect().left - (w / 2)) * (w > h ? (h / w) : 1);
    var y = (event.clientY - item.getBoundingClientRect().top - (h / 2)) * (h > w ? (w / h) : 1);
    var d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return directions[d];
  };
  
  document.addEventListener('DOMContentLoaded', function (event) {
    var items = document.getElementsByClassName('hover');
    for (var i = 0; i < items.length; i++) {
      ['mouseenter', 'mouseleave'].forEach(function (eventname) {
        items[i].addEventListener(eventname, function (event) {
          var dir = getHoverDirection(event);
          event.currentTarget.classList.remove('mouseenter');
          event.currentTarget.classList.remove('mouseleave');
          event.currentTarget.classList.remove('top');
          event.currentTarget.classList.remove('right');
          event.currentTarget.classList.remove('bottom');
          event.currentTarget.classList.remove('left');
          event.currentTarget.className += ' ' + event.type + ' ' + dir;
        }, false);
      });
    }
  });