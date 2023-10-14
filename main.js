function Pessoa(nome, sobrenome, usuario, cidade, endereco, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.usuario = usuario;
    this.cidade = cidade;
    this.endereco = endereco;
    this.idade = idade;
    this.dizOi = function(){
		console.log(this.nome + "diz olá !!!");
	}
}

function Funcionario(nome, sobrenome, cargo, salario,){
    this.cargo = cargo;
    this.salario = salario;
    Pessoa.call(this, nome, sobrenome);
    this.dizCargo = function(){
		console.log(this.cargo);
	}

	this.dizSalario = function(){
		console.log(this.salario);
	}
}

function Facebook(nome, sobrenome, usuario, telefone, idade, cidade, endereco){
    this.telefone = telefone;
    Pessoa.call(this, nome, sobrenome, idade, usuario, cidade, endereco);

    this.dizUsuario = function(){
		console.log(this.usuario);
	}
}

const pessoa1 = new Pessoa("João Victor", "Mazetti Borges", "jvmazetti", "Lutécia", "Rua Santo Antônio, 755", 25);
const funcionario1 = new Funcionario("João Victor", "Mazetti Borges", "programador", 2500);
const facebook = new Facebook("João Victor", "Mazetti Borges", "jvmazetti", "(18)99793-7963", 25, "Lutécia", "Rua Santo Antônio, 755", 2500);

pessoa1.dizOi();
funcionario1.dizCargo();
funcionario1.dizSalario();
facebook.dizUsuario();

