import Materials from "../Resources/Materials"

const materials = new Materials()

const PARAMS = {
    width: 4,
    height: 3,
    depth: 3,
    material: materials.bricks, //bricks, paintedBricks, paintedPlaster, paintedWall, woodSiding
    ceiling: false,
}

export default PARAMS

