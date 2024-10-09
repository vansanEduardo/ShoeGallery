// Elementos

const nextBtn = document.querySelector("#next");
const backBtn = document.querySelector("#back");
const shoes = document.querySelector("#main-shoes");
const items = document.querySelectorAll(".item");
const containerItems = document.querySelector(".items");
const body = document.body;
const shoesName = document.querySelector("#name");
const value = document.querySelector(".value h3");
const content = document.querySelector(".content");
const sizes = document.querySelectorAll(".sizes ul li");
const openMenu = document.querySelector("#open-modal");
const closeMenu = document.querySelector("#close-modal");

let i = 0;

// Dados dos Tenis
const shoesArray = [
  {
    src: "img/tenis0.png",
    backgroundColor: "#739fcb",
    content: "Nike Air Jordan V  Retrô",
    value: "R$2.799,90",
  },
  {
    src: "img/tenis1.png",
    backgroundColor: "#C74950",
    content: "Nike Lebron XII Red Paisley",
    value: "R$1.500,00",
  },
  {
    src: "img/tenis2.png",
    backgroundColor: "#3D3D3D",
    content: "Nike Air Yeezy 2 ",
    value: "R$2.836,71",
  },
  {
    src: "img/tenis3.png",
    backgroundColor: "#B7814B",
    content: "Nike Air Yeezy 1",
    value: "R$1.400.00",
  },
  {
    src: "img/tenis4.png",
    backgroundColor: "#99B1C5",
    content: "Nike Jordan 1 Retro High Off-White",
    value: "R$1.999,99",
  },
  {
    src: "img/tenis5.png",
    backgroundColor: "#96999A",
    content: "Nike Air Jordan 4 ",
    value: "R$600,00",
  },
];

// Botão de Proximo
nextBtn.addEventListener("click", () => {
  i >= shoesArray.length - 1 ? (i = 0) : i++;
  updateData("next");
});

// Botão de Voltar
backBtn.addEventListener("click", () => {
  i === 0 ? (i = shoesArray.length - 1) : i--;
  updateData("back");
});

// Atualizar os dados da pagina
function updateData(type) {
  shoes.src = shoesArray[i].src;
  body.style.backgroundColor = shoesArray[i].backgroundColor;
  shoesName.innerHTML = shoesArray[i].content;
  value.innerHTML = shoesArray[i].value;

  // Aplicar a animaçãp de prox e voltar
  if (type) {
    switch (type) {
      case "next":
        animate = "show";
        break;
      case "back":
        animate = "show-back";
        break;
      case Number:
        i = Number;
        break;
    }
    shoes.classList.add(animate);
    content.classList.add("blur");
    setTimeout(() => {
      shoes.classList.remove(animate);
      content.classList.remove("blur");
    }, 500);
  }

  items.forEach((items, indice) => {
    items.querySelector("img").src =
      shoesArray[(indice + i) % shoesArray.length].src;
  });
}

// ao clicar no item exibe os dados dele na pagina
items.forEach((item, index) => {
  item.addEventListener("click", () => {
    i = (i + index) % shoesArray.length;
    updateData("next");
  });
});

// selecionar o tamanho
sizes.forEach((size) => {
  size.addEventListener("click", () => {
    sizes.forEach((s) => {
      s.classList.remove("select");
    });

    size.classList.add("select");
  });
});

// abrir menu

openMenu.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
});

// fechar menu
closeMenu.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});
