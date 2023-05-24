function showAlert() {
        let name = prompt ("Por favor, ingresa tu nombre:");
            if (name != "") { 
                alert (" Hola " + name +" Bienvenido. " );
            } else {
               alert ("No escibistes ningun nombre." ); }
                
            } 
            
            document.querySelector("button.button-menu-toggle")
            .addEventListener("click", function() {
                   document.querySelector(".nav-links").
                              classList.toggle("nav-links-responsive")})
