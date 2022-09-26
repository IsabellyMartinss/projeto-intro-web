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
serie: "Broklyn 99",
sinopse:"A série Brooklyn Nine-Nine é ambientada na 99ª Delegacia de Polícia de Nova York, no Brooklyn, acompanhando as maluquices do imaturo detetive Jake Peralta e como será a história com seu novo comandante, o sério e severo Capitão Ray Holt.",
temporadas: 8,
encerrada: (true),
elenco: ["Andy Samberg como Jake Peralta", "Melissa Fumero como Amy Santiago", "Andre Braugher como Cpt. Raymond Holt", "Stephanie Beatriz como Rosa Diaz", "Terry Crews como Terry Jeffords","Joe Lo Truglio como Charles Boyle","Dirk Blocker como Hitchcock", "Joel McKinnon Millercomo Scully", "Chelsea Peretti Personagem : Gina Linetti"]
  },

obj2 = {
serie: "Castle",
sinopse:"Richard Castle é um escritor de sucesso especializado em thrillers policiais. Após uma série de crimes inspirados em seus romances, ele desperta a atenção da polícia. O contato com agentes da lei faz com que Castle comece a trabalhar em um novo livro. E para fazer uma pesquisa para o novo projeto, ele assume a função de consultor da polícia de Nova York, atuando lado a lado com a detetive Kate Beckett e seus parceiros Javier Esposito e Kevin Ryan.",
temporadas: 8,
encerrada: (true),
elenco: ["Nathan Fillion como Richard Castle", "Stana Katic como Kate Beckett", "Molly C. Quinn como Alexis Castle", "Susan Sullivan como Martha Rodgers", "Jon Huertas como Javier Esposito", "Seamus Dever como Kevin Ryan", "Tamala Jones como Lanie Parish", "Toks Olagundoye como Hayley Shipton"]
  },

obj3 = {
serie: "Reacher",
sinopse: "Após abandonar o Exército dos Estados Unidos, o veterano Jack Reacher decidiu percorrer o país e seguir uma nova carreira passando a trabalhar como investigador freelancer. Quando Jack chega em uma pequena cidade, várias mortes começam a ocorrer e ele acaba se tornando o principal suspeito. Quando consegue provar sua inocência, o xerife local decide pedir sua ajuda para resolver a série de brutais homicídios. \n Aos poucos, o ex-militar vai juntando as pistas necessárias e percebe que há algo muito mais obscuro por trás das mortes. Reacher descobre uma rede de conspiração e corrupção envolvendo pessoas muito poderosas e que não serão fáceis de derrubar.",
temporadas: 1,
encerrada: (true),
elenco: ["Alan Ritchson como Jack Reacher", "Malcolm Goodwin como Oscar Finlay", "Willa Fitzgerald como Roscoe Conklin", "Bruce McGill como Mayor Grover Teale"]
  },
  
obj4 = {
serie: "Jessica Jones",
sinopse: "Desde que sua curta vida como super-heroína acabou de forma trágica, Jessica Jones vem reconstruindo sua carreira e passou a levar a vida como detetive particular no bairro de Hell's Kitchen, em Nova York, na sua própria agência de investigações, a Alias Investigations. Traumatizada por eventos anteriores de sua vida, ela sofre de Transtorno de Estresse Pós-Traumático, e tenta fazer com que seus super-poderes passem despercebidos pelos seus clientes. Mas, mesmo tentando fugir do passado, seus demônios particulares vão voltar a perseguí-la, na figura de Zebediah Kilgrave, um obsessivo vilão que fará de tudo para chamar a atenção de Jessica.",
temporadas: 3,
encerrada: (true),
elenco: ["Krysten Ritter como Jessica Jones","Rachael Taylor como Trish Walker","Janet McTeer como Alisa Jones","Leah Gibson como Ingrid", "J.R. Ramirez como Oscar", "Eka Darville como Malcolm Ducasse", "Carrie-Anne Moss como Jeri Hogarth", "Terry Chen como Pryce Cheng"]
  },

obj5 = {
serie: "The Defenders",
sinopse: "A minissérie reúne Matt Murdock, Jessica Jones, Luke Cage, Danny Rand e conta a história dos heróis imperfeitos de Hell's Kitchen.",
temporadas: 1,
encerrada: (true),
elenco: ["Charlie Cox como Matt Murdock/Daredevil", "Krysten Ritter como Jessica Jones", "Mike Colter como Luke Cage", "Finn Jones como Danny Rand/Iron Fist", "Élodie Yung como Elektra Natchios", "Carrie-Anne Moss como Jeri Hogarth", "Rosario Dawson como Claire Temple", "Sigourney Weaver como Alexandra"]
  },

obj6 = {
serie: "Shooter",
sinopse:"Bob Lee Swagger é um atirador da elite naval que descobre um atentado contra o presidente dos Estados Unidos. Ao tentar impedir este assassinato, ele é traído e se torna o principal suspeito do crime. Enquanto é caçado, Swagger terá que encontrar uma forma de provar sua inocência.",
temporadas: 3,
encerrada: (true),
elenco: ["Ryan Phillippe (Bob Lee Swagger)", "Shantel VanSanten (Julie Swagger)", "Cynthia Addai-Robinson (Nadine Memphis)", "Omar Epps (Isaac Johnson)", "Josh Stewart (Solotov)"]
  },

obj7 = {
serie: "Unbelievable",
temporadas: 1,
encerrada: (true),
elenco: ["Kaitlyn Dever como Marie","Toni Collette como Grace Rasmussen","Merritt Wever como Karen Duvall"]
  },

obj8 = {
serie: "CSI: Crime Scene Investigation",
sinopse: "CSI revela as investigações de um grupo de cientistas forenses da polícia de Las Vegas. Esses peritos trabalham desvendando misteriosos crimes que são pouco comuns, a ponto de alguns parecerem impossíveis de se desvendar. O grupo é formato pelo Capitão James Brass que logo no início já é substituído por Gilbert Grissom, um entomologista que já integrava a equipe, pela biomédica Catherine Willows, pelo analista Nicholas Stokes, pelos químicos Warrick Brown e Gregory Sanders, pela física Sara Sidle e pelo legista Albert Robbins. A série vai mostrando o cotidiano dos investigadores, que, enquanto resolvem esses casos surpreendentes, também precisam cuidar de suas vidas.",
temporadas: 16,
encerrada: (true),
elenco: ["William L. Petersen como Gil Grissom", "Marg Helgenberger como Catherine Willows", "Gary Dourdan como Warrick Brown", "George Eads como Nick Stokes","Jorja Fox como Sara Sidel", "Paul Guilfoyle (II) como Jim Brass", "Robert David Hall como Al Robbins","Eric Szmanda como Greg Sanders", "Wallace Langham como David Hodges"]

  },

obj9 = {
serie: "Criminal Minds",
sinopse: "A BAU (Unidade de Análise Comportamental) é uma subdivisão do FBI com base em Quantico, no estado da Virginia. Quando a polícia local pede assistência para a resolução de crimes em série ou de natureza extremamente violenta, o time usa técnicas controversas como criar perfil para o suspeito, com base nas suas vítimas e nas características já conhecidas. Devido à natureza do trabalho, esses profissionais quase não têm tempo para manter uma vida pessol estável e feliz.",
temporadas: 15,
encerrada: (true),
elenco: ["Joe Mantegna como David Rossi", "Thomas Gibson como Aaron 'Hotch' Hotchner", "Shemar Moore como Derek Morgan", "Matthew Gray Gubler como Spencer Reid", "A.J. Cook como Jennifer 'JJ' Jareau", "Paget Brewster como Emily Prentiss", "Kirsten Vangsness como Penelope Garcia"]
  },

obj10 = {
serie: "Law & Order: S.V.U",
sinopse: "A vida e os desafios da Equipe Especial de Elite do Departamento de Polícia de Nova York. A 'Special Victims Unit' (Unidade de Vítimas Especiais) investiga os crimes de caráter sexual, seguindo os passos dos detetives Elliot Stabler e Olivia Benson. Com sabedoria, eles precisam ao mesmo tempo balancear os efeitos das investigações em suas vidas pessoais.",
temporadas: 24,
encerrada: (true),
elenco: ["Mariska Hargitay como Olivia Benson", "Christopher Meloni como Dét. Elliot Stabler", "Kelli Giddish como Amanda Rollins", "Ice-T como Odafin Tutuola", "Dann Florek como Cpt. Donald Cragen", "Tamara Tunie como Dr Melinda Warner"]
  },

obj11 = {
serie: "Law & Order: Org.C.",
sinopse: "Law & Order: Organized Crime é a série de drama policial spin-off de Law & Order: SVU. Na trama o detetive veterano Elliot Stabler retorna ao Departamento de Polícia de Nova York depois do assassinato de sua esposa. Elliot deseja encontrar o responsável pelo crime que o traumatizou e é posicionado como braço direito da sargento Ayanna Bell. Em seu retorno, ele percebe que a cidade e a polícia mudou drasticamente desde que se afastou. Agora, o detetive precisa se adaptar a um novo sistema enquanto lida com seus problemas pessoais. Como um dos líderes da força tarefa, Stabler terá a difícil missão de restabelecer sua vida e ao mesmo tempo lidar com organizações criminosas influentes em toda a região.",
temporadas: 3,
encerrada: (true),
elenco: ["Christopher Meloni como Elliot Stabler", "Danielle Moné Truitt como Ayanna Bell", "Tamara Taylor como Angela Wheatley", "Ainsley Seiger como Jet Sloomaekers", "Dylan McDermott como Richard M. Wheatley"]
  },

obj12 = {
serie: "Chicago PD",
sinopse: "O 21º Departamento de Polícia de Chicago é formado por dois grupos distintos: os oficiais de uniforme, que lidam com crimes urbanos e a Unidade de Inteligência que possui uma marca única de justiça para proteger a cidade que ama. Liderada pelo detetive sargento Hank Voight (Jason Beghe), a equipe combate os crimes mais hediondos da cidade: crime organizado, tráfico de drogas, assassinatos e muito mais.",
temporadas: 10,
encerrada: (true),
elenco: ["Jason Beghe como Sgt. Hank Voight", "Jon Seda como Det. Antonio Dawson", "Jesse Lee Soffer como Det. Jay Halstead", "Patrick John Flueger como Off. Adam Ruzek", "Marina Squerciati como Off. Kim Burgess", "LaRoyce Hawkins como Off. Kevin Atwater", "Amy Morton como Sgt. Trudy Platt","Tracy Spiridakos como Det. Hailey Upton","Elias Koteas como Det. Alvin Olinsky","Sophia Bush como Det. Erin Lindsay"]
  },   

obj13 = {
serie: "Bones",
sinopse:"A antropóloga forense Dra. Temperance Brennan trabalha no Jeffersoninan Institute, em Washington. Junto ao FBI, ela acompanha investigações de casos de assassinatos envolvendo restos mortais das vítimas, especialmente seus ossos. O Agente Especial Seeley Booth, arrogante porém charmoso, é quem trabalha com ela dentro da Agência de Investigação. A série explora, assim, além dos casos de assassinatos, as origens das relações entre os personagens, da amizade e do possível romance entre Booth e Brennan.",
temporadas: 3,
encerrada: (true),
elenco: ["Emily Deschanel como Temperance Brennan", "David Boreanaz como Seeley Booth", "Michaela Conlin como Angela Montenegro", "T.J. Thyne como Jack Hodgins", "Tamara Taylor como Camille Saroyan"]
  },

obj14 = {
serie: "Killing Eve",
sinopse: "Eve Polastri trabalha como agente de segurança do MI5 - serviço secreto interno do Reino Unido, mas o emprego estável e dentro de quatro paredes não satisfaz seu desejo de virar uma espiã. Quando surge a oportunidade de liderar uma divisão especial do MI6 - agência de inteligência externa, ela não pensa duas vezes e mergulha numa caçada implacável por uma serial killer. Agora, seu alvo principal é Villanelle, uma criminosa tão elegante quanto perspicaz.",
temporadas: 4,
encerrada: (true),
elenco: ["Sandra Oh como Eve Polastri", "Jodie Comer como Villanelle", "Fiona Shaw como Carolyn Martens", "Kim Bodnia como Konstantin", "Sean Delaney como Kenny Stowton"]
  },

obj15 = {
serie: "Elementary",
sinopse: "Elementary é uma adaptação de Robert Doherty para a obra de Arthur Conan Doyle, que traz os personagens Sherlock Holmes e Dr. Watson para o tempo presente, vivendo em Nova York. Na série, Watson foi transformado em mulher. Sherlock é um ex-consultor da Scotland Yard que chega em Nova York após passar um período em um centro de reabilitação para drogados. Forçado por seu abastado pai a dividir sua casa com a Dra. Joan Watson, uma cirurgiã que abandonou a profissão quando um de seus pacientes morreu, ele precisa se manter sóbrio e longe das drogas. Watson foi contratada como monitora de reabilitação, mas acaba se envolvendo com o trabalho de Sherlock como consultor da polícia de Nova York. O contato de Sherlock na polícia é o Capitão Thomas Gregson, que o conheceu em Londres.",
temporadas: 7,
encerrada: (true),
elenco: ["Jonny Lee Miller como Sherlock Holmes", "Lucy Liu como Joan Watson", "Aidan Quinn como Cp. Tobias 'Toby' Gregson", "Jon Michael Hill como Detective Marcus Bell"]
  },

obj16 = {
serie: "Mindhunter",
sinopse: "Estados Unidos, 1977. Holden Ford e Bill Tench, dois agentes do FBI, possuem um plano ambicioso em mente: desenvolver a primeira pesquisa nos EUA sobre a mente dos assassinos. Para isso, eles precisam ganhar a confiança dos detentos e superar uma série de desafios.",
temporadas: 2,
encerrada: (true),
elenco: ["Jonathan Groff (II) como Holden Ford", "Holt McCallany como Bill Tench", "Hannah Gross como Debbie Mitford", "Anna Torv como Wendy Carr", "Cotter Smith como Unit Chief Shepard"]
  },

obj17 = {
serie: "CSI: CYBER",
sinopse: "Um departamento de criminalística forense, focado em crimes virtuais. Inspirada no trabalho da psicóloga irlandesa Mary Aiken, a série é centrada em Avery Ryan, agente especial encarregada da Divisão de Crimes Virtuais do Quantico.",
temporadas: 2,
encerrada: (true),
elenco: ["Patricia Arquette como Avery Ryan", "James Van Der Beek como Elijah Mundo", "Charley Koontz como Daniel Krumitz", "Hayley Kiyoko como Raven Ramirez", "Ted Danson como D.B. Russell", "Shad Moss como Brody Nelson"]
  },

obj18 = {
serie: "Unit 42",
sinopse: "Um policial viúvo escolhido para liderar uma unidade especial de crimes cibernéticos se une a uma ex-hacker para caçar criminosos experientes em tecnologia que estão aterrorizando a Bélgica.",
temporadas: 2,
encerrada: (true),
elenco: ["Patrick Ridremont como Sam Leroy", "Constance Gay como Billie Vebber", "Tom Audenaert como Bob Franck", "Roda Fawaz como Nassim Khaoulani", "Danitza Athanassiadis como Alice Meerks"]
  }

// if(obj1||obj2||obj3||obj4||obj5||obj6||obj7||obj8||obj9||obj10||obj11||obj12||obj13||obj14||obj15||obj16||obj17||obj18){
//   subgeneros.push(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18)
// }

// console.log(subgeneros);

function verificaRenovou(obj, array){
  if(obj.encerrada === true){
    return array.push(obj)
  }else{
    alert('Objetos não adicionados')
  }
}

verificaRenovou(obj1, subgeneros);
verificaRenovou(obj2, subgeneros);
verificaRenovou(obj3, subgeneros);
verificaRenovou(obj4, subgeneros);
verificaRenovou(obj5, subgeneros);
verificaRenovou(obj6, subgeneros);
verificaRenovou(obj7, subgeneros);
verificaRenovou(obj8, subgeneros);
verificaRenovou(obj9, subgeneros);
verificaRenovou(obj10, subgeneros);
verificaRenovou(obj11, subgeneros);
verificaRenovou(obj12, subgeneros);
verificaRenovou(obj13, subgeneros);
verificaRenovou(obj14, subgeneros);
verificaRenovou(obj15, subgeneros);
verificaRenovou(obj16, subgeneros);
verificaRenovou(obj17, subgeneros);
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
const busca = (arrayObj, string)=>{
  const buscaString = arrayObj.filter((arrayObj)=>{return arrayObj.serie===string})
  if (buscaString.lenght===0){
    alert("Nenhum item encontrado")
  }else{
    return buscaString[0]
  }
}

console.log(busca(subgeneros, "Unit 42"))




  
