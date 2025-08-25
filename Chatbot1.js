const prompt = require(`prompt-sync`)();

function mostrarmenu() {
    console.log("[1] Que horas são?");
    console.log("[2] Conte uma curiosidade.");
    console.log("[3] Me diga seu nome.");
    console.log("[4]Sair");
}

function mostrarhora() {
    console.log("Alexo diz: de acordo com meus circuitos agora são 16:35 do dia 22/8/2025");
}

function mostrarcuriosidade() {
    console.log("Você sabia que a linguagem JavaScript foi criada em menos de 10 dias por Brendan Eich.");
}

function nome_assistente1() {
    console.log("Olá, meu nome é Alexo.");
}

const nome_assistente = "Alexo";
console.log(`Olá, eu sou ${nome_assistente}, seu assistente virtual.`);

let nomeusuario = prompt(`Como posso te chamar?`);
console.log(`Prazer em conhecer você ${nomeusuario}!`);

let continuar = true;

while (continuar === true) {
    mostrarmenu();

    let Escolhanumero = parseInt(prompt("Digite um número para realizar uma ação:"));
    switch(Escolhanumero) {
        case 1:
            mostrarhora();
            break;
        case 2:
            mostrarcuriosidade();
            break;
        case 3:
            nome_assistente1();
            break;
        case 4:
            ProcessingInstruction.exit();
    }
}

if (continuar) {
    prompt("/nPressione Enter para continuar...")
}
