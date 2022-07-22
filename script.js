let bool_modo_not = false;
let root = document.documentElement;

function trocar_modo() {
    if (bool_modo_not) { modo_claro();   }
    else               { modo_noturno(); }
}

function modo_claro() {
    root.style.setProperty("--cor-principal", "#14db8f");
    root.style.setProperty("--cor-principal-inv", "#fc7c25");
    root.style.setProperty("--cor-fundo", "#ffffff");
    root.style.setProperty("--cor-texto", "#000000");
    root.style.setProperty("--cor-destaque", "#0efa78");
    document.querySelector('img[name="github"]').src ="https://cdn-icons-png.flaticon.com/512/25/25231.png";
    document.getElementById("modo").innerHTML = "Modo noturno"
    bool_modo_not = false;
}

function modo_noturno() {
    root.style.setProperty("--cor-principal", "#fc7c25");
    root.style.setProperty("--cor-principal-inv", "#14db8f");
    root.style.setProperty("--cor-fundo", "#221212");
    root.style.setProperty("--cor-texto", "#ffffff");
    root.style.setProperty("--cor-destaque", "#fa450e");
    document.querySelector('img[name="github"]').src ="https://go.weave.works/rs/249-YDT-025/images/github_icon_white.png";
    document.getElementById("modo").innerHTML = "Modo claro"
    bool_modo_not = true;
}