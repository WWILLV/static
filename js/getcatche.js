window.onload=function(){
    var h="<img id='imgsrc' src='' style='object-fit: cover;'></img>"
    fetch('https://dynamic.willv.workers.dev/').then((response)=>{
        document.getElementById("imgsrc").setAttribute("src",response.text());
       });
    document.getElementById("catche").innerHTML=h;
    document.getElementById("last").innerText="2023-03-15";
}