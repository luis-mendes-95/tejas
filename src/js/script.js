function gerardocconfec() {

    const cardconfec = document.getElementById("descricaopersonalizacao")
    //procura no documento html um elemento com esse ID//
    
    cardconfec.innerHTML = "";
    //o comando acima seta que tudo dentro do HTML de cardconfec esta vazio

    const tituloconfec = document.createElement("h4");
    //Procura o documento HTML e cria um elemento nele//

    tituloconfec.innerText = "CONFECÇÃO E ESTAMPARIA";
    //O comando acima seta que dentro do h4 criado.

    // tituloconfec.classList.add("importante"); //
    //codigo acima adiciona uma classe para uma tag do html.

    const listaconfec = ["Camisetas Básicas","Camisetas Raglan","Camisas Polo","Mangas Curtas & Compridas",
                                "Pedido mínimo de 10 peças","Variedade de malhas","Personalize como quiser"];
    //comando acima armazenou vários valores em uma array vinculada a variável listaconfec.

    const ul = document.createElement("ul");

    for (let contador = 0; contador < listaconfec.length; contador = contador + 1) {
        //comando acima criou um contador de 0 até o último item da array. 
        //abaixo a continuação para que seja mostrado na tela

        const li = document.createElement("li");
        //procurou o documento html e criou um elemento "li"

        li.innerText = listaconfec[contador];
        //setou o texto interior da li para exibir a informação armazenada na variável contador

        ul.append(li);
        //colocou a variável li dentro da ul.
    }

    cardconfec.append(tituloconfec,ul);

}
function gerardocgraf() {
    
    const cardgraf = document.getElementById("descricaopersonalizacao")
    //procura no documento html um elemento com esse ID//
    
    cardgraf.innerHTML = "";
    //o comando acima seta que tudo dentro do HTML de cardconfec esta vazio

    const titulograf = document.createElement("h4");
    //Procura o documento HTML e cria um elemento nele//

    titulograf.innerText = "GRÁFICA";
    //O comando acima seta que dentro do h4 criado.

    // tituloconfec.classList.add("importante"); //
    //codigo acima adiciona uma classe para uma tag do html.

    const listagraf = ["Cartões de Visita","Panfletos","Imãs de Geladeira","Marca-páginas",
                                "Cardápios","Materiais de escritório"];
    //comando acima armazenou vários valores em uma array vinculada a variável listaconfec.

    const ul = document.createElement("ul");

    for (let contador = 0; contador < listagraf.length; contador = contador + 1) {
        //comando acima criou um contador de 0 até o último item da array. 
        //abaixo a continuação para que seja mostrado na tela

        const li = document.createElement("li");
        //procurou o documento html e criou um elemento "li"

        li.innerText = listagraf[contador];
        //setou o texto interior da li para exibir a informação armazenada na variável contador

        ul.append(li);
        //colocou a variável li dentro da ul.
    }

    cardgraf.append(titulograf,ul);
    
}
function gerardoccom(){
    const cardcom = document.getElementById("descricaopersonalizacao")
    //procura no documento html um elemento com esse ID//
    
    cardcom.innerHTML = "";
    //o comando acima seta que tudo dentro do HTML de cardconfec esta vazio

    const titulocom = document.createElement("h4");
    //Procura o documento HTML e cria um elemento nele//

    titulocom.innerText = "COMUNICAÇÃO VISUAL";
    //O comando acima seta que dentro do h4 criado.

    // tituloconfec.classList.add("importante"); //
    //codigo acima adiciona uma classe para uma tag do html.

    const listacom = ["Windbanners","Lonas","Adesivos","Faixas em tecido",
                                "Banners","Placas","Chapas Adesivadas"];
    //comando acima armazenou vários valores em uma array vinculada a variável listaconfec.

    const ul = document.createElement("ul");

    for (let contador = 0; contador < listacom.length; contador = contador + 1) {
        //comando acima criou um contador de 0 até o último item da array. 
        //abaixo a continuação para que seja mostrado na tela

        const li = document.createElement("li");
        //procurou o documento html e criou um elemento "li"

        li.innerText = listacom[contador];
        //setou o texto interior da li para exibir a informação armazenada na variável contador

        ul.append(li);
        //colocou a variável li dentro da ul.
    }

    cardcom.append(titulocom,ul);
}
function gerardociddig(){
    const cardiddig = document.getElementById("descricaopersonalizacao")
    //procura no documento html um elemento com esse ID//
    
    cardiddig.innerHTML = "";
    //o comando acima seta que tudo dentro do HTML de cardconfec esta vazio

    const tituloiddig = document.createElement("h4");
    //Procura o documento HTML e cria um elemento nele//

    tituloiddig.innerText = "IDENTIDADE DIGITAL";
    //O comando acima seta que dentro do h4 criado.

    // tituloconfec.classList.add("importante"); //
    //codigo acima adiciona uma classe para uma tag do html.

    const listaiddig = ["Desenvolvimento de Logotipo","Design de layouts","Artes para cartões digitais","Banner digital","Cardápios Digitais"];
    //comando acima armazenou vários valores em uma array vinculada a variável listaconfec.

    const ul = document.createElement("ul");

    for (let contador = 0; contador < listaiddig.length; contador = contador + 1) {
        //comando acima criou um contador de 0 até o último item da array. 
        //abaixo a continuação para que seja mostrado na tela

        const li = document.createElement("li");
        //procurou o documento html e criou um elemento "li"

        li.innerText = listaiddig[contador];
        //setou o texto interior da li para exibir a informação armazenada na variável contador

        ul.append(li);
        //colocou a variável li dentro da ul.
    }

    cardiddig.append(tituloiddig,ul);
}
function clickbotao1() {
    const botao1 = document.getElementById("botao1");
    botao1.addEventListener("click", gerardocconfec);
}
function clickbotao2() {
    const botao2 = document.getElementById("botao2");
    botao2.addEventListener("click", gerardocgraf);
}
function clickbotao3(){
    const botao3 = document.getElementById("botao3");
    botao3.addEventListener("click", gerardoccom);
}
function clickbotao4(){
    const botao4 = document.getElementById("botao4");
    botao4.addEventListener("click", gerardociddig);
}
function botmenu1() {
    const botao1 = document.getElementById("botmenu1");
    botao1.addEventListener("click", gerardocconfec);
}
function botmenu2() {
    const botao2 = document.getElementById("botmenu2");
    botao2.addEventListener("click", gerardocgraf);
}
function botmenu3(){
    const botao3 = document.getElementById("botmenu3");
    botao3.addEventListener("click", gerardoccom);
}
function botmenu4(){
    const botao4 = document.getElementById("botmenu4");
    botao4.addEventListener("click", gerardociddig);
}
clickbotao1();
clickbotao2();
clickbotao3();
clickbotao4();
botmenu1();
botmenu2();
botmenu3();
botmenu4();