function Timer() {
  const relogio = document.querySelector('#relogio');
  const iniciar = document.querySelector('#iniciar');
  const pausar = document.querySelector('#pausar');
  const zerar = document.querySelector('#zerar');

  let timer = 0; // tempo em ms
  let estaIniciado = true
  let naoDuplicar = true
  let zerarNoBreak = false

  function atualizarDisplay() {
    relogio.innerHTML = formatarTempo(timer);
  }

  iniciar.addEventListener('click', () => {
      if (!naoDuplicar) return;
      naoDuplicar = false
      
      relogio.style.color = 'black';
      intervalId = setInterval(() => {
        if (estaIniciado) {
            timer += 100;
            atualizarDisplay();
        }
      }, 1);
  });

  pausar.addEventListener('click', () => {
    if (timer !== 0){
        estaIniciado = !estaIniciado

        if (relogio.style.color == 'black'){
            relogio.style.color = 'Red'
        }else{
            relogio.style.color = 'Black'
        }
    }
  })

  zerar.addEventListener('click', () => {
    relogio.style.color = 'Black'
    naoDuplicar = true
    estaIniciado = true
    timer = 0
    relogio.innerHTML = formatarTempo(timer);
    clearInterval(intervalId)
  })

  atualizarDisplay(); // mostra 00:00:00 ao carregar
}

Timer();

function formatarTempo(ms) {
  const totalSegundos = Math.floor(ms / 1000);
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const segundos = totalSegundos % 60;

  return `${String(horas).padStart(2, '0')}: ${String(minutos).padStart(2, '0')}: ${String(segundos).padStart(2, '0')}`;
}
