let con = document.getElementById("container")
let grid = []

conHeight = 600
conWidth = 900
particleSize = 10

mouseOnHold = false

con.style.height = conHeight + "px"
con.style.width = conWidth + "px"

start() 

function start() { 
    buildGrid()
    setInterval(makeItFall, 5000)
}

function makeItFall() { 
    for(let i = 0; i < grid.length; i++){ 
        for(let j = 0; j < grid[0].length; j++){ 
            if(grid[i][j].style.backgroundColor = "black" && i < conHeight/particleSize - 1 && j < conWidth/particleSize - 1){ 
                grid[i][j].style.backgroundColor = "white"
                grid[i + 1][j].style.backgroundColor = "black"
                console.log("i: ", i, ", j: ", j)
            }
        }
    }
    console.log("finished a loop")
}

function buildGrid() { 
    let colNum = conWidth/particleSize
    let rowNum = conHeight/particleSize
    con.style.gridTemplateColumns = "repeat(" + conWidth/particleSize + ", 1fr)";

    for(let i = 0; i < rowNum; i++){ 
        let row = []

        for(let j = 0; j < colNum; j++){ 
            let newParticle = createSandParticle()
            row.push(newParticle)

            con.appendChild(newParticle)
        }

        grid.push(row)
    }
}

function createSandParticle() { 
    let div = document.createElement("div")
    div.className = "sandParticle"
    div.style.height = particleSize + "px"
    div.style.width = particleSize + "px"
    addEventListener("mouseover", deploySand)
    return div
}

function deploySand() { 
    if(!mouseOnHold) {
        return
    }

    let particle = event.target
    particle.style.backgroundColor = "black"
}

function hold() { 
    mouseOnHold = true
}

function unHold() { 
    mouseOnHold = false
}
