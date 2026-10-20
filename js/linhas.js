
const linhasOnibus = [
    {
        codigo: "303",
        nome: "CENTENÁRIO / CAMPO COMPRIDO",
        tipoOnibus: "Biarticulado",
        cnhExigida: ["E"],
        treinamentos: ["Corredor BRT"],
        status: "com-furo",
        operadora: "A confirmar"
    },
    {
        codigo: "203",
        nome: "SANTA CÂNDIDA / CAPÃO RASO",
        tipoOnibus: "Biarticulado",
        cnhExigida: ["E"],
        treinamentos: ["Corredor BRT"],
        status: "ok",
        operadora: "A confirmar"
    },
    {
        codigo: "020",
        nome: "INTERBAIRROS II (HORÁRIO)",
        tipoOnibus: "Articulado",
        cnhExigida: ["E"],
        treinamentos: ["Direção Defensiva Urbana"],
        status: "com-furo",
        operadora: "A confirmar"
    },
    {
        codigo: "502",
        nome: "CIRCULAR SUL (HORÁRIO)",
        tipoOnibus: "Articulado",
        cnhExigida: ["D", "E"],
        treinamentos: ["Estação Tubo"],
        status: "com-furo",
        operadora: "A confirmar"
    },
    {
        codigo: "X46",
        nome: "ESPECIAL MERCÊS",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "150",
        nome: "C. MUSIC / V. ALEGRE",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "912",
        nome: "JOSÉ CULPI",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "913",
        nome: "BUTIATUVINHA",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "915",
        nome: "O. VERDE / V. BÁDIA",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "967",
        nome: "JÚLIO GRAF",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "972",
        nome: "JARDIM ITÁLIA",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "022",
        nome: "INTER 2 (HORÁRIO)",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "023",
        nome: "INTER 2 (ANTI-HORÁRIO)",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "040",
        nome: "INTERBAIRROS IV",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "464",
        nome: "A. MUNHOZ / JARDIM BOTÂNICO",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "817",
        nome: "SATURNO / VENEZA",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "821",
        nome: "FERNÃO DIAS",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "901",
        nome: "SANTA FELICIDADE",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "902",
        nome: "SANTA FELICIDADE / PRAÇA TIRADENTES",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "911",
        nome: "PASSAÚNA",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    },
    {
        codigo: "979",
        nome: "LINHA TURISMO",
        tipoOnibus: "A confirmar",
        cnhExigida: [],
        treinamentos: [],
        status: "a-confirmar",
        operadora: "Consórcio Pontual"
    }
];

// Busca uma linha pelo código
function buscarLinha(codigo) {
    return linhasOnibus.find(function (linha) {
        return linha.codigo === codigo;
    });
}

// Lista as linhas marcadas com furos
function listarLinhasComFuro() {
    return linhasOnibus.filter(function (linha) {
        return linha.status === "com-furo";
    });
}

// Retorna todas as linhas cadastradas
function listarLinhas() {
    return linhasOnibus;
}

// Conta as linhas marcadas com furos
function contarLinhasComFuro() {
    return listarLinhasComFuro().length;
}

// Gera um resumo sem considerar dados pendentes como confirmados
function mostrarResumoLinhas() {
    return {
        total: linhasOnibus.length,
        comFuro: linhasOnibus.filter(function (linha) {
            return linha.status === "com-furo";
        }).length,
        semFuro: linhasOnibus.filter(function (linha) {
            return linha.status === "ok";
        }).length,
        aConfirmar: linhasOnibus.filter(function (linha) {
            return linha.status === "a-confirmar";
        }).length
    };
}
