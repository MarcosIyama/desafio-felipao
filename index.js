let heroName = "Cavaleiro que diz Ni"

let heroXP = 95000

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



console.log("Olá, " + heroName + ", você está no nível " + heroLevel)