

async function pesquisar() {
    const pokemon = document.getElementById("input").value.toLowerCase();
    const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (request.ok) {
        document.getElementById("titulo").innerHTML = pokemon.toUpperCase();
        const json = await request.json();

        let info = "";
        info += `Nome: ${json.name}<br/>`

        info += `PokéID: ${json.id}<br/>`

        let tipos = "";
        tipos += `${json.types[0].type.name}`;
        for (let i = 1; i < json.types.length; i++) { 
            tipos += `, ${json.types[i].type.name}`; 
        }
        
        info += `Tipo(s): ${tipos}<br/>`

        let atrib = "";
        for (let i = 0; i < json.stats.length; i++) { 
            atrib += `• ${json.stats[i].stat.name} : ${json.stats[i].base_stat}<br/>`; 
        }

        info += `Atributos base: <br/> ${atrib} <br/>`

        document.getElementById("texto").innerHTML = info;
        document.getElementById("imagem").src = json.sprites.front_default;
    }
    else {
        document.getElementById("titulo").innerHTML = `${pokemon.toUpperCase()} NÃO ENCONTRADO!`;
        document.getElementById("texto").innerHTML = '';
        document.getElementById("imagem").src = '';
    }
}

