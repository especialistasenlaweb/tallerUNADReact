
let micolor=document.getElementById("color");
const botonBorrar=document.getElementById("borrar");
const nombre=document.getElementById("nombre");
const ventana=document.getElementById("ventana");
let arrastrar=false;
let distanciaX,distanciaY;

// si se presiona en la ventana
ventana.addEventListener('mousedown',(e)=>{
    arrastrar=true;
    distanciaX=e.clientX-ventana.offsetLeft;
    distanciaY=e.clientY-ventana.offsetTop;
    ventana.style.cursor='grabbing';
});

ventana.addEventListener('mouseup',()=>{
    arrastrar=false;
    ventana.style.cursor='grab';
});

ventana.addEventListener('mousemove',(e)=>{
    if(!arrastrar) return;

    ventana.style.left=e.clientX-distanciaX+"px";
    ventana.style.top=e.clientY-distanciaY+"px";
});



micolor.addEventListener("input",()=>{
    let elcolor=document.getElementById("color").value;
    document.getElementById("fondo").style.backgroundColor=elcolor;
    // guardar en local preferencia del color
    localStorage.setItem("colorFondoUnad",elcolor);
});
// borrar localStorage
botonBorrar.addEventListener("click",()=>{
    localStorage.clear();
    document.getElementById("fondo").style.backgroundColor="#222";
    document.getElementById("nombre").style.display="block";
        document.getElementById("n").innerHTML='';

})



// recuperar los datos

function recuperarDatos(){
    let micolor=localStorage.getItem("colorFondoUnad") ?? "pink"
    document.getElementById("fondo").style.backgroundColor=micolor;
    
    let nom=localStorage.getItem("nombreUnad") ?? null;
   
    if(nom){
        document.getElementById("n").innerHTML=nom;
        document.getElementById("nombre").style.display="none";
    }else{
        document.getElementById("nombre").style.display="block";
    }
   
}

// capturar lo digitado
nombre.addEventListener("keydown",(e)=>{
    console.log(e.key);
    if(e.key==="Enter"){
        localStorage.setItem("nombreUnad",nombre.value);
        document.getElementById("n").innerHTML=nombre.value;
        document.getElementById("nombre").style.display="none";
    }
})



recuperarDatos();