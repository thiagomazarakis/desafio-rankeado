/* Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"*/

qvitorias(100,21)
nivelH =""

    function qvitorias(vitorias, derrotas){
       
        resultado = vitorias - derrotas
        return resultado
}

    if (resultado < 10){

        nivelH = "Ferro"
        
    }else if (resultado >= 10 &&  resultado <= 20){
   
        nivelH = "Bronze"
      
   }else if (resultado >= 21 &&  resultado <= 50){
      
        nivelH = "Prata"
        
   }else if (resultado>= 51 &&  resultado <= 80){
   
        nivelH = "Ouro"
        
   }else if (resultado >= 81 &&  resultado <= 90){
   
       nivelH = "Diamante"
       
   }else if (resultado >= 91 &&  resultado <= 100){
   
      nivelH = "Lendario"
    
   }else if (resultado >= 101){
   
     nivelH = "Imortal"
     
   } 
   console.log("O Héroi tem saldo " + resultado + " está no nível de " + nivelH)


  