// import Vue from 'vue'

window.onload = window.onresize =  function(){

    var deviceW =  document.documentElement.clientWidth;

    if(deviceW >750){
       document.documentElement.style.fontSize  = 100 +"px";
    }else{
        //设置 根元素 的 font-size
       document.documentElement.style.fontSize = deviceW/750  * 100 + "px";

     }
}

