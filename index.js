let heroName = "Cavaleiro que diz Ni"

let heroXP = 100000

let heroLevel = "noob"


if(heroXP <= 1000){
    heroLevel = "Ferro"
}else if(heroXP <= 2000){
    heroLevel = "Bronze"
}else if(heroXP <= 5000){
    heroLevel = "Prata"
}else if(heroXP <= 7000){
    heroLevel = "Ouro"
}else if(heroXP <= 8000){
    heroLevel = "Platina"
}else if(heroXP <= 9000){
    heroLevel = "Ascendente"
}else if(heroXP <= 10000){
    heroLevel = "Imortal"
}else if(heroXP >= 10001){
    heroLevel = "Radiante"
}


switch (heroLevel) {
    case "Ferro":
        console.log("Seja bem vindo a jornada " + heroName + ", no momento você está no nível " + heroLevel + ".");
        break;
    case "Ascendente":
        console.log("Olá, " + heroName + ", vejo que você está no nível " + heroLevel + " e já é quase um Imortal.");
        break;
    case "Imortal":
        console.log("Muito bem " + heroName + ", percebo que você já está no nível " + heroLevel + " e agora nada mais pode te parar.");
        break;
    case "Radiante":
        console.log("Parabéns " + heroName + ", você chegou ao nível " + heroLevel + " e já pode se considerar um herói lendário.");
        break;
    default:
        console.log("Olá, " + heroName + ", no momento você está no nível " + heroLevel + ".");
}