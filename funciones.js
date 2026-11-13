
let micolor=document.getElementById("color");
const botonBorrar=document.getElementById("borrar");
const nombre=document.getElementById("nombre");


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
})



// recuperar los datos

function recuperarDatos(){
    let micolor=localStorage.getItem("colorFondoUnad") ?? "pink"
    document.getElementById("fondo").style.backgroundColor=micolor;
    
    let nom=localStorage.getItem("nombreUnad") ?? "" ;
    if(nombre!=""){
        document.getElementById("nombre").style.display="none";
        document.getElementById("n").innerText="Bienvenido "+nom;
    }

}

// capturar lo digitado
nombre.addEventListener("keydown",(e)=>{
    console.log(e.key);
    if(e.key==="Enter"){
        localStorage.setItem("nombreUnad",nombre.value);
    }
})



recuperarDatos();