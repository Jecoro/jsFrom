document.addEventListener('DOMContentLoaded', function () {
    const nombre=document.getElementById("nombre");
    const apellidos=document.getElementById("apellidos");

    nombre.addEventListener("focusout", outFocus);
    apellidos.addEventListener("focusout", outFocus);


    function validarTexto(nom,ape){

        function tiene_numeros(texto){
            var numeros="0123456789";
            for(i=0; i<texto.length; i++){
               if (numeros.indexOf(texto.charAt(i),0)!=-1){
                  return 1;
               }
            }
            return 0;
         }
        if(nom.toString().length>0&&ape.toString().length==0){
            
            if(tiene_numeros(nom)==1){
                document.getElementById("errores").innerHTML = "No introduzcas numeros en tu nombre!";
                document.getElementById("nombre").focus();
            }else{
                document.getElementById("errores").innerHTML = "";
            }
        }else{
            if(tiene_numeros(ape)==1){
                document.getElementById("errores").innerHTML = "No introduzcas numeros en tus apellidos!";
                document.getElementById("apellidos").focus();
            }else{
                document.getElementById("errores").innerHTML = "";
            }

        }
    }
    function outFocus(){
        const valorNombre=document.getElementById("nombre").value;
        const valorApellidos=document.getElementById("apellidos").value;
        document.formulario.nombre.value=valorNombre.toString().toUpperCase();
        document.formulario.apellidos.value=valorApellidos.toString().toUpperCase();
        validarTexto(valorNombre,valorApellidos);
    }


    
});
