const fotos = ['foto-01.jpeg', 'foto-02.jpeg', 'foto-03.jpeg', 'foto-04.jpeg', 'foto-05.jpeg', 'foto-06.jpeg', 'foto-07.jpeg', 'foto-08.jpeg', 'foto-09.jpeg', 'foto-10.jpeg', 'foto-11.jpeg', 'foto-12.jpeg', 'foto-13.jpeg', 'foto-14.jpeg', 'foto-15.jpeg', 'foto-16.jpeg', 'foto-17.jpeg', 'foto-18.jpeg', 'foto-19.jpeg', 'foto-20.jpeg', 'foto-21.jpeg', 'foto-22.jpeg', 'foto-23.jpeg', 'foto-24.jpeg', 'foto-25.jpeg', 'foto-26.jpeg', 'foto-27.jpeg', 'foto-28.jpeg', 'foto-29.jpeg', 'foto-30.jpeg', 'foto-31.jpeg', 'foto-32.jpeg', 'foto-33.jpeg', 'foto-34.jpeg', 'foto-35.jpeg', 'foto-36.jpeg', 'foto-37.jpeg', 'foto-38.jpeg', 'foto-39.jpeg', 'foto-40.jpeg', 'foto-41.jpeg', 'foto-42.jpeg', 'foto-43.jpeg', 'foto-44.jpeg'];

const frases = ['Pai, obrigado por ser...', 'Forte', 'responsável', 'Habilidoso', 'Cuidadoso', 'Bonito', 'Inteligente', 'Respeitoso', 'Conselheiro', 'Líder', 'Engraçado', 'Protetor', 'Guerreiro', 'Imponente', 'Pilar', 'Dedicado', 'Companheiro', 'Ídolo', 'Referência', 'Corajoso', 'Elegante', 'Músico', 'Charmoso', 'Confiável', 'Estiloso', 'Amoroso', 'Invencível', 'Completo', 'Único', 'Presente', 'Invejável', 'Campeão', 'Resistente', 'Exemplar', 'Temido', 'Bem aventurado', 'Merecedor', 'Herói', 'gênio', 'Professor', 'Amigo...', 'Meu melhor amigo', 'Um Pai...', 'O melhor Pai'];

let indice = 0;
let trocando = false;

const slideshow = document.getElementById("slideshow");
const foto = document.getElementById("foto");
const frase = document.getElementById("frase");
const final = document.getElementById("final");

function atualizarConteudo() {
  foto.src = "fotos/" + fotos[indice];
  frase.textContent = frases[indice];
}

slideshow.addEventListener("click", () => {
  if (trocando) return;

  trocando = true;
  slideshow.classList.add("saindo");

  setTimeout(() => {
    indice++;

    // Depois da 44ª foto, mostra a tela final.
    if (indice >= fotos.length) {
      slideshow.style.display = "none";
      final.classList.add("ativo");
      return;
    }

    atualizarConteudo();

    // Pequeno intervalo para garantir o efeito de entrada.
    requestAnimationFrame(() => {
      slideshow.classList.remove("saindo");

      setTimeout(() => {
        trocando = false;
      }, 700);
    });
  }, 700);
});
