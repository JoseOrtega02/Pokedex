const input = document.getElementById('input')
const btn = document.getElementById('search')

const name = document.getElementById('name')
const img = document.getElementById('img')
const typeDiv = document.getElementById('typeDiv')
const desc = document.getElementById('desc')




// ul stats
const hp = document.getElementById('hp')
const atck = document.getElementById('atck')
const df = document.getElementById('df')
const spAtck = document.getElementById('spAtck')
const spDfn = document.getElementById('spDfn')
const spd = document.getElementById('spd')

// event listener
btn.addEventListener('click',()=>{
	let h4 = document.getElementsByTagName("h4")
	// limpiar tipos
	typeDiv.innerHTML = ""

	// api
	let pokeName = input.value
	let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`
   // fetch
   fetch(url)
   .then(response => response.json())
   .then(data =>{
   	  const {forms ,types, stats,sprites,id } = data;
   	  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      
     // nombre
      name.innerHTML = `${forms[0]["name"]}`
    // imagen
      img.setAttribute("src",sprite)
    // tipos
      for (var i = 0; i < types.length; i++) {
      	types[i]
      	
      	typeDiv.innerHTML += `<h4 class="color">${types[i].type["name"]}</h4>`
      }

      // colorear los tipos

      let h4 = typeDiv.children
      for (var i = h4.length - 1; i >= 0; i--) {
      	h4[i]
      	if (h4[i]["innerText"] === "electric") {
      		h4[i].style.background = "#FFDD77"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "steel") {
      		h4[i].style.background = "#CCCCDD"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "water") {
      		h4[i].style.background = "#3399FF"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "bug") {
      		h4[i].style.background = "#AABB22"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "dragon") {
      		h4[i].style.background = "#7766EE"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "ghost") {
      		h4[i].style.background = "#9999CC"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "fire") {
      		h4[i].style.background = "#FF4422"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "fairy") {
      		h4[i].style.background = "#FFAAFF"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "ice") {
      		h4[i].style.background = "#77DDFF"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "fighting") {
      		h4[i].style.background = "#BB5544"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "normal") {
      		h4[i].style.background = "#DDDDCC"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "grass") {
      		h4[i].style.background = "#BBEE99"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "psychic") {
      		h4[i].style.background = "#FF5599"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "rock") {
      		h4[i].style.background = "#BBAA66"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "dark") {
      		h4[i].style.background = "#775544"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "ground") {
      		h4[i].style.background = "#DDBB55"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "poison") {
      		h4[i].style.background = "#CC88BB"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      	if (h4[i]["innerText"] === "flying") {
      		h4[i].style.background = "#99BBFF"
      		h4[i].style.color = "black"
      		h4[i].style.border = "3px solid black"
      		h4[i].style.borderRadius = "25px"
      		h4[i].style.padding = "3px"
      	}
      }
    // descripcion
      hp.innerHTML = `Hp:${stats[0]["base_stat"]}`
      atck.innerHTML = `Attack:${stats[1]["base_stat"]}`
      df.innerHTML = `Defense:${stats[2]["base_stat"]}`
      spAtck.innerHTML = `Spec.Attack:${stats[3]["base_stat"]}`
      spDfn.innerHTML = `Spec.Defense:${stats[4]["base_stat"]}`
      spd.innerHTML = `Speed:${stats[5]["base_stat"]}`
   })
    .catch(()=>{
   	alert("pokemon dont found")
   })
    
   
    
})
  

// function

