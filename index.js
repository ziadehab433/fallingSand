let con = document.getElementById("container")
let grid = []
let particles = []

let conHeight = 600
let conWidth = 900
let particleSize = 10
let framePer = 10

let colNum = conWidth/particleSize
let rowNum = conHeight/particleSize

let mouseOnHold = false

let idc = 1

con.style.height = conHeight + "px"
con.style.width = conWidth + "px"

start() 

function start() { 
    buildGrid()
    setInterval(tick, framePer)
}

function tick() { 
    updateGrid()
    drawGrid()
}

function updateGrid() { 
    for(let i = (rowNum - 1); i >= 0; i--){ 
        for(let j = (colNum - 1); j >= 0; j--){ 
            if(grid[i][j] == 0) continue
            if(i == (rowNum - 1)) continue

            if(grid[i + 1][j] == 0) { 
                grid[i + 1][j] = 1, grid[i][j] = 0
                continue
            }

            if(j + 1 < colNum && j - 1 >= colNum && grid[i + 1][j + 1] == 0 && grid[i + 1][j - 1] == 0) { 
                if(Math.random() > 0.5) { 
                    grid[i + 1][j + 1] = 1, grid[i][j] = 0
                }else { 
                    grid[i + 1][j - 1] = 1, grid[i][j] = 0
                }
                continue
            }

            if(j + 1 >= colNum || grid[i + 1][j + 1] == 1) { 
                if(grid[i + 1][j - 1] == 0) { 
                    grid[i + 1][j - 1] = 1, grid[i][j] = 0
                }
                continue
            }

            if(j - 1 < colNum || grid[i + 1][j - 1] == 1) { 
                if(grid[i + 1][j + 1] == 0) { 
                    grid[i + 1][j + 1] = 1, grid[i][j] = 0
                }
                continue
            }
        }
    }
}

function drawGrid() { 
    for(let i = 0; i < rowNum; i++) {
        for(let j = 0; j < colNum; j++){ 
            if (grid[i][j] == 0) { 
                particles[i][j].style.backgroundColor = "white"
            }else { 
                particles[i][j].style.backgroundColor = "black"
            }
        }
    }
}

function buildGrid() { 
    con.style.gridTemplateColumns = "repeat(" + colNum + ", 1fr)";

    for(let i = 0; i < rowNum; i++){ 
        let row = []
        let particleRow = []

        for(let j = 0; j < colNum; j++){ 
            let newParticle = createSandParticle()
            particleRow.push(newParticle)
            row.push(0)
            con.appendChild(newParticle)
        }

        grid.push(row)
        particles.push(particleRow)
    }
}

function createSandParticle() { 
    let div = document.createElement("div")
    div.className = "sandParticle"
    div.style.height = particleSize + "px"
    div.style.width = particleSize + "px"
    addEventListener("mouseover", deploySand)

    div.setAttribute("id", idc)
    idc++
    return div
}

function deploySand() { 
    if(!mouseOnHold) {
        return
    }

    let particle = event.target
    particle.style.backgroundColor = "black"

    id = particle.id
    row = Math.floor(id / colNum) - 1
    smth = (id / colNum) - Math.floor(id / colNum)
    col = smth == 0 ? (colNum - 1) : Math.round((smth * colNum) - 1)

    grid[row][col] = 1
}

function hold() { 
    mouseOnHold = true
}

function unHold() { 
    mouseOnHold = false
}
