	
function test(){
if(document.getElementById('psw').value.length < 8)
		alert("le mot de passe doit contenir au moin 8 caractere");
}
	function verifmail(){
              var mails = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
              if(!mails.test(document.getElementById('emails').value)){
               alert("email doit etre sous la forme something@something.something");
                return false;
              }
	


}
