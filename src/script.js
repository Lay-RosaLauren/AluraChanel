//Lista de itens

var itemBolsas = [
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_346/FSH-1627054892568-21kplpbagsd03.jpg",
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_342/FSH-1627029597826-21kplpbagsd04.jpg",
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_346/FSH-1627029642233-21kplpbagsd08.jpg"
];

var itemRelogios = [
  "https://img-cdn.chanelwebservices.com/1619597751818-img049081176jpg_max_md_sm.jpg",
  "https://www.chanel.com/wfj/product/medias/relogio-code-coco-electro/H6822-default-0-1540-grey-nocrop-1619413466833.jpg",
  "https://www.chanel.com/wfj/product/medias/relogio-boy-friend-electro/H7029-default-0-1540-grey-nocrop-1620277345047.jpg"
];

var itemOculos = [
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_400/square-sunglasses-gold-metal-imitation-pearls-metal-imitation-pearls-packshot-default-a71285x08223l9515-8831677431838.jpg",
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_400/round-sunglasses-pink-gold-metal-imitation-pearls-metal-imitation-pearls-packshot-default-a71253x08223l1171-8831679365150.jpg",
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_400/pantos-sunglasses-dark-tortoise-acetate-acetate-packshot-default-a71406x08101s7143-8837398724638.jpg"
];

var itemBijoux = [
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_462/FSH-1627056668642-21kplpcjd06.jpg",
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_346/FSH-1627056721973-21kplpcjd14.jpg",
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_346/FSH-1627056732826-21kplpcjd16.jpg"
];

var itemSapatos = [
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_346/FSH-1626962573676-21kplpshoesd02.jpg",
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_468/FSH-1627056241495-21kplpshoesd03.jpg",
  "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_468/FSH-1626962587294-21kplpshoesd05.jpg"
];

//fim Lista de itens

//Lista de Identifica????o

var oneBolsas = ["Bolsa Bucket Mini", "Bolsa Mini", "Bolsa Cl??ssica"];

var oneRelogios = [
  "REL??GIO PREMI??RE ELECTRO",
  "REL??GIO CODE COCO ELECTRO",
  "REL??GIO BOY??FRIEND ELECTRO"
];

var oneOculos = [
  "??culos de Sol Quadrado",
  "??culos de Sol Redondos ",
  "??culos De Sol Pantos"
];

var oneBijoux = ["Gargantilha", "Colar Longo", "Bracelete"];

var oneSapatos = ["Botas-Couro", "Botas-Couro Carneiro", "Sand??lias-Gorgur??o"];

//fim Lista de Identifica????o

//Itera????o

var escolha = prompt(
  "Na AluraCHaNeL, seu cat??logo ?? Fashion! \n Selecione o g??nero desejado pelo n??mero indicado: \n 1  Bolsas \n 2  Rel??gios \n 3  ??culos \n 4  Bijoux \n 5  Sapatos \n  6 Todas Op????es"
);

if (escolha == 1) {
  document.write("<h2>" + "Bolsas" + "</h2>", "<div class='container'>");
  for (var i = 0; i < itemBolsas.length; i++) {
    document.write(
      "<div class='item'>",
      "<img src=" + itemBolsas[i] + ">",
      "<p>" + oneBolsas[i] + "</p>",
      "</div>"
    );
  }
  document.write("</div>");
} else if (escolha == 2) {
  document.write("<h2>" + "Rel??gios" + "</h2>", "<div class='container'>");
  for (var i = 0; i < itemRelogios.length; i++) {
    document.write(
      "<div class='item'>",
      "<img src=" + itemRelogios[i] + ">",
      "<p>" + oneRelogios[i] + "</p>",
      "</div>"
    );
  }
  document.write("</div>");
} else if (escolha == 3) {
  document.write("<h2>" + "??culos" + "</h2>", "<div class='container'>");
  for (var i = 0; i < itemOculos.length; i++) {
    document.write(
      "<div class='item'>",
      "<img src=" + itemOculos[i] + ">",
      "<p>" + oneOculos[i] + "</p>",
      "</div>"
    );
  }
  document.write("</div>");
} else if (escolha == 4) {
  document.write("<h2>" + "Bijoux" + "</h2>", "<div class='container'>");
  for (var i = 0; i < itemBijoux.length; i++) {
    document.write(
      "<div class='item'>",
      "<img src=" + itemBijoux[i] + ">",
      "<p>" + oneBijoux[i] + "</p>",
      "</div>"
    );
  }
  document.write("</div>");
} else if (escolha == 5) {
  document.write("<h2>" + "Sapatos" + "</h2>", "<div class='container'>");
  for (var i = 0; i < itemSapatos.length; i++) {
    document.write(
      "<div class='item'>",
      "<img src=" + itemSapatos[i] + ">",
      "<p>" + oneSapatos[i] + "</p>",
      "</div>"
    );
  }
  document.write("</div>");
} else if (escolha == 6) {
  document.write("<h2>" + "Todas Op????es" + "</h2>", "<div class='container'>");
  for (var i = 0; i < itemBolsas.length; i++) {
    document.write(
      "<div class='item'>",
      "<img src=" + itemBolsas[i] + ">",
      "<p>" + oneBolsas[i] + "</p>",
      "</div>"
    );
  }
  for (var i = 0; i < itemRelogios.length; i++) {
    document.write(
      "<div class='item'>",
      "<img src=" + itemRelogios[i] + ">",
      "<p>" + oneRelogios[i] + "</p>",
      "</div>"
    );
  }
  for (var i = 0; i < itemOculos.length; i++) {
    document.write(
      "<div class='item'>",
      "<img src=" + itemOculos[i] + ">",
      "<p>" + oneOculos[i] + "</p>",
      "</div>"
    );
  }
  for (var i = 0; i < itemBijoux.length; i++) {
    document.write(
      "<div class='item'>",
      "<img src=" + itemBijoux[i] + ">",
      "<p>" + oneBijoux[i] + "</p>",
      "</div>"
    );
  }
  for (var i = 0; i < itemSapatos.length; i++) {
    document.write(
      "<div class='item'>",
      "<img src=" + itemSapatos[i] + ">",
      "<p>" + oneSapatos[i] + "</p>",
      "</div>"
    );
  }
  document.write("</div>");
}

//fim Itera????o
