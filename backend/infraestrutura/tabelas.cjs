class Tabelas {
    init(conexao){
      this.conexao = conexao;
      this.criarTabelaProdutos();
    }

    criarTabelaProdutos(){
      const sql =
       `
        CREATE TABLE IF NOT EXISTS produtos(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(50),
        descricao VARCHAR(200),
        preco FLOAT,
        DATA DATE
        );
       `;
       this.conexao.query(sql, (error) => {
        if(error){
           console.log("Eita deu erro.")
           console.log(error.message);
           return;
        }
        console.log("show criou a tabela")
       });
    }
}

module.exports = new Tabelas();