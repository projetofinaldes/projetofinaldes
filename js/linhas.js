
const linhasOnibus = [
    {
        codigo: "303",
        nome: "CENTENÁRIO / CAMPO COMPRIDO",
        tipoOnibus: "Biarticulado",
        cnhExigida: ["E"],
        treinamentos: ["Corredor BRT"],
        status: "com-furo",
        origem: "cadastro atual do projeto"
    },
    {
        codigo: "203",
        nome: "SANTA CÂNDIDA / CAPÃO RASO",
        tipoOnibus: "Biarticulado",
        cnhExigida: ["E"],
        treinamentos: ["Corredor BRT"],
        status: "ok",
        origem: "cadastro atual do projeto"
    },
    {
        codigo: "020",
        nome: "INTERBAIRROS II (HORÁRIO)",
        tipoOnibus: "Articulado",
        cnhExigida: ["E"],
        treinamentos: ["Direção Defensiva Urbana"],
        status: "com-furo",
        origem: "cadastro atual do projeto"
    },
    {
        codigo: "502",
        nome: "CIRCULAR SUL (HORÁRIO)",
        tipoOnibus: "Articulado",
        cnhExigida: ["D", "E"],
        treinamentos: ["Estação Tubo"],
        status: "com-furo",
        origem: "cadastro atual do projeto"
    }
];

    // Função para buscar uma linha pelo código
    function buscarLinha(codigo) {
        return linhasOnibus.find(function (linha) {
        return linha.codigo === codigo;
   });
}

    function listarLinhasComFuro() {
        return linhasOnibus.filter(function (linha) {
        return linha.status === "com-furo";
    });
}

    function listarLinhas() {
        return linhasOnibus;
}