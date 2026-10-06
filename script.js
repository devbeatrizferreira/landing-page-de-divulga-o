
// =====================================
// SISTEMA DE VAGAS DE ESTÁGIO
// =====================================


// Vagas iniciais para demonstração

let vagas = [
    {
        empresa: "Tech Solutions",
        cargo: "Estágio em Desenvolvimento Web",
        area: "Tecnologia",
        modalidade: "Híbrido",
        local: "Fortaleza - CE",
        bolsa: "R$ 1.200,00",
        horario: "30 horas semanais",
        link: "https://www.google.com",
        descricao: "Auxiliar no desenvolvimento de sites e sistemas web."
    },

    {
        empresa: "Marketing Digital Brasil",
        cargo: "Estágio em Marketing",
        area: "Marketing",
        modalidade: "Remoto",
        local: "Brasil",
        bolsa: "R$ 1.000,00",
        horario: "30 horas semanais",
        link: "https://www.google.com",
        descricao: "Criação de conteúdos para redes sociais e campanhas digitais."
    }
];


// Elementos da página

const formulario = document.getElementById("vagaForm");

const listaVagas = document.getElementById("listaVagas");

const semVagas = document.getElementById("semVagas");

const pesquisa = document.getElementById("pesquisa");

const totalHero = document.getElementById("totalHero");


// =====================================
// MOSTRAR VAGAS
// =====================================

function mostrarVagas(lista = vagas) {

    listaVagas.innerHTML = "";


    // Se não houver vagas

    if (lista.length === 0) {

        semVagas.style.display = "block";

        return;

    }


    semVagas.style.display = "none";


    // Criar cada vaga

    lista.forEach(function(vaga) {

        const linha = document.createElement("tr");


        linha.innerHTML = `

            <td>
                ${vaga.cargo}
            </td>

            <td>
                ${vaga.empresa}
            </td>

            <td>
                <span class="badge-area">
                    ${vaga.area}
                </span>
            </td>

            <td>
                ${vaga.local}
            </td>

            <td>
                <span class="badge-modalidade">
                    ${vaga.modalidade}
                </span>
            </td>

            <td>
                ${vaga.bolsa}
            </td>

            <td>
                <a
                    href="${vaga.link}"
                    target="_blank"
                    class="apply-button"
                >
                    Candidatar
                </a>
            </td>

        `;


        listaVagas.appendChild(linha);

    });


    // Atualizar quantidade de vagas

    totalHero.textContent = vagas.length;

}


// =====================================
// CADASTRAR NOVA VAGA
// =====================================

formulario.addEventListener("submit", function(event) {

    // Impede o formulário de recarregar a página

    event.preventDefault();


    // Criar objeto da nova vaga

    const novaVaga = {

        empresa: document.getElementById("empresa").value,

        cargo: document.getElementById("cargo").value,

        area: document.getElementById("area").value,

        modalidade: document.getElementById("modalidade").value,

        local: document.getElementById("local").value,

        bolsa: document.getElementById("bolsa").value,

        horario: document.getElementById("horario").value,

        link: document.getElementById("link").value,

        descricao: document.getElementById("descricao").value

    };


    // Adicionar a vaga no início da lista

    vagas.unshift(novaVaga);


    // Atualizar tabela

    mostrarVagas();


    // Limpar formulário

    formulario.reset();


    // Mostrar mensagem

    alert("✅ Vaga publicada com sucesso!");


    // Ir para a tabela

    document.getElementById("vagas").scrollIntoView({
        behavior: "smooth"
    });

});


// =====================================
// PESQUISA DE VAGAS
// =====================================

pesquisa.addEventListener("input", function() {

    const termo = pesquisa.value.toLowerCase();


    const resultado = vagas.filter(function(vaga) {

        return (

            vaga.cargo.toLowerCase().includes(termo) ||

            vaga.empresa.toLowerCase().includes(termo) ||

            vaga.area.toLowerCase().includes(termo) ||

            vaga.local.toLowerCase().includes(termo)

        );

    });


    mostrarVagas(resultado);

});


// =====================================
// INICIAR SITE
// =====================================

mostrarVagas();
