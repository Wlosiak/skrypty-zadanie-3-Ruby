
blocks.fill(GRASS, world(-50, 98, -40), world(20, 100, 40), FillOperation.Replace)

player.say("Zamek składa sie z 4 wież/ścian oraz budynku w środku. Jest otoczony fosą. ")
player.say("Budynek posiada okna oraz sufit/podłoge z róznych materialow")
player.say("Wieże posiadają 3 poziomy funkcjonalne na każdy można wejść. Każda wieża posiada okna.")
player.say("Z poziomu 1 można wejść na mury")
player.say("Pamiętaj aby być blisko agenta, gdyż jeśli odejdziesz zadaleko przestaje on pracować i trzeba zaczynać od nowa")
player.say("Witaj budowe uruchimisz komendą --> start  <--- wpisana w czat. Budowa trwa około 30 minut.")

player.onChat("start", function () {
    blocks.fill(GRASS, world(-50, 98, -40), world(20, 100, 40), FillOperation.Replace)
    blocks.fill(AIR, world(-50, 101, -40), world(20, 103, 40))
    blocks.fill(AIR, world(-50, 104, -40), world(20, 106, 40))
    blocks.fill(AIR, world(-50, 107, -40), world(20, 109, 40))
    blocks.fill(AIR, world(-50, 110, -40), world(20, 112, 40))
    blocks.fill(AIR, world(-50, 113, -40), world(20, 115, 40))
    blocks.fill(AIR, world(-50, 116, -40), world(20, 118, 40))
    blocks.fill(AIR, world(-50, 119, -40), world(20, 121, 40))
    blocks.fill(AIR, world(-50, 122, -40), world(20, 124, 40))
    gameplay.setGameRule(MOB_SPAWNING, false)
    player.teleport(world(0, 101, 0))
    agent.teleportToPlayer()
    agent.teleport(world(-10, 101, -7), SOUTH)
    castleBuild()
})

let count2 = 0
let count = 0



function castleBuild () {
    wall1()
    tower1()
    tower2()
    wall2()
    tower3()
    wall3()
    tower4()
    wall4()
    castleFloor()
    towerFloorrDoors()
    castleHouse()
	castleMoat()
}
function wall1 () {
	buildWall(-9, 101, -7, WEST)
	wallUpgrade(-10, 108, -7, SOUTH)
	buildGate()
}
function wall2 () {
    buildWall(-15, 101, 13, NORTH)
	wallUpgrade(-15, 108, 12, WEST)
}
function wall3 () {
    buildWall(-35, 101, 7, EAST)
	wallUpgrade(-34, 108, 7, NORTH)
}
function wall4 () {
    buildWall(-29, 101, -13, SOUTH)
	wallUpgrade(-29, 108, -12, EAST)
}
function tower1 () {
    towerBuild(-14, 101, -8, NORTH)
	towerUpgrade(1)
}
function tower2 () {
    towerBuild(-14, 101, 8, EAST)
	towerUpgrade(2)
}
function tower3 () {
    towerBuild(-30, 101, 8, SOUTH)
	towerUpgrade(3)
}
function tower4 () {
    towerBuild(-30, 101, -8, WEST)
	towerUpgrade(4)
}

function castleFloor () {
    agent.teleport(world(-13, 101, -7), WEST)
    for (let x = 0; x <= 14; x++) {
        agent.setItem(STONE_BRICKS, 64, 1)
        for (let y = 0; y <= 18; y++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            if (y < 18) {
                agent.move(FORWARD, 1)
            }
        }
        if (x < 14) {
            if (x % 2 == 0) {
                agent.turnLeft()
                agent.move(FORWARD, 1)
                agent.turnLeft()
            } else {
                agent.turnRight()
                agent.move(FORWARD, 1)
                agent.turnRight()
            }
        }
    }
    agent.turnLeft()
    agent.turnLeft()
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 2)
    castleFloorSide()
    agent.turnRight()
    agent.move(FORWARD, 16)
    agent.turnRight()
    castleFloorSide()
}

function towerFloorrDoors () {
    agent.teleport(world(-13, 101, -7), NORTH)
    buildDoor()
    agent.teleport(world(-29, 101, -9), WEST)
    buildDoor()
    agent.teleport(world(-29, 101, 9), WEST)
    buildDoor()
    agent.teleport(world(-13, 101, 7), SOUTH)
    buildDoor()
}

function castleHouse () {
    castleHouseWalls()
    castleHouseRoof()
    castleHouseStairs()
    castleWindow()
    castleHouseFloor()
    castleHouseRoofInside()
    castleTorch()
    castleThrone()
}


function castleHouseWalls () {
    agent.teleport(world(-31, 101, 6), SOUTH)
    castleHouseWallsSide()
    agent.teleport(world(-23, 101, -6), NORTH)
    castleHouseWallsSide()
    agent.teleport(world(-24, 101, 6), EAST)
    castleHouseWallsFront()
}

function castleHouseRoof () {
    castleHouseRoofSides()
    castleHouseRoofUp()
    castleHouseRoofTop()
}


function castleHouseWallsSide () {
    for (let x = 0; x <= 3; x++) {
        agent.setItem(STONE_BRICKS, 64, 1)
        for (let y = 0; y <= 8; y++) {
            agent.place(FORWARD)
            if (y < 8) {
                if (x % 2 == 0) {
                    agent.move(LEFT, 1)
                } else {
                    agent.move(RIGHT, 1)
                }
            }
        }
        agent.move(UP, 1)
    }
}

function castleHouseRoofSides () {
    agent.teleport(world(-24, 106, -7), SOUTH)
    castleHouseRoofSide(1)
    agent.teleport(world(-24, 106, 7), NORTH)
    castleHouseRoofSide(2)
}



function castleHouseRoofUp () {
    agent.teleport(world(-23, 106, -7), WEST)
    count = 15
    for (let index = 0; index < 3; index++) {
        agent.setItem(DARK_OAK_WOOD_STAIRS, 64, 1)
        for (let index2 = count; index2 > 0; index2--) {
        agent.place(DOWN)
        if(index2 > 1){
            agent.move(LEFT, 1)
        }  
    }
count = count - 2
        agent.move(RIGHT, count)
        agent.move(UP, 1)
        agent.move(FORWARD, 1)
    }
}
function upgradeWallOneSide () {
    agent.setItem(STONE_BRICKS, 64, 1)
    moveAndPlaceDownWall(2)
    agent.turnLeft()
    agent.turnLeft()
    agent.move(UP, 1)
    moveAndPlaceDownWall(1)
    agent.turnLeft()
    agent.turnLeft()
    agent.move(UP, 1)
    moveAndPlaceDownWall(2)
}

function houseStairSide () {
    agent.setItem(STONE_BRICKS, 64, 1)
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    agent.place(DOWN)
    agent.move(UP, 1)
    agent.place(DOWN)
}
function towerRoof () {
    agent.setItem(STONE_BRICKS, 64, 1)
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 2)
    agent.move(DOWN, 2)
    for (let x = 0; x <= 4; x++) {
        moveAndPlaceDownSpec(5, 1, false)
        if (x < 4) {
            agent.move(BACK, 5)
            agent.move(RIGHT, 1)
        }
    }
    agent.move(BACK, 1)
    agent.destroy(DOWN)
    agent.move(DOWN, 1)
    agent.setItem(LADDER, 64, 1)
    for (let y = 0; y < 17; y++) {
        agent.place(FORWARD)
        agent.move(DOWN, 1)
    }
}
function castleTorch () {
    agent.teleport(world(-31, 103, 3), WEST)
    agent.setItem(TORCH, 64, 1)
    agent.place(FORWARD)
    agent.move(RIGHT, 6)
    agent.place(FORWARD)
    agent.teleport(world(-21, 103, 2), WEST)
    agent.place(DOWN)
    agent.move(RIGHT, 4)
    agent.place(DOWN)
}
function castleHouseWallsFront () {
    for (let x = 0; x <= 3; x++) {
        agent.setItem(STONE_BRICKS, 64, 1)
        for (let y = 0; y <= 12; y++) {
            agent.place(FORWARD)
            if (y < 12) {
                if (x % 2 == 0) {
                    agent.move(LEFT, 1)
                } else {
                    agent.move(RIGHT, 1)
                }
            }
        }
        agent.move(UP, 1)
    }
}
function moveAndPlaceDownWall (typ: number) {
    if (typ == 1) {
        for (let x = 0; x <= 14; x++) {
            agent.place(DOWN)
            if (x < 14) {
                agent.move(FORWARD, 1)
            }
        }
    } else if (typ == 2) {
        for (let y = 0; y <= 7; y++) {
            agent.place(DOWN)
            if (y < 7) {
                agent.move(FORWARD, 2)
            }
        }
    }
}
function towerInside (count: number) {
    towerFirstFloor()
    towerSecondFloor(count)
    towerThirdFloor(count)
}
function castleHouseFloor () {
    agent.teleport(world(-24, 102, -6), WEST)
    for (let x = 0; x <= 12; x++) {
        agent.setItem(RED_WOOL, 64, 1)
        for (let y = 0; y <= 7; y++) {
            agent.place(DOWN)
            if (y < 7) {
                agent.move(FORWARD, 1)
            }
        }
        agent.turnLeft()
        agent.turnLeft()
        if (x % 2 == 0) {
            agent.move(RIGHT, 1)
        } else {
            agent.move(LEFT, 1)
        }
    }
    agent.teleport(world(-23, 102, 0), WEST)
    agent.place(DOWN)
}
function upgradeGate1 () {
    agent.teleport(world(-11, 101, -2), NORTH)
    for (let index = 0; index < 5; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.move(DOWN, 1)
    for (let index = 0; index < 5; index++) {
        agent.place(UP)
        agent.move(BACK, 1)
    }
    agent.move(FORWARD, 1)
    agent.turnLeft()
    agent.turnLeft()
    for (let index = 0; index < 5; index++) {
        agent.place(FORWARD)
        agent.move(DOWN, 1)
    }
    agent.move(UP, 1)
}
function castleHouseStairs () {
    agent.teleport(world(-21, 102, -2), WEST)
    houseStairSide()
    agent.teleport(world(-21, 102, 2), WEST)
    houseStairSide()
    agent.move(RIGHT, 1)
    agent.move(DOWN, 1)
    for (let index = 0; index < 3; index++) {
        agent.place(DOWN)
        agent.move(RIGHT, 1)
    }
    agent.move(BACK, 1)
    agent.move(LEFT, 2)
    agent.setItem(STONE_BRICKS_SLAB, 64, 1)
    for (let index = 0; index < 3; index++) {
        agent.place(DOWN)
        agent.move(RIGHT, 1)
    }
    agent.teleport(world(-22, 102, 0), WEST)
    buildDoor()
}
function castleMoat () {
    agent.setItem(WATER_BUCKET, 64, 1)
    agent.teleport(world(-9, 101, -7), SOUTH)
    for (let x = 0; x <= 3; x++) {
        for (let y = 0; y <= 14; y++) {
            agent.destroy(DOWN)
            agent.move(DOWN, 1)
            agent.destroy(DOWN)
            if (y % 2 == 0) {
                agent.place(DOWN)
            }
            agent.move(UP, 1)
            if (y < 14) {
                agent.move(FORWARD, 1)
            }
        }
        agent.turnLeft()
        agent.turnLeft()
        if (x % 2 == 0) {
            agent.move(RIGHT, 1)
        } else {
            agent.move(LEFT, 1)
        }
    }
	castleBridge()
	castleMoatWalls()
}

function castleFloorSide () {
    for (let x = 0; x <= 1; x++) {
        agent.setItem(STONE_BRICKS, 64, 1)
        for (let y = 0; y <= 14; y++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            if (y < 14) {
                agent.move(FORWARD, 1)
            }
        }
        if (x < 1) {
            agent.turnLeft()
            agent.move(FORWARD, 1)
            agent.turnLeft()
        }
    }
}
function towerThirdFloor (count: number) {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(UP, 5)
    towerFloor()
    agent.turnRight()
    agent.move(RIGHT, 2)
    towerThirdFloorWindows()
}
function buildMoat (x: number, y: number) {
    agent.setItem(WATER_BUCKET, 64, 1)
    for (let index = 0; index <= x - 1; index++) {
        for (let index2 = 0; index2 <= y - 1; index2++) {
            agent.destroy(DOWN)
            agent.move(DOWN, 1)
            agent.destroy(DOWN)
            if (index2 % 2 == 0) {
                agent.place(DOWN)
            }
            agent.move(UP, 1)
            if (index2 < y - 1) {
                agent.move(FORWARD, 1)
            }
        }
        agent.turnLeft()
        agent.turnLeft()
        if (index % 2 == 0) {
            agent.move(RIGHT, 1)
        } else {
            agent.move(LEFT, 1)
        }
    }
}
function towerUpgrade (count: number) {
    towerBalustrade()
    towerRoof()
    towerInside(count)
}

function towerFirstFloor () {
    agent.setItem(STONE_BRICKS, 64, 1)
    agent.turnLeft()
    agent.turnLeft()
    for (let x = 0; x <= 4; x++) {
        moveAndPlaceDownSpec(5, 1, true)
        if (x < 4) {
            agent.move(BACK, 5)
            agent.move(RIGHT, 1)
        }
    }
}

function castleHouseRoofTop () {
    agent.teleport(world(-26, 108, -4), WEST)
    for (let index = 0; index < 5; index++) {
        agent.setItem(PLANKS_DARK_OAK, 64, 1)
        for (let index2 = 0; index2 <= 8; index2++) {
            agent.place(DOWN)
            if (index2 < 8) {
                agent.move(LEFT, 1)
            }
        }
        agent.move(FORWARD, 1)
        agent.move(RIGHT, 8)
    }
}
function castleThrone () {
    agent.teleport(world(-29, 102, -1), WEST)
    for (let x = 0; x <= 2; x++) {
        agent.setItem(PLANKS_DARK_OAK, 64, 1)
        for (let y = 0; y <= 2; y++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            if (y < 2) {
                agent.move(FORWARD, 1)
            }
        }
        agent.turnLeft()
        agent.turnLeft()
        if (x % 2 == 0) {
            agent.move(RIGHT, 1)
        } else {
            agent.move(LEFT, 1)
        }
    }
    agent.teleport(world(-29, 102, 0), WEST)
    agent.setItem(DARK_OAK_WOOD_STAIRS, 64, 1)
    agent.place(FORWARD)
}
function towerBalustrade () {
    agent.setItem(STONE_BRICKS, 64, 1)
    agent.move(LEFT, 1)
    agent.move(BACK, 1)
    for (let index = 0; index < 4; index++) {
        moveAndPlaceDownSpec(4, 2, false)
        agent.turnRight()
    }
    agent.move(UP, 1)
    for (let index = 0; index < 4; index++) {
        moveAndPlaceDownSpec(8, 1, false)
        agent.turnRight()
    }
    agent.move(UP, 1)
    for (let index = 0; index < 4; index++) {
        moveAndPlaceDownSpec(4, 2, false)
        agent.turnRight()
    }
}

function buildGate () {
    insideGate()
    upgradeGate1()
    upgradeGate2()
}
function upgradeWallFloor () {
    agent.setItem(PLANKS_OAK, 64, 1)
    moveAndPlaceDownWall(1)
}
function buildWindow () {
    agent.move(UP, 1)
    agent.destroy(FORWARD)
    agent.move(UP, 1)
    agent.destroy(FORWARD)
    agent.move(DOWN, 2)
}

function castleHouseRoofSide (typ: number) {
    count2 = 7
    for (let index = 0; index < 3; index++) {
        agent.setItem(DARK_OAK_WOOD_STAIRS, 64, 1)
        for (let x = count2; x > 0; x--) {
        agent.place(DOWN)
        if(x > 1){
            if(typ == 1){
                agent.move(RIGHT, 1)    
            }else{
                 agent.move(LEFT, 1) 
            }
            
        }  
    }
count2 = count2 - 2
        if (typ == 1) {
            agent.move(LEFT, count2)
        } else {
            agent.move(RIGHT, count2)
        }
        count2 += 1
        agent.move(UP, 1)
        agent.move(FORWARD, 1)
    }
}


function towerDoors () {
    buildDoor()
    agent.move(BACK, 2)
    agent.turnRight()
    agent.move(FORWARD, 2)
    buildDoor()
}
function towerSecondFloorWindows () {
    buildWindow()
    agent.move(BACK, 2)
    agent.turnLeft()
    agent.move(FORWARD, 2)
    buildWindow()
}
player.onChat("agentDoMnie", function () {
    agent.teleportToPlayer()
})

function castleMoatWalls () {
     agent.teleport(world(-7, 101, 8), SOUTH)
     buildMoat(2,9)
     agent.teleport(world(-8, 101, 15), WEST)
     buildMoat(2,31)
     agent.teleport(world(-37, 101, 14), NORTH)
     buildMoat(2,31)
     agent.teleport(world(-36, 101, -15), EAST)
     buildMoat(2,31)
    agent.teleport(world(-7, 101, -14), SOUTH)
    buildMoat(2, 7)
}
function castleBridge () {
    agent.setItem(PLANKS_DARK_OAK, 64, 1)
    agent.teleport(world(-6, 101, 2), WEST)
    for (let x = 0; x <= 4; x++) {
        for (let index214 = 0; index214 <= 3; index214++) {
            agent.place(DOWN)
            if (index214 < 3) {
                agent.move(FORWARD, 1)
            }
        }
        agent.turnLeft()
        agent.turnLeft()
        if (x % 2 == 0) {
            agent.move(LEFT, 1)
        } else {
            agent.move(RIGHT, 1)
        }
    }
}

function moveAndPlaceDownSpec (count: number, offs: number, destroy: boolean) {
    for (let index = 0; index < count; index++) {
        if (destroy) {
            agent.destroy(DOWN)
        }
        agent.place(DOWN)
        agent.move(FORWARD, offs)
    }
}

function buildDoor () {
    agent.destroy(FORWARD)
    agent.move(UP, 1)
    agent.destroy(FORWARD)
    agent.move(FORWARD, 1)
    agent.destroy(DOWN)
    agent.move(DOWN, 1)
    agent.destroy(DOWN)
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.place(DOWN)
    agent.move(BACK, 1)
    agent.setItem(OAK_DOOR, 64, 1)
    agent.place(FORWARD)
}

function upgradeGate2 () {
    agent.setItem(STONE_BRICK_STAIRS, 64, 1)
    agent.teleport(world(-10, 104, 2), SOUTH)
    agent.place(UP)
    agent.move(RIGHT, 2)
    agent.place(UP)
    agent.turnLeft()
    agent.turnLeft()
    agent.move(FORWARD, 4)
    agent.place(UP)
    agent.move(RIGHT, 2)
    agent.place(UP)
    agent.move(LEFT, 1)
    agent.turnLeft()
    agent.turnLeft()
    agent.setItem(OAK_FENCE, 64, 1)
    for (let index = 0; index < 5; index++) {
        agent.place(UP)
        agent.move(FORWARD, 1)
    }
    agent.setItem(STONE_BRICKS, 64, 1)
    agent.move(DOWN, 3)
    agent.move(LEFT, 1)
    agent.turnLeft()
    agent.turnLeft()
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 5; index++) {
            agent.destroy(DOWN)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 5)
        agent.move(LEFT, 1)
    }
}
function castleHouseRoofInside () {
    agent.teleport(world(-24, 104, -6), WEST)
    for (let x = 0; x <= 12; x++) {
        agent.setItem(PLANKS_BIRCH, 64, 1)
        for (let index22 = 0; index22 <= 7; index22++) {
            agent.place(UP)
            if (index22 < 7) {
                agent.move(FORWARD, 1)
            }
        }
        agent.turnLeft()
        agent.turnLeft()
        if (x % 2 == 0) {
            agent.move(RIGHT, 1)
        } else {
            agent.move(LEFT, 1)
        }
    }
}
function towerFloor () {
    agent.turnRight()
    agent.turnRight()
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (x != 0 || y != 0) {
                agent.place(DOWN)
            }
            agent.move(FORWARD, 1)
        }
        if (x < 4) {
            agent.move(BACK, 5)
            agent.move(RIGHT, 1)
        }
    }
}
function towerSecondFloor (count: number) {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.turnLeft()
    agent.move(FORWARD, 5)
    agent.turnLeft()
    agent.move(FORWARD, 5)
    agent.move(UP, 7)
    towerFloor()
    agent.move(LEFT, 2)
    towerDoors()
    agent.turnRight()
    agent.turnRight()
    agent.move(FORWARD, 4)
    towerSecondFloorWindows()
    agent.move(RIGHT, 2)
}
function insideGate () {
    agent.teleport(world(-9, 101, -2), WEST)
    for (let x = 0; x < 2; x++) {
        for (let y = 0; y < 5; y++) {
            for (let z = 0; z < 5; z++) {
                agent.destroy(FORWARD)
                agent.move(UP, 1)
            }
            agent.move(DOWN, 5)
            agent.move(LEFT, 1)
        }
        agent.move(RIGHT, 5)
        agent.move(FORWARD, 2)
    }
}

function buildDoubleWindow () {
    buildWindow()
    agent.move(LEFT, 2)
    buildWindow()
}
function castleWindow () {
    agent.teleport(world(-22, 102, -5), WEST)
    buildWindow()
    agent.teleport(world(-25, 102, 8), NORTH)
    buildWindow()
    agent.teleport(world(-22, 102, 5), WEST)
    buildWindow()
    agent.teleport(world(-25, 102, -8), SOUTH)
    buildWindow()
}

function towerThirdFloorWindows () {
    buildWindow()
    agent.move(BACK, 2)
    agent.turnLeft()
    agent.move(FORWARD, 2)
    buildWindow()
    agent.move(BACK, 1)
    agent.turnLeft()
    agent.move(FORWARD, 2)
    buildDoubleWindow()
    agent.move(BACK, 1)
    agent.turnLeft()
    agent.move(FORWARD, 1)
    buildDoubleWindow()
}


function buildWall (x: number, y: number, z:number,  direction: CompassDirection) {
    agent.teleport(world(x,y,z), direction)
    agent.setItem(STONE_BRICKS, 64, 1)
    agent.move(FORWARD, 1)
    agent.turnLeft()
    for (let index = 0; index < 7; index++) {
        agent.move(UP, 1)
        for (let index2 = 0; index2 < 2; index2++) {
            moveAndPlaceDownWall(1)
            agent.turnLeft()
            agent.turnLeft()
            agent.move(LEFT, 2)
        }
    }
}
function towerBuild ( x: number, y: number, z:number,  direction: CompassDirection) {
    agent.teleport(world(x,y,z), direction)
    for (let level = 0; level < 17; level++) {
        agent.setItem(STONE_BRICKS, 64, 1)
        agent.move(UP, 1)
        for (let walls = 0; walls < 4; walls++) {
            moveAndPlaceDownSpec(6, 1, false);
            agent.turnRight()
        }
    }
}
function wallUpgrade (x: number, y: number, z:number,  direction: CompassDirection) {
    agent.teleport(world(x,y,z), direction)
    agent.move(RIGHT,1)
    upgradeWallFloor()
    agent.teleport(world(x,y,z), direction)
    agent.move(LEFT,1)
    upgradeWallOneSide();
    agent.teleport(world(x,y,z), direction)
    agent.move(RIGHT, 3)
    upgradeWallOneSide();
}
