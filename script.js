/*
 *  Script com a lógica do cronometro.
 *  Ele possui o esqueleto dos método essenciais.
 *  Modifique este arquivo o quanto for necessário.
 *
 */

// Funcao para atualizar o display do cronometro no html.
// Dica: use do método 'setInterval' para executálo a cada 50 milissegundos.
function updateVisualization(string){  
  // As próximas linhas buscam pelos respectivos espacos de hora, minuto, segundo e milissegundos
  // Basta implementar a lógica e alterar o conteúdo (innerHTML) com os valores
  var hora = document.getElementsByClassName('hora')[0];
  var minuto = document.getElementsByClassName('minuto')[0];
  var segundo = document.getElementsByClassName('segundo')[0];
  var milissegundo = document.getElementsByClassName('milissegundo')[0];

  var h = '0'; 
  var m = '0';
  var s = '0';
  var ms = '0';

  var timer = setInterval(function(string){
 
  

    hora.innerHTML = h < 10 ? '0' + h : h;
    minuto.innerHTML = m < 10 ? '0' + m : m;
    segundo.innerHTML = s < 10 ? '0' + s : s;
    milissegundo.innerHTML = getms(ms);
  

    function getms(string){
      var numero = string;
        if(numero < '10')
          return '00'+ numero;
        else if (numero < '100')  
          return '0' + numero;
        else 
          return numero;
    }
      


    if(ms < 999){    
      ms++;
    }
    else if(s < 59){
      ms = 0;
      s++;
    }
    else if(m < 59){
      ms = 0;
      s = 0;
      m++;
    }
    else if(h < 59){
      ms = 0;
      s = 0;
      m = 0;
      h++;
    }
    else {
      alert('Algo de errado aconteceu!');
    }
  },1);

  
}

  //recebe ID do setInterval para poder pausar
  
  // TODO (continuar implementacao) ...

// Funcao executada quando o botão 'Inicar' é clicado
// - se o cronometro estiver parado, iniciar contagem.
// - se estiver ativo, reiniciar a contagem
function start() {
  updateVisualization();
  // TODO (implementar)
}

// Funcao executada quando o botão 'Parar' é clicado
// - se o cronometro estiver ativo, parar na contagem atual
function stop(timer) {


 clearInterval(timer);
  // TODO (implementar)
}

// Funcao executada quando o botão 'Reiniciar' é clicado
// - se o cronometro estiver ativo, reiniciar contagem
// - se estiver parado, zerar e permanecer zerado
function reiniciar() {

// reiniciar é parar e atualizar o relogio

  // TODO (implementar)
}
