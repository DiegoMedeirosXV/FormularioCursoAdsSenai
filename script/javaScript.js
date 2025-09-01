function enviarForm() {

    let nome = document.getElementById('nome').value;
    

    let email = document.getElementById('email').value;
    
    let date = document.getElementById('date').value;

    let senha = document.getElementById('senha').value;

    let confirmaSenha = document.getElementById('confirmaSenha').value;

    if (senha.length === 0 || confirmaSenha.length === 0) {
        document.getElementById('senha').classList.add('borda-erro');
        
    }  else{
         if (senha === confirmaSenha) {
        alert('Senha Correta')
        
    }   else{
        alert('Senhas incorretas')
    }
    }



}


