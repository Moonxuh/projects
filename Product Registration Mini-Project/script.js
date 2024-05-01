

class Produto {
    constructor () {
        this.id = 1;
    }
    Adicionar () {
        let produto = this.LerDados() 
    }
    LerDados(){
        let produto ={}
        
        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome')
        produto.nomeProduto = document.getElementById('pdpreco')

        return produto
    }  
}

var produto = new Produto()
