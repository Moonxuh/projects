

class Produto {
    constructor () {
        this.id = 1;
        this.arrayProdutos= [];
    }
    Adicionar () {
        let produto = this.LerDados() 
        console.log(produto)
        if (this.Validar(produto)== true){
            this.Salvar(produto)
        }
        this.listar()
    }
    LerDados(){
        let produto ={}
        
        produto.id = this.id
        produto.nomeProduto = document.getElementById('pdnome')
        produto.nomeProduto = document.getElementById('pdpreco')

        return produto
    }  
    Validar(produto) {
        let msg = '';
    
        if (produto.nomeProduto == '') {
            msg += 'Por favor, insira corretamente o nome do produto! \n'
        } 
        if (produto.precoProduto == '') {
            msg += 'Por favor, insira corretamente o preço do produto! \n'
        }
        if (msg != ''){
            alert(msg)
            return false
        }
        return true
    }
    Salvar(produto) {
        this.arrayProdutos.push(produto)
        this.id++;
    }
    Listar(){
        let tbody = document.getElementById(tbody)
        tbody.innerText = ''
        
        for(let i = 0; i < this.arrayProdutos.lenght; i++ ) {

            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_del = tr.insertCell();

            this.id.innerText = this.arrayProdutos[i].id;
            this.nome.innerText = this.arrayProdutos[i].nomeProduto;
            this.preco.innerText = this.arrayProdutos[i].precoProduto;
            this.del.innerText = this.arrayProdutos[i].del;

        }
    }
}

var produto = new Produto()