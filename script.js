document.getElementById("botaoEnviar").addEventListener("click", validaFormulario);

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "" ){
    alert("Prontinho! você receberá as novidades por email.")
   }else{
     alert("Por favor, preencha os campos nome, email e telefone.")
   }
};

const subgeneros = [];

obj1 = {
serie: "law & order: s.v.u",
href: "https://www.adorocinema.com/series/serie-74/",
imagem: "img/SUV.png", 
sinopse: "A vida e os desafios da Equipe Especial de Elite do Departamento de Polícia de Nova York. A 'Special Victims Unit' (Unidade de Vítimas Especiais) investiga os crimes de caráter sexual, seguindo os passos dos detetives Elliot Stabler e Olivia Benson. Com sabedoria, eles precisam ao mesmo tempo balancear os efeitos das investigações em suas vidas pessoais.",
temporadas: 24,
encerrada: (true),
elenco: ["Mariska Hargitay como Olivia Benson", "Christopher Meloni como Dét. Elliot Stabler", "Kelli Giddish como Amanda Rollins", "Ice-T como Odafin Tutuola", "Dann Florek como Cpt. Donald Cragen", "Tamara Tunie como Dr Melinda Warner."]
  },

obj2 = {
serie: "brooklyn nine-nine",
href: "https://www.adorocinema.com/series/serie-11542/",
imagem: "img/B99.png",
sinopse:"A série gira em torno da 99.ª Delegacia do Brooklyn NYPD e do detetive Jake Peralta, que tem uma alta taxa de prisões bem-sucedidas e casos resolvidos, apesar de sua atitude relaxada, despreocupada e (às vezes) infantil. Jake muitas vezes entra em conflito com seu novo comandante, o sério e severo capitão Raymond Holt.",
temporadas: 8,
encerrada: (true),
elenco: ["Andy Samberg como Jake Peralta", "Melissa Fumero como Amy Santiago", "Andre Braugher como Cpt. Raymond Holt", "Stephanie Beatriz como Rosa Diaz", "Terry Crews como Terry Jeffords","Joe Lo Truglio como Charles Boyle","Dirk Blocker como Hitchcock", "Joel McKinnon Millercomo Scully", "Chelsea Peretti Personagem : Gina Linetti."]
  },

obj3 = {
serie: "reacher",
href: "https://www.adorocinema.com/series/serie-25364/",
imagem: "img/reacher.png",
sinopse: "Após deixar o Exército dos EUA, o veterano Jack Reacher decide seguir uma nova carreira como investigador. Quando Jack chega numa pequena cidade, vários homicídios passam a ocorrer, ele acaba se tornando o principal suspeito. Mas consegue provar sua inocência, o xerife local decide pedir sua ajuda para resolver a série de assassinatos. Aos poucos, o ex-militar vai juntando as pistas necessárias e percebe que há algo muito mais obscuro por trás das mortes.",
temporadas: 1,
encerrada: (true),
elenco: ["Alan Ritchson como Jack Reacher", "Malcolm Goodwin como Oscar Finlay", "Willa Fitzgerald como Roscoe Conklin", "Bruce McGill como Mayor Grover Teale."]
  },
  
obj4 = {
serie: "jessica jones",
href: "https://www.adorocinema.com/series/serie-10411/", 
imagem: "img/Jessica.png",
sinopse: "Desde que sua vida como super-heroína acabou de forma trágica, Jessica Jones passou a ser detetive particular no bairro de Hell's Kitchen-NY, abriu sua própria agência de investigações. Ela tenta fazer com que seus super-poderes passem despercebidos pelos seus clientes. Mas mesmo tentando fugir do passado, seus inimigos vão voltar a perseguí-la, na figura de Zebediah Kilgrave, um obsessivo vilão que fará de tudo para chamar a atenção de Jessica.",
temporadas: 3,
encerrada: (true),
elenco: ["Krysten Ritter como Jessica Jones","Rachael Taylor como Trish Walker","Janet McTeer como Alisa Jones","Leah Gibson como Ingrid", "J.R. Ramirez como Oscar", "Eka Darville como Malcolm Ducasse", "Carrie-Anne Moss como Jeri Hogarth", "Terry Chen como Pryce Cheng."]
  },

obj5 = {
serie: "blindspot",
href:"https://www.adorocinema.com/series/serie-18054/",
imagem: "img/Blinspot.png",
sinopse: "A história começa quando Jane Doe, completamente sem memória, é encontrada dentro de uma mala no meio da Times Square, em Nova York, com o corpo coberto de tatuagens recentes. E uma dessas tatuagens é o nome do agente do FBI Kurt Weller (Sullivan Stapleton). Agora, ele terá que desvendar os mistérios: Quem é esta mulher e o que significam suas tatuagens que mais parecem enigmas?",
temporadas: 5,
encerrada: (true),
elenco: ["Jaimie Alexander como Jane Doe", "Sullivan Stapleton como Kurt Weller", "Rob Brown como Edgar Reade", "Audrey Esparza como Tasha Zapata", "Ashley Johnson como Patterson", "Ennis Esmer como Rich Dotcom", "Mary Elizabeth Mastrantonio como Madeline Burke."]
  },

obj6 = {
serie: "shooter",
href: "https://www.adorocinema.com/series/serie-19619/",
imagem: "img/shooter.png",
sinopse:"Bob Lee Swagger é um atirador da elite naval que descobre um atentado contra o presidente dos Estados Unidos. Ao tentar impedir este assassinato, ele é traído e se torna o principal suspeito do crime. Enquanto é caçado, Swagger terá que encontrar uma forma de provar sua inocência.",
temporadas: 3,
encerrada: (true),
elenco: ["Ryan Phillippe (Bob Lee Swagger)", "Shantel VanSanten (Julie Swagger)", "Cynthia Addai-Robinson (Nadine Memphis)", "Omar Epps (Isaac Johnson)", "Josh Stewart (Solotov)."]
  },

obj7 = {
serie: "unbelievable",
href: "https://www.adorocinema.com/series/serie-23246/",
imagem: "img/unbelievable.png",
sinopse: "Uma jovem menina de 18 anos (Kaitlyn Dever) que contou à polícia ter sido estuprada dentro de seu próprio apartamento, e depois voltou atrás em sua versão. O caso só pôde avançar, de fato, quando duas detetives do sexo feminino (Toni Collette e Merritt Wever) assumiram a liderança e compreenderam melhor o contexto da ocasião.",
temporadas: 1,
encerrada: (true),
elenco: ["Kaitlyn Dever como Marie","Toni Collette como Grace Rasmussen","Merritt Wever como Karen Duvall."]
  },

obj8 = {
serie: "csi: crime scene investigation",
href: "https://www.adorocinema.com/series/serie-82/",
imagem: "img/CSI.png",
sinopse: "A série mostra as investigações de um grupo de cientistas forenses da polícia de Las Vegas. Os peritos trabalham desvendando misteriosos crimes que são pouco comuns, a ponto de alguns parecerem impossíveis de resolver. A série vai mostrando o cotidiano dos investigadores, que enquanto resolvem esses casos surpreendentes, também precisam cuidar de suas vidas.",
temporadas: 16,
encerrada: (true),
elenco: ["William L. Petersen como Gil Grissom", "Marg Helgenberger como Catherine Willows", "Gary Dourdan como Warrick Brown", "George Eads como Nick Stokes","Jorja Fox como Sara Sidel", "Paul Guilfoyle (II) como Jim Brass", "Robert David Hall como Al Robbins","Eric Szmanda como Greg Sanders", "Wallace Langham como David Hodges."]

  },

obj9 = {
serie: "criminal minds",
href: "https://www.adorocinema.com/series/serie-443/",
imagem: "img/CriminalMinds.jpeg",
sinopse: "A BAU (Unidade de Análise Comportamental) é uma subdivisão do FBI com base em Quantico, no estado da Virginia. Quando a polícia local pede assistência para a resolução de crimes em série ou de natureza extremamente violenta, o time usa técnicas como traçar um perfil para o suspeito com base nas suas vítimas e nas características específicas do crime.",
temporadas: 15,
encerrada: (true),
elenco: ["Joe Mantegna como David Rossi", "Thomas Gibson como Aaron 'Hotch' Hotchner", "Shemar Moore como Derek Morgan", "Matthew Gray Gubler como Spencer Reid", "A.J. Cook como Jennifer 'JJ' Jareau", "Paget Brewster como Emily Prentiss", "Kirsten Vangsness como Penelope Garcia."]
  },

obj10 = {
serie: "castle",
href: "https://www.adorocinema.com/series/serie-4178/",
imagem: "img/Castle.png",
sinopse:"Richard Castle é um escritor de sucesso especializado em suspense policial. Após uma série de crimes inspirados em seus livros, ele desperta a atenção da polícia. O contato com agentes da lei faz com que Castle comece a trabalhar em um novo livro. Ele assume a função de consultor da polícia de Nova York, atuando lado a lado com a detetive Kate Beckett e seus parceiros Javier Esposito e Kevin Ryan.",
temporadas: 8,
encerrada: (true),
elenco: ["Nathan Fillion como Richard Castle", "Stana Katic como Kate Beckett", "Molly C. Quinn como Alexis Castle", "Susan Sullivan como Martha Rodgers", "Jon Huertas como Javier Esposito", "Seamus Dever como Kevin Ryan", "Tamala Jones como Lanie Parish", "Toks Olagundoye como Hayley Shipton."]
  },

obj11 = {
serie: "law & order: org.c.",
href: "https://www.adorocinema.com/series/serie-26420/",
imagem: "img/Org.C.png",
sinopse: "Na trama, o detetive veterano Elliot Stabler retorna ao trabalho no Departamento de Polícia de Nova York depois do assassinato de sua esposa. Elliot deseja encontrar o responsável pelo crime e é posicionado como braço direito da sargento Ayanna Bell. Em seu retorno, ele percebe que a cidade e a polícia mudou drasticamente desde que se afastou. Como um dos líderes da força tarefa, Stabler terá a difícil missão de restabelecer sua vida e ao mesmo tempo lidar com organizações criminosas influentes em toda a região.",
temporadas: 3,
encerrada: (true),
elenco: ["Christopher Meloni como Elliot Stabler", "Danielle Moné Truitt como Ayanna Bell", "Tamara Taylor como Angela Wheatley", "Ainsley Seiger como Jet Sloomaekers", "Dylan McDermott como Richard M. Wheatley."]
  },

obj12 = {
serie: "chicago pd",
href: "https://www.adorocinema.com/series/serie-12091/",
imagem: "img/Chicago_PD.png",
sinopse: "O 21º Departamento de Polícia de Chicago é formado por dois grupos distintos: A patrulha formada por policiais fardados que lidam com crimes urbanos e a Unidade de Inteligência composta por oficiais e detetives que investigam os maiores crimes da cidad, sendo liderada pelo detetive Sgt. Hank Voight, a equipe combate os crimes mais hediondos da cidade: ações do crime organizado, tráfico de drogas, assassinatos e muito mais.",
temporadas: 10,
encerrada: (true),
elenco: ["Jason Beghe como Sgt. Hank Voight", "Jon Seda como Det. Antonio Dawson", "Jesse Lee Soffer como Det. Jay Halstead", "Patrick John Flueger como Off. Adam Ruzek", "Marina Squerciati como Off. Kim Burgess", "LaRoyce Hawkins como Off. Kevin Atwater", "Amy Morton como Sgt. Trudy Platt","Tracy Spiridakos como Det. Hailey Upton","Elias Koteas como Det. Alvin Olinsky","Sophia Bush como Det. Erin Lindsay."]
  },   

obj13 = {
serie: "bones",
href: "https://www.adorocinema.com/series/serie-452/",
imagem: "img/Bones.png", 
sinopse:"A antropóloga forense Dra. Temperance Brennan juntamente ao FBI acompanha investigações de casos de assassinatos envolvendo restos mortais das vítimas, especialmente seus ossos. O Agente Especial Seeley Booth, arrogante porém charmoso, é quem trabalha com ela na Agência de Investigação.",
temporadas: 3,
encerrada: (true),
elenco: ["Emily Deschanel como Temperance Brennan", "David Boreanaz como Seeley Booth", "Michaela Conlin como Angela Montenegro", "T.J. Thyne como Jack Hodgins", "Tamara Taylor como Camille Saroyan."]
  },

obj14 = {
serie: "killing eve",
href: "https://www.adorocinema.com/series/serie-22269/",
imagem: "img/eve.png", 
sinopse: "Eve Polastri trabalha como agente de segurança do MI5-UK, mas o emprego estável e dentro de quatro paredes não satisfaz seu desejo de virar uma espiã. Então, quando surge a oportunidade de liderar uma divisão especial do MI6-UK, ela não pensa duas vezes e mergulha numa caçada implacável por uma serial killer. Agora, seu alvo principal é Villanelle, uma criminosa tão elegante quanto perspicaz.",
temporadas: 4,
encerrada: (true),
elenco: ["Sandra Oh como Eve Polastri", "Jodie Comer como Villanelle", "Fiona Shaw como Carolyn Martens", "Kim Bodnia como Konstantin", "Sean Delaney como Kenny Stowton."]
  },

obj15 = {
serie: "elementary",
href: "https://www.adorocinema.com/series/serie-10552/",
imagem: "img/elementary.png", 
sinopse: "A série é uma adaptação da obra Sherlock Holmes, trazendo os personagens principais para o tempo presente, em Nova York. Na trama, Watson foi transformado em uma mulher. Sherlock é um ex-consultor da Scotland Yard que chega em Nova York após passar um período em um centro de reabilitação. Ele é forçado por seu pai a dividir sua casa com a Dra. Joan Watson, uma ex-cirurgiã que foi contratada como monitora de reabilitação. Ela acaba se envolvendo com o trabalho de Sherlock como consultor da NYPD.",
temporadas: 7,
encerrada: (true),
elenco: ["Jonny Lee Miller como Sherlock Holmes", "Lucy Liu como Joan Watson", "Aidan Quinn como Cp. Tobias 'Toby' Gregson", "Jon Michael Hill como Detective Marcus Bell."]
  },

obj16 = {
serie: "mindhunter",
href: "https://www.adorocinema.com/series/serie-20143/",
imagem: "img/Mindhunter.png", 
sinopse: "A séreie se passa nos Estados Unidos, no ano de 1977. Holden Ford e Bill Tench, dois agentes do FBI, possuem um plano ambicioso em mente: desenvolver a primeira pesquisa nos EUA sobre a mente dos assassinos, com o intuito de entender como esses criminosos pensam e aplicar esse conhecimento para resolver os casos em curso. Para isso, eles precisam ganhar a confiança dos detentos e superar uma série de desafios.",
temporadas: 2,
encerrada: (true),
elenco: ["Jonathan Groff (II) como Holden Ford", "Holt McCallany como Bill Tench", "Hannah Gross como Debbie Mitford", "Anna Torv como Wendy Carr", "Cotter Smith como Unit Chief Shepard."]
  },

obj17 = {
serie: "csi: cyber",
href: "https://www.adorocinema.com/series/serie-23246/",
imagem: "img/CSI_CYBER.png", 
sinopse: "Um departamento de criminalística forense, focado em crimes virtuais. Inspirada no trabalho da psicóloga irlandesa Mary Aiken, a série é centrada em Avery Ryan, agente especial encarregada da Divisão de Crimes Virtuais do Quantico.",
temporadas: 2,
encerrada: (true),
elenco: ["Patricia Arquette como Avery Ryan", "James Van Der Beek como Elijah Mundo", "Charley Koontz como Daniel Krumitz", "Hayley Kiyoko como Raven Ramirez", "Ted Danson como D.B. Russell", "Shad Moss como Brody Nelson."]
  },

obj18 = {
serie: "unit 42",
href: "https://www.imdb.com/title/tt6136644/",
imagem: "img/unit42.png", 
sinopse: "A série mostra as reviravotlas vividas pela Unidade Digital da Polícia da Bélgica. A tecnologia moderna permite que os criminosos atuem no mundo real, protegidos por suas telas de computador. Através de investigações Sam, um policial recém-transferido do departamento de homicídios (nada experiente em tecnologia) e Billie, uma policial jovem e mal-humorada especialista em TI e ex-hacker, juntos irão caçar cyber criminosos experientes que estão aterrorizando a Bélgica.",
temporadas: 2,
encerrada: (true),
elenco: ["Patrick Ridremont como Sam Leroy", "Constance Gay como Billie Vebber", "Tom Audenaert como Bob Franck", "Roda Fawaz como Nassim Khaoulani", "Danitza Athanassiadis como Alice Meerks."]
  }

function verificaRenovou(obj, array){
  if(obj.encerrada === true){
    return array.push(obj)
  }else{
    alert('Objetos não adicionados')
  }
}

verificaRenovou(obj1, subgeneros);
verificaRenovou(obj2, subgeneros);
verificaRenovou(obj9, subgeneros);
verificaRenovou(obj11, subgeneros);
verificaRenovou(obj12, subgeneros);
verificaRenovou(obj15, subgeneros);
verificaRenovou(obj6, subgeneros);
verificaRenovou(obj17, subgeneros);
verificaRenovou(obj5, subgeneros);
verificaRenovou(obj3, subgeneros);
verificaRenovou(obj4, subgeneros);
verificaRenovou(obj7, subgeneros);
verificaRenovou(obj8, subgeneros);
verificaRenovou(obj10, subgeneros);
verificaRenovou(obj13, subgeneros);
verificaRenovou(obj14, subgeneros);
verificaRenovou(obj16, subgeneros);
verificaRenovou(obj18, subgeneros);

let mediaQuant = (subgeneros[0].temporadas+subgeneros[1].temporadas+subgeneros[2].temporadas+subgeneros[3].temporadas+subgeneros[4].temporadas+subgeneros[5].temporadas+subgeneros[6].temporadas+subgeneros[7].temporadas+subgeneros[8].temporadas+subgeneros[9].temporadas+subgeneros[10].temporadas+subgeneros[11].temporadas+subgeneros[12].temporadas+subgeneros[13].temporadas+subgeneros[14].temporadas+subgeneros[15].temporadas+subgeneros[16].temporadas+subgeneros[17].temporadas)/5;
console.log(mediaQuant);

for(k in subgeneros){
  let concat = "";
  for (i of subgeneros[k].elenco) {
    concat += i + ", ";
  }
  console.log(`${subgeneros[k].serie.toUpperCase()}\n\n ${subgeneros[k].temporadas}\n\n Elenco: ${concat}\n\n`)
}

function imprimiObj(obj){
  let propriedade = ""
  for (i in obj){
    propriedade += i + "\n"
  }
  return propriedade
}

imprimiObj(obj1, subgeneros)

for (i of subgeneros){
  console.log(i)
}

const filtra = (arrayObj, string)=>{
  const buscaString = arrayObj.filter((arrayObj)=>{return arrayObj.serie===string})
  if (buscaString.lenght===0){
    alert("Nenhum item encontrado")
  }else{
    return buscaString[0]
  }
}

console.log(filtra(subgeneros, "unit 42"))

function criarItens(arrayObj){
  let div = document.getElementById("div")
  for (let i = 0; i<arrayObj.length; i++){    
    let section = document.createElement("section")
    let img = document.createElement("img")
    let link = document.createElement("a")
    let paragrafo = document.createElement("p")
    section.setAttribute("id", "conteiner__card") 
    img.setAttribute("src", arrayObj[i].imagem)
    link.setAttribute("href", arrayObj[i].href)
    link.setAttribute("target", "_blank")
    link.innerHTML = arrayObj[i].serie.toUpperCase()
    paragrafo.innerHTML = `Sinopse: ${arrayObj[i].sinopse} <br><br>`
    paragrafo.innerHTML += `Elenco: ${arrayObj[i].elenco}`
    section.appendChild(img)
    section.appendChild(link)
    section.appendChild(paragrafo)
    div.insertAdjacentElement("beforeend", section)
  }
}

criarItens(subgeneros)


function filtraConteudo(arrayObj, string){
  let main = document.getElementById("conteiner")
  for (let i in arrayObj){
    for (let k in arrayObj[i]){
      if(arrayObj[i][k]==string){
        let div = document.createElement("div")
        let section = document.createElement("section")
        let img = document.createElement("img")
        let link = document.createElement("a")
        let paragrafo = document.createElement("p")
        div.setAttribute("id", "div")
        section.setAttribute("id", "conteiner__card")    
        img.setAttribute("src", arrayObj[i].imagem)
        link.setAttribute("href", arrayObj[i].href)
        link.setAttribute("target", "_blank")
        link.innerHTML = arrayObj[i].serie.toUpperCase()
        paragrafo.innerHTML = `Sinopse: ${arrayObj[i].sinopse} <br><br>`
        paragrafo.innerHTML += `Elenco: ${arrayObj[i].elenco}`
        section.appendChild(img)
        section.appendChild(link)
        section.appendChild(paragrafo)
        div.appendChild(section)
        main.insertAdjacentElement("beforeend", div)  
      }
    }
  }

}

function buscar(event){
  event.preventDefault()
  let input = document.getElementById("Buscar").value.toLowerCase() 
  if(input === ""){
    alert("Digite alguma coisa para que a busca aconteça")
  }else{
    document.getElementById("div").remove()
    filtraConteudo(subgeneros, input)
  }
}

  
