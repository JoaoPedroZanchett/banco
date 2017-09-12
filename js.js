var Banco = function(cabeca, quantidade){
  this.cabeca = cabeca;
  this.quantidadeRoubada = quantidade;
  this.cumplices = [];
  this.addCumplice = function(pessoa){ this.cumplices.push(pessoa); };
  this.saldoBanco = function(){console.log("Quantidade roubada: R$"+this.quantidadeRoubada)};
  this.silenciarCumplice = function(CPF){
    for(var i = 0; i < this.cumplices.length; i++){
      if(this.cumplices[i].cpf == CPF){
        console.log(this.cumplices[i].apelido + " silenciado com sucesso")
        this.cumplices.splice(i, 1);
      }
    }
  }
  this.transferir = function(CPFenviou, CPFrecebeu, quantidade){
    var quemEnviou;
    var quemRecebeu;
    for(var i = 0; i < this.cumplices.length; i++){
      if(this.cumplices[i].cpf == CPFrecebeu){
        quemRecebeu = this.cumplices[i];
      }
      else if(this.cumplices[i].cpf == CPFenviou){
        quemEnviou = this.cumplices[i];
      }
    }
    if(quantidade < quemEnviou.saldo){
      quemRecebeu.saldo += quantidade;
      quemEnviou.saldo -= quantidade;
      console.log(quemEnviou.apelido + " transferiu com sucesso: R$" + quantidade + " para "+quemRecebeu.apelido);
    }
  };
  this.lavarDinheiro = function(CPF, quantidade){
    for(var i = 0; i < this.cumplices.length; i++){
      if(this.cumplices[i].cpf == CPF){
        this.cumplices[i].saldo -= quantidade;
        console.log(this.cumplices[i].apelido + " lavou com sucesso: R$" + quantidade);
      }
    }
  };
  this.depositarNaSuica = function(CPF, quantidade){
    for(var i = 0; i < this.cumplices.length; i++){
      if(this.cumplices[i].cpf == CPF){
        this.cumplices[i].saldo += quantidade;
        console.log(this.cumplices[i].apelido + " depositou com sucesso: R$" + quantidade);
      }
    }
  };
  this.verSaldo = function(CPF){
    for(var i = 0; i < this.cumplices.length; i++){
      if(this.cumplices[i].cpf == CPF){
        console.log("Saldo de " + this.cumplices[i].apelido + ": R$" + this.cumplices[i].saldo);
      }
    }
  }
};
var Cumplice = function(nome, cpf, apelido, valorRecebido){
  this.nome = nome;
  this.cpf = cpf;
  this.apelido = apelido;
  this.saldo = valorRecebido;
}
