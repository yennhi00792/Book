var next=document.querySelector('.nutchuyen .phai');
    slide = document.querySelectorAll('.slide ul li')
//console.log(next);
//console.log(slide);


var chisohientai=0;
var slslide=slide.length; 
// console.log(slslide);
var trangthai='tamdung';
var moveslideRight= function(){
  //  console.log('đã click');
  if(trangthai=='chuyendong'){return false} 
  trangthai='chuyendong';
  var trangthaicua2cd=0; 
    var pthientai=slide[chisohientai];
    if(chisohientai <slslide-1){
        chisohientai=chisohientai+1;
    }
    else{
        chisohientai=0;
    }
    var pttieptheo=slide[chisohientai];
    // console.log(pthientai);
    // console.log(pttieptheo);
    var ketThucAnSlide = function(){
        console.log('slide hiện tại đã ẩn rồi');
        this.classList.remove('active');
        this.classList.remove('anslideNext');
        trangthaicua2cd ++;
        if(trangthaicua2cd==2){trangthai='tamdung';}
    }
    pthientai.addEventListener('webkitAnimationEnd',ketThucAnSlide);
    var ketThucHienSlide = function(){
        console.log('slide tiếp theo đã hiện ra');
        this.classList.add('active');
        this.classList.remove('hienslideNext');
        trangthaicua2cd ++;
        if(trangthaicua2cd==2){trangthai='tamdung';}
    }
    pttieptheo.addEventListener('webkitAnimationEnd',ketThucHienSlide);


    pthientai.classList.add('anslideNext');
    pttieptheo.classList.add('hienslideNext');
}


//cách next.onclick=function(){
//     moveslideRight();
// }
// cách 2
next.addEventListener('click', moveslideRight);


//bên trái
var pre=document.querySelector('.nutchuyen .trai');
    slide = document.querySelectorAll('.slide ul li')
var chisohientai=0;
var slslide=slide.length; 
var trangthai='tamdung';
var moveslideLeft= function(){
    // console.log('ok');
    if(trangthai=='chuyendong'){return false} 
    trangthai='chuyendong';
    var trangthaicua2cd=0; 
    var pthientai=slide[chisohientai];
    if(chisohientai > 0){
        chisohientai=chisohientai-1;
    }
    else{
        chisohientai= slslide-1;
    }
    var pttieptheo=slide[chisohientai];
    // console.log(pttieptheo);
    var ketThucAnSlide = function(){
        console.log('slide hiện tại đã ẩn rồi');
        this.classList.remove('active');
        this.classList.remove('anslidePre');
        trangthaicua2cd ++;
        if(trangthaicua2cd==2){trangthai='tamdung';}
    }
    pthientai.addEventListener('webkitAnimationEnd',ketThucAnSlide);
    var ketThucHienSlide = function(){
        console.log('slide tiếp theo đã hiện ra');
        this.classList.add('active');
        this.classList.remove('hienslidePre');
        trangthaicua2cd ++;
        if(trangthaicua2cd==2){trangthai='tamdung';}
    }
    pttieptheo.addEventListener('webkitAnimationEnd',ketThucHienSlide);


    pthientai.classList.add('anslidePre');
    pttieptheo.classList.add('hienslidePre');
}

pre.addEventListener('click', moveslideLeft);

autoslide(); ///gọi hàm
function autoslide(){ //xây dựng hàm
    var thoigian = setInterval(function(){
        // console.log('abc');
    var trangthaicua2cd=0; 
    var pthientai=slide[chisohientai];
    if(chisohientai <slslide-1){
        chisohientai=chisohientai+1;
    }
    else{
        chisohientai=0;
    }
    var pttieptheo=slide[chisohientai];
    // console.log(pthientai);
    // console.log(pttieptheo);
    var ketThucAnSlide = function(){
        console.log('slide hiện tại đã ẩn rồi');
        this.classList.remove('active');
        this.classList.remove('anslideNext');
    }
    pthientai.addEventListener('webkitAnimationEnd',ketThucAnSlide);
    var ketThucHienSlide = function(){
        console.log('slide tiếp theo đã hiện ra');
        this.classList.add('active');
        this.classList.remove('hienslideNext');
    }
    pttieptheo.addEventListener('webkitAnimationEnd',ketThucHienSlide);
    pthientai.classList.add('anslideNext');
    pttieptheo.classList.add('hienslideNext');

    },6000);
}
$(window).scroll(function () { 
    if ($(this).scrollTop() > 450) {
        $('.nuttop').addClass('hientop');
    }
    else{
        $('.nuttop').removeClass('hientop');
    }
});
$('.nuttop').click(function (e) { 
    e.preventDefault();
    $('html,body').animate({scrollTop:0},1000);
});
