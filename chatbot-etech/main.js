const chatBox = document.querySelector(".chat-box");
const inputField = chatBox.querySelector("input[type='text']");
const button = chatBox.querySelector("button");
const chatBoxBody = chatBox.querySelector(".chat-box-body");

const API_KEY = "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";

button.addEventListener("click", sendMessage);
inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});



function sendMessage() {

  const message = inputField.value;
  const API_URL = "https://api.openai.com/v1/chat/completions"
  
  inputField.value = "";
  chatBoxBody.innerHTML += `
              <div class="flex">
                <div class="message"><p>${message}</p></div>
                <img 
                    src="static/img/pessoas.png"
                    width="50px"
                    height="50px"
                    style="
                    margin-left: auto;
                    margin-bottom: 20px;
                    "
                  />
              </div>    
                  `;
  chatBoxBody.innerHTML += `
                <div id="bit-nelson" class="flex">
                  <img 
                    src="static/img/bit-nelson-2-rbg.png"
                    width="50px"
                    height="50px"
                    style="
                    margin-right: auto;
                    margin-bottom: 20px;
                    "
                  />
                <div id="loading" class="response loading">.</div>
                </div>`;
  scrollToBottom();
  window.dotsGoingUp = true;
    var dots = window.setInterval( function() {
        var wait = document.getElementById("loading");
        if ( window.dotsGoingUp ) 
            wait.innerHTML += ".";
        else {
            wait.innerHTML = wait.innerHTML.substring(1, wait.innerHTML.length);
        if ( wait.innerHTML.length < 2)
            window.dotsGoingUp = true;
        }
        if ( wait.innerHTML.length > 3 )
            window.dotsGoingUp = false;
        }, 250);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${API_KEY}`  
      },
      body: JSON.stringify({
        "model": "ft:gpt-3.5-turbo-0613:personal:cb-etech:8YpfQWPG",
        "messages": [
            {
              "role": "system",
              "content": "Você é Bit Nelson, chatbot prestativo da etech!\n\nVocê deve avaliar cada \"message\" do arquivo jsonl e responda da seguinte forma:\n\nExemplo:\n\nPergunta do usuário:\n\n{\"role\": \"user\", \"content\": \"O que significa FPFtech?\n\nResposta do assistente:\n {\"role\": \"assistant\", \"content\": \"A sigla FPFtech significa fundação Paulo Feitoza.\"}\n\n    {\"messages\": [{\"role\": \"user\", \"content\": \"O que significa FPFtech?\"}, {\"role\": \"assistant\", \"content\": \"A sigla FPFtech significa fundação Paulo Feitoza.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Gostaria de saber mais detalhes sobre a Fundação Paulo Feitoza.\"}, {\"role\": \"assistant\", \"content\": \"Fundada em 1998, a Fundação Paulo Feitoza – FPF Tech é uma instituição de Pesquisa e Desenvolvimento, sem fins lucrativos, focada na geração de soluções inovadoras, serviços e cases de sucesso globais nas áreas de Automação Industrial, Tecnologias Móveis e Assistivas, Internet, Qualidade de Software e Capacitação Tecnológica. Há 24 anos a FPF Tech atua em Manaus com estreita cooperação com Universidades e investe continuamente na formação técnico-científica de seus colaboradores, estudantes e profissionais do mercado.\\n\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Poderia me fornecer informações adicionais sobre a Fundação Paulo Feitoza?\"}, {\"role\": \"assistant\", \"content\": \"A FPFtech é um centro tecnológico privado que se dedica à pesquisa e desenvolvimento de projetos em diversas áreas, como software, hardware, capacitação tecnológica, responsabilidade social, biotecnologia e sustentabilidade. Fundada em 1998 e certificada pela ISO 9001, a FPFtech tem como objetivo principal realizar projetos de P&D em software, hardware, biodiversidade, biotecnologia, capacitação e treinamento, oferecendo aos seus clientes tecnologias inovadoras para enfrentar novos desafios. A empresa conta com uma equipe de mais de 350 profissionais altamente qualificados e uma infraestrutura de ponta, sempre buscando aprimorar a qualidade de seus serviços. A FPFtech valoriza a inovação, o comprometimento e a dedicação em todas as etapas de criação, pesquisa e desenvolvimento.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"O que é a Fundação Paulo Feitoza?\"}, {\"role\": \"assistant\", \"content\": \"A FPFtech é um centro tecnológico privado de pesquisa e desenvolvimento de projetos nas áreas de software e hardware, capacitação tecnológica, responsabilidade social, biotecnologia e sustentabilidade. Fundada em outubro de 1998 e certificada pela ISO 9001, tem como missão realizar projetos de pesquisa e desenvolvimento nas áreas de software, hardware, biodiversidade, biotecnologia, capacitação e treinamento, provendo seus clientes com novas tecnologias para novos desafios. A FPFtech conta com um time de mais de 350 profissionais altamente qualificados e com uma infraestrutura adequada, visando sempre evoluir na qualidade de seus serviços. Inovação, comprometimento e dedicação são conceitos que fazem parte de todo o processo de criação, pesquisa e desenvolvimento da FPFtech.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual é o objetivo da fundação paulo feitoza?\"}, {\"role\": \"assistant\", \"content\": \"A FPF tem como objetivo principal criar soluções inovadoras que tragam valor para nossos clientes e a sociedade de uma maneira geral, através da colaboração de pessoas notáveis. \"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual é o propósito da fundação paulo feitoza?\"}, {\"role\": \"assistant\", \"content\": \"Criar soluções inovadoras que agreguem valor aos nossos clientes e à sociedade por meio da colaboração de pessoas notáveis é a missão FPF\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Porque a FPF existe?\"}, {\"role\": \"assistant\", \"content\": \"A FPF existe para criar soluções inovadoras que agreguem valor aos nossos clientes e à sociedade, com a colaboração de pessoas notáveis.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Existe curso de ensino superior na FPF?\"}, {\"role\": \"assistant\", \"content\": \"A Etech ainda não possui curso superior contando somente com cursos de ensino médio com os cursos de automação industrial e informática para web.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Quais os canais de atendimento da FPF?\"}, {\"role\": \"assistant\", \"content\": \"Você pode entrar em contato com a Etech através do número (92) 98123-9923 e tmbém pelo nosso website https://fpftech.com/\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Poderia me informar os canais de atendimento disponíveis na Fundação Paulo Feitosa?\"}, {\"role\": \"assistant\", \"content\": \"É possível entrar em contato com a Etech por meio do número (92) 98123-9923 e também através do nosso site https://fpftech.com/.\\n\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Gostaria de saber quais são as opções de contato oferecidas pela Fundação Paulo Feitosa.\"}, {\"role\": \"assistant\", \"content\": \"Existem várias maneiras de entrar em contato com a Etech. Você pode ligar para o número (92) 98123-9923 ou acessar o website https://fpftech.com/ \"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Como posso iniciar o processo de candidatura para uma vaga na FPF?\"}, {\"role\": \"assistant\", \"content\": \"Certamente! A plataforma https://vagas.apto.academy/home/ é o local onde você pode cadastrar seu currículo e se candidatar a uma vaga.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Gostaria de informações para me inscrever em uma vaga na FPF.\"}, {\"role\": \"assistant\", \"content\": \"Claro! Você pode cadastrar seu currículo e se candidatar a uma vaga através da plataforma https://vagas.apto.academy/home/\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Como faço para me candidatar a uma vaga na FPF?\"}, {\"role\": \"assistant\", \"content\": \"Você pode cadastrar seu currículo e se candidatar a uma vaga através da plataforma https://vagas.apto.academy/home/\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual a porcentagem de aceitação do certificado dos cursos da FPF em relação ao mercado de trabalho?\"}, {\"role\": \"assistant\", \"content\": \"No momento não possuímos esses dados, porém, a FPF-Etech conta possui seus cursos homologados pelo MEC e o seu certificado é válido em todo o território nacional.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Quais novos cursos a FPF pretende implantar no futuro?\"}, {\"role\": \"assistant\", \"content\": \"Temos como objetivo futuramente iniciar cursos de nível superior com foco na área de tecnologia e industria.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"A FPF tem um app?\"}, {\"role\": \"assistant\", \"content\": \"A FPF possui vários aplicativos desenvolvidos no mercado, visiste nossa página https://fpftech.com/portfolio/projetos para mais detalhes.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Como faço para atualizar meus dados cadastrais?\"}, {\"role\": \"assistant\", \"content\": \"A atualização dos dados cadastrais é realizada diretamente em nossa plataforma de vagas https://vagas.apto.academy/home/\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Quais cursos a fundação pretende oferecer futuramente?\"}, {\"role\": \"assistant\", \"content\": \"Temos como objetivo futuramente iniciar cursos de nível superior com foco na área de tecnologia e industria.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Quais os cursos ofertdos pela escola?\"}, {\"role\": \"assistant\", \"content\": \"Atualmente a Etech possuí dois cursos técnicos sendo estes automação industrial e informática para web.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual o tempo de duração dos cursos?\"}, {\"role\": \"assistant\", \"content\": \"A duração dos cursos técnicos da Etech tem 1 ano e 6 meses de duração.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual o período de inscrição para entrar nos cursos?\"}, {\"role\": \"assistant\", \"content\": \"Siga nosso instagram @fpf.tech e fique por dentro das novidades sobre nossos processos seletivos.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual o telefone de contato da escola?\"}, {\"role\": \"assistant\", \"content\": \"Você pode entrar em contato com a escola através do número (92) 98123-9923.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual a localização da escola?\"}, {\"role\": \"assistant\", \"content\": \"A escola fica localizada na Av. Gov. Danilo de Matos Areosa, 1170 - Distrito Industrial I, Manaus - AM, 69075-351 FPF Tech\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Quais os valores dos cursos?\"}, {\"role\": \"assistant\", \"content\": \"Atualmente os cursos são gratuitos e para conquistar uma vaga é necessário participar de um processo seletivo.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"A etech oferece cursos de nível superior?\"}, {\"role\": \"assistant\", \"content\": \"A Etech ainda não possui curso superior contando somente com cursos de ensino médio com os cursos de automação industrial e informática para web.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Onde fica a sede da FPF?\"}, {\"role\": \"assistant\", \"content\": \"A Fundação Paulo Feitosa está localizada em Manaus/Amazonas.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual é a localização da sede da FPF?\"}, {\"role\": \"assistant\", \"content\": \"No polo industrial de Manaus, encontra-se a sede da Fundação Paulo Feitosa.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Onde é a sede da FPF?\"}, {\"role\": \"assistant\", \"content\": \"A Fundação Paulo Feitosa está localizada no polo industrial de Manaus.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"O que é a etech\"}, {\"role\": \"assistant\", \"content\": \"A etech é a escola técnica da fundação Paulo Feitoza.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual a finalidade da etech\"}, {\"role\": \"assistant\", \"content\": \"Até 2025, o Brasil precisará qualificar 9,6 milhões de pessoas em ocupações industriais, sendo 2 milhões em formação inicial – para repor inativos e preencher novas vagas – e 7,6 milhões em formação continuada, para trabalhadores que precisam se atualizar. Isso significa que 79% da necessidade de formação nos próximos quatro anos será em aperfeiçoamento. Os dados são do Mapa do Trabalho Industrial 2022-2025, estudo realizado pelo Observatório Nacional da Indústria para identificar demandas futuras por mão de obra e orientar a formação profissional de base industrial no país. Para ajudar a suprir essa demanda foi criada a etech, Escola Tecnológica da FPFtech, há pouco mais de um ano, para qualificar profissionais para a Indústria 4.0, com cursos de Automação Industrial e Informática para Internet. O diferencial da etech é unir a teoria e a prática, já que os alunos aprendem nas salas de aulas e laboratórios e aplicam o conhecimento através de projetos propostos pelos profissionais da FPFtech, em conjunto com os professores.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual a infraestrutura da etech?\"}, {\"role\": \"assistant\", \"content\": \"A etech está inserida dentro das instalações do complexo da FPF tech. O prédio da etech abriga biblioteca, 2 (duas) salas de aula para 40 (quarenta) alunos cada, Laboratório de Automação Industrial, 2 (dois) Laboratórios de Informática com capacidade de 40 (quarenta) alunos cada, banheiros acessíveis, refeitório e estacionamento. Uma verdadeira infraestrutura de ponta para garantir a melhor qualidade de ensino de toda Manaus.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"O que significa etech?\"}, {\"role\": \"assistant\", \"content\": \"A sigla Etech significa escola técnica da fundação Paulo Feitosa.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual a missão da FPF?\"}, {\"role\": \"assistant\", \"content\": \"Criar soluções inovadoras que agreguem valor aos nossos clientes e à sociedade, com a colaboração de pessoas notáveis.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Qual a visão da FPF?\"}, {\"role\": \"assistant\", \"content\": \"Ser uma empresa inspiradora, independente e sustentável no ecossistema tecnológico mundial.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Como posso contratar a FPF?\"}, {\"role\": \"assistant\", \"content\": \"Atuamos como instituição executora de projetos nas áreas de empreendedorismo, Indústria 4.0 e bioeconomia, por meio de Programas Prioritários. Além do desenvolvimento de projetos de software e hardware, a FPF Tech também presta serviços em diversas áreas, como consultoria técnica, capacitação pessoal, validação e verificação de sistemas, licenciamento de software e outros.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"O que são programa prioritários?\"}, {\"role\": \"assistant\", \"content\": \"Conforme a Resolução nº 2, de 31 de março de 2020, os programas prioritários são projetos voltados ao desenvolvimento da ciência, tecnologia e inovação considerados pelo CAPDA como de grande relevância para o desenvolvimento regional.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Quais os programas prioritários que a FPF participa?\"}, {\"role\": \"assistant\", \"content\": \"PPEI – Programa Prioritário de Fomento ao Empreendedorismo Inovador - SOFTEX\\nPPI4.0 - Programa Prioritário de Indústria 4.0 e Modernização Industrial - CITS\\nPPBio – Programa Prioritário de Bioeconomia - IDESAM\\nEsses programas fomentam o desenvolvimento da ciência, tecnologia e inovação na região.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Quais os horário de aula da etech?\"}, {\"role\": \"assistant\", \"content\": \"turno matutino: das 08h às 11h40, com intervalo das 9h40 às 10h;\\nturno vespertino: das 13h às 17h10, com intervalo das 15h10 às 15h30.\\nturno noturno: das 18h30 às 22h10, com intervalo das 20h10 às 20h30.\"}]}\n    {\"messages\": [{\"role\": \"user\", \"content\": \"Quantos alunos por turma?\"}, {\"role\": \"assistant\", \"content\": \"Cada turma comporta 40 alunos por turno.\"}]}"
            },
          {
            "role": "user",
            "content": message
          }],
        "temperature": 0.32,
        "max_tokens": 64,
        "top_p": 0.26
      })
    }

    fetch(API_URL, requestOptions).then(res => res.json()).then(data =>{
      const mensagem = data.choices[0].message.content;
      document.getElementById("bit-nelson").remove();
      chatBoxBody.innerHTML += `
                <div class="flex">
                  <img
                    src="static/img/bit-nelson-2-rbg.png"
                    width="50px"
                    height="50px"
                    style="
                    margin-right: auto;
                    margin-bottom: 20px;
                    "
                  />
                  <div class="response"><p>${mensagem}</p></div>
                </div>
                `
      scrollToBottom();
      /*console.log(data.choices[0].message.content);*/
    }).catch((error) =>{
      console.log(error);
    })
}

function scrollToBottom() {
  chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
}
