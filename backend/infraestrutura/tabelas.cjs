class Tabelas {
    init(conexao){
      this.conexao = conexao;
      this.criarTbelaAtendimnentos();
    }

    criarTbelaAtendimnentos(){
      const sql =
       `
        CREATE TABLE IF NOT EXISTS atendimentos(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        DATA DATE,
        servico VARCHAR(100),
        cliente VARCHAR(100),
        STATUS ENUM("ativo", "realizado", "cancelado") DEFAULT "ativo"
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