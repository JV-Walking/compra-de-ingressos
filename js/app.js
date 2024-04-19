function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista') {
        comprarIngresso(quantidade, 'pista')

       } if (tipo.value == 'superior') {
        comprarIngresso(quantidade, 'superior');

       } if (tipo.value == 'inferior') {
        comprarIngresso(quantidade, 'inferior');
       }
}

function comprarIngresso(quantidade, setor) {
    let qtdSetor = parseInt(document.getElementById(`qtd-${setor}`).textContent);

    if(quantidade <=0) {
        alert('Digite um número válido');

    } else {
        if(quantidade > qtdSetor) {
            alert('Quantidade indisponível');
        } else {
            qtdSetor = qtdSetor - quantidade;
            document.getElementById(`qtd-${setor}`).textContent = qtdSetor;
            alert('Compra realizada com sucesso');
    
        }
    }
}