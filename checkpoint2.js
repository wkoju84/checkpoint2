

function Aluno(nome,notas,faltas){
    this.nome = nome;
    this.notas = notas;
    this.faltas = faltas;

    this.calcularMedia = function(){

      let somaNota = 0;

      for(let i = 0; i < this.notas.length; i++){
        somaNota = somaNota + this.notas[i];
      }
      return somaNota / this.notas.length;
    }

    this.addFaltas = function (){
      return this.faltas++;
    }
   
};

let aluno1 = new Aluno("Marvonildo", [9,8,9,7], 2);
let aluno2 = new Aluno("Orestes", [7,8,9,7], 3);
let aluno3 = new Aluno("Glaucya", [9,8,8,7], 6);
let aluno4 = new Aluno("Alex", [7,8,9,6], 6);
let aluno5 = new Aluno("Fábio", [7,8,8,7], 0);
let aluno6 = new Aluno("Milton", [7,8,7,7], 1);
let aluno7 = new Aluno("Pâmela", [9,6,9,7], 0);
let aluno8 = new Aluno("Isabel", [7,8,6,7], 1);
let aluno9 = new Aluno("Michel", [8,8,9,7], 2);
let aluno10 = new Aluno("Valéria", [7,8,7,7], 1);

console.log(aluno1.calcularMedia());
console.log(aluno1.addFaltas());

let alunos = [aluno1, aluno2, aluno3, aluno4, aluno5, aluno6, aluno7, aluno8, aluno9, aluno10];

let curso = {
  nomeCurso: "Programação Imperativa",
  notaDeAprovação: 7,
  faltasMaximas: 5,
  estudantes: alunos,

  criarAluno: function(nome, notas, faltas){
    alunos.push(new Aluno(nome, notas, faltas));
    return this;
  },

  avaliarAluno: function(nome){
    let porcentagem = ((this.notaDeAprovação * 10) / 100)
    if((nome.calcularMedia() >= this.notaDeAprovação) && (nome.addFaltas() < this.faltasMaximas)){
      return true;
    }else if((nome.calcularMedia() > this.notaDeAprovação + porcentagem) && (nome.addFaltas() == this.faltasMaximas)){
      return true;
    }
    return false;
  },

  resultadoAluno: function(){
    let resultado = [];
    for(let i = 0; i < this.estudantes.length; i++){
      let aluno = this.estudantes[i].nome;
      resultado.push(aluno);
      resultado.push(this.avaliarAluno(this.estudantes[i]));
    }

    return resultado;
  }
}

curso.criarAluno("William", [6, 7, 8, 9], 5);
curso.criarAluno("Yasmin", [9, 9, 8, 9], 3);

console.log(curso.avaliarAluno(aluno1));

console.log(curso.resultadoAluno());
