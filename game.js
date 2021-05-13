let characters = [
  bob = {
    name: "Bob",
    health: 100,
    hits: 0,
    block: false,
    dodge: false
  },
  harry = {
    name: "Harry",
    health: 100,
    hits: 0,
    block: false,
    dodge: false
  }
]

drawCharacter(0)

function drawCharacter(number){
  let fighterImg = document.getElementById("fighter-img")
  let fighterHealth = document.getElementById("fighter-health")
  let fighterHits = document.getElementById("fighter-hits")
  let fighterName = document.getElementById("fighter-name")
  let healthBar = document.getElementById("health-bar")
  let slapButton = document.getElementById("target-button")

  fighterImg.src = `https://robohash.org/${characters[number].name}.png`
  fighterHealth.innerHTML = characters[number].health
  healthBar.style.width = `${characters[number].health}%`
  fighterHits.innerHTML = characters[number].hits
  fighterName.innerHTML = characters[number].name
  slapButton.innerHTML = `
      <button onclick="slapTarget(${number})" class="btn btn-primary">Slap</button>
      <button onclick="kickTarget(${number})"class="btn btn-primary">Kick</button>
      <button onclick="punchTarget(${number})"class="btn btn-primary">Punch</button>
      <button onclick="blockTarget(${number})"class="btn btn-primary">Block</button>
      <button onclick="dodgeTarget(${number})"class="btn btn-primary">Dodge</button>
      <button onclick="resetGame(${number})" class="btn btn-danger">Reset</button>
    `
}

function slapTarget(number){
  let currentHealth = characters[number].health
  let currentHits = characters[number].hits

  let mod = blockOrDodge(characters[number].block, characters[number].dodge)

  if(currentHealth > 0){
    currentHits++
    currentHealth = currentHealth + mod - 5
    characters[number].hits = currentHits
    characters[number].health = currentHealth
    drawCharacter(number)
  }
}

function kickTarget(number){
  let currentHealth = characters[number].health
  let currentHits = characters[number].hits

  let mod = blockOrDodge(characters[number].block, characters[number].dodge)

  if(currentHealth >= 10){
    currentHits++
    currentHealth = currentHealth + mod - 10
    characters[number].hits = currentHits
    characters[number].health = currentHealth
    drawCharacter(number)
  }
}

function punchTarget(number){
  let currentHealth = characters[number].health
  let currentHits = characters[number].hits

  let mod = blockOrDodge(characters[number].block, characters[number].dodge)

  if(currentHealth >= 20){
    currentHits++
    currentHealth = currentHealth + mod - 20
    characters[number].hits = currentHits
    characters[number].health = currentHealth
    drawCharacter(number)
  }
}

function blockTarget(number){
  characters[number].block = true
  characters[number].dodge = false
}

function dodgeTarget(number){
  characters[number].dodge = true
  characters[number].block = false
}

function blockOrDodge(block, dodge){
  if(block){
    return 5
  }
  if(dodge){
    let dodgeNum = Math.floor(Math.random() * 11)
    if(dodgeNum > 5){
      return 10
    }else if(dodgeNum < 5){
      return -10
    }
  }
  return 0
}

function resetGame(number){
  characters = [
    bob = {
      name: "Bob",
      health: 100,
      hits: 0,
      block: false,
      dodge: false
    },
    harry = {
      name: "Harry",
      health: 100,
      hits: 0,
      block: false,
      dodge: false
    }
  ]
  drawCharacter(number)
}