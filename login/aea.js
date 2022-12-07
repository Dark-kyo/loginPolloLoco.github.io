// funcion para entrar al sistema //
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function login()
{
var u =  document.getElementById("usuario").value;
var c =  document.getElementById("myInput").value;
i=1;
usr="Alex";
cl="12345";
email="kyoale@gmail.com"
      if (u == usr && c==cl )
       {
            window.location.href = "https://dark-kyo.github.io/polloCocoLoco.github.io/";
            i=4;
       }
       else {
                      document.write('contraseña y usuario incorrecto')
       }
       

}