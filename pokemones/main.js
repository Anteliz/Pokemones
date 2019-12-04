let pokemones = []

class Pokemon{
    constructor(nombre, color, tipo, ataque, vida){

    this.nombre = nombre
    this.color = color
    this.tipo = tipo
    this.ataque = ataque
    this.vida = vida
    }

    descripcion(){
        return  `Hola soy ${this.nombre}, soy de color ${this.color},
        y tengo ${this.vida} puntos de vida`
    }

    atacar(pokemon){
        pokemon.vida-= this.ataque
    }
}

function main(){

let pikachu = new Pokemon('pikachu','amarillo','electrico',10,100)

let charizard = new Pokemon('charizard','naranja','fuego',30, 120)

let squirtle = new Pokemon('squirlte','azul','agua',10,100)

pokemones.push(pikachu)
pokemones.push(charizard)
pokemones.push(squirtle)

llenarSelect('pokemon1',pokemones)
llenarSelect('pokemon2',pokemones)

}

function llenarSelect(idSelect, pokemones){
    const select = document.querySelector('#'+idSelect)
    let aux = ""
    pokemones.forEach(pokemon => {
        aux = document.createElement('option')
        aux.innerHTML=pokemon.nombre
        select.appendChild(aux)
    });
}

function pelear(){
    const poke1 = document.querySelector('#pokemon1').value
    const poke2 = document.querySelector('#pokemon2').value
    const res = document.querySelector('#Resultado')

    let pokemon1 = pokemones.filter(e=>{
        return e.nombre === poke1
    })[0]

    let pokemon2 = pokemones.filter(e=>{
        return e.nombre === poke2
    })[0]

    if(pokemon1 === pokemon2){
        alert('no mames escoge otro contrincante')
    }
    else if(pokemon1.vida<=0){
        alert('este pokemon ya valio madres')
    }
    else if(pokemon2.vida<=0){
        alert('dejalo ya esta muerto')
    }
    else{
        pokemon1.atacar(pokemon2)
        res.innerHTML= `${pokemon1.nombre} ataco a ${pokemon2.nombre}
        y tiene una vida de ${pokemon2.vida}`
    }
}

main() 