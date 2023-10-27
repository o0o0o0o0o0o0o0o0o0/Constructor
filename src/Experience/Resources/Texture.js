import * as THREE from 'three'

import Loaders from '../Utils/Loaders'

export default class Textures
{
    constructor()
    {
        this.loader = new Loaders()

        this.environmentMap = this.loader.cube.load([
            '../../envMap/01/px.png',
            '../../envMap/01/nx.png',
            '../../envMap/01/py.png',
            '../../envMap/01/ny.png',
            '../../envMap/01/pz.png',
            '../../envMap/01/nz.png',
        ])

        // Bricks
        const bricks_x = 0.7
        const bricks_y = 0.7
        this.bricksColor = this.loader.textures.load('../../textures/Bricks061_1K-JPG/Bricks061_1K-JPG_Color.jpg')
        this.bricksColor.repeat.x = bricks_x
        this.bricksColor.repeat.y = bricks_y
        this.bricksColor.wrapS = THREE.RepeatWrapping
        this.bricksColor.wrapT = THREE.RepeatWrapping
        this.bricksDisplacement = this.loader.textures.load('../../textures/Bricks061_1K-JPG/Bricks061_1K-JPG_Displacement.jpg')
        this.bricksDisplacement.repeat.x = bricks_x
        this.bricksDisplacement.repeat.y = bricks_y
        this.bricksDisplacement.wrapS = THREE.RepeatWrapping
        this.bricksDisplacement.wrapT = THREE.RepeatWrapping
        this.bricksNormalGL = this.loader.textures.load('../../textures/Bricks061_1K-JPG/Bricks061_1K-JPG_NormalGL.jpg')
        this.bricksNormalGL.repeat.x = bricks_x
        this.bricksNormalGL.repeat.y = bricks_y
        this.bricksNormalGL.wrapS = THREE.RepeatWrapping
        this.bricksNormalGL.wrapT = THREE.RepeatWrapping
        // this.bricksAmbientOcclusion = this.loader.textures.load('../../textures/Bricks061_1K-JPG/Bricks061_1K-JPG_AmbientOcclusion.jpg')
        // this.bricksAmbientOcclusion.repeat.x = bricks_x
        // this.bricksAmbientOcclusion.repeat.y = bricks_y
        // this.bricksAmbientOcclusion.wrapS = THREE.RepeatWrapping
        // this.bricksAmbientOcclusion.wrapT = THREE.RepeatWrapping
        this.bricksRoughness = this.loader.textures.load('../../textures/Bricks061_1K-JPG/Bricks061_1K-JPG_Roughness.jpg')
        this.bricksRoughness.repeat.x = bricks_x
        this.bricksRoughness.repeat.y = bricks_y
        this.bricksRoughness.wrapS = THREE.RepeatWrapping
        this.bricksRoughness.wrapT = THREE.RepeatWrapping

        // Painted Bricks
        const paintedBricks_x = 0.7
        const paintedBricks_y = 0.7
        this.paintedBricksColor = this.loader.textures.load('../../textures/PaintedBricks001_1K-JPG/PaintedBricks001_1K-JPG_Color.jpg')
        this.paintedBricksColor.repeat.x = paintedBricks_x
        this.paintedBricksColor.repeat.y = paintedBricks_y
        this.paintedBricksColor.wrapS = THREE.RepeatWrapping
        this.paintedBricksColor.wrapT = THREE.RepeatWrapping
        this.paintedBricksDisplacement = this.loader.textures.load('../../textures/PaintedBricks001_1K-JPG/PaintedBricks001_1K-JPG_Displacement.jpg')
        this.paintedBricksDisplacement.repeat.x = paintedBricks_x
        this.paintedBricksDisplacement.repeat.y = paintedBricks_y
        this.paintedBricksDisplacement.wrapS = THREE.RepeatWrapping
        this.paintedBricksDisplacement.wrapT = THREE.RepeatWrapping
        this.paintedBricksNormalGL = this.loader.textures.load('../../textures/PaintedBricks001_1K-JPG/PaintedBricks001_1K-JPG_NormalGL.jpg')
        this.paintedBricksNormalGL.repeat.x = paintedBricks_x
        this.paintedBricksNormalGL.repeat.y = paintedBricks_y
        this.paintedBricksNormalGL.wrapS = THREE.RepeatWrapping
        this.paintedBricksNormalGL.wrapT = THREE.RepeatWrapping
        this.paintedBricksAmbientOcclusion = this.loader.textures.load('../../textures/PaintedBricks001_1K-JPG/PaintedBricks001_1K-JPG_AmbientOcclusion.jpg')
        this.paintedBricksAmbientOcclusion.repeat.x = paintedBricks_x
        this.paintedBricksAmbientOcclusion.repeat.y = paintedBricks_y
        this.paintedBricksAmbientOcclusion.wrapS = THREE.RepeatWrapping
        this.paintedBricksAmbientOcclusion.wrapT = THREE.RepeatWrapping
        this.paintedBricksRoughness = this.loader.textures.load('../../textures/PaintedBricks001_1K-JPG/PaintedBricks001_1K-JPG_Roughness.jpg')
        this.paintedBricksRoughness.repeat.x = paintedBricks_x
        this.paintedBricksRoughness.repeat.y = paintedBricks_y
        this.paintedBricksRoughness.wrapS = THREE.RepeatWrapping
        this.paintedBricksRoughness.wrapT = THREE.RepeatWrapping

        // Painted Plaster
        const paintedPlaster_x = 1
        const paintedPlaster_y = 1
        this.paintedPlasterColor = this.loader.textures.load('../../textures/PaintedPlaster001_1K-JPG/PaintedPlaster001_1K-JPG_Color.jpg')
        this.paintedPlasterColor.repeat.x = paintedPlaster_x
        this.paintedPlasterColor.repeat.y = paintedPlaster_y
        this.paintedPlasterColor.wrapS = THREE.RepeatWrapping
        this.paintedPlasterColor.wrapT = THREE.RepeatWrapping
        this.paintedPlasterDisplacement = this.loader.textures.load('../../textures/PaintedPlaster001_1K-JPG/PaintedPlaster001_1K-JPG_Displacement.jpg')
        this.paintedPlasterDisplacement.repeat.x = paintedPlaster_x
        this.paintedPlasterDisplacement.repeat.y = paintedPlaster_y
        this.paintedPlasterDisplacement.wrapS = THREE.RepeatWrapping
        this.paintedPlasterDisplacement.wrapT = THREE.RepeatWrapping
        this.paintedPlasterNormalGL = this.loader.textures.load('../../textures/PaintedPlaster001_1K-JPG/PaintedPlaster001_1K-JPG_NormalGL.jpg')
        this.paintedPlasterNormalGL.repeat.x = paintedPlaster_x
        this.paintedPlasterNormalGL.repeat.y = paintedPlaster_y
        this.paintedPlasterNormalGL.wrapS = THREE.RepeatWrapping
        this.paintedPlasterNormalGL.wrapT = THREE.RepeatWrapping
        // this.paintedPlasterAmbientOcclusion = this.loader.textures.load('../../textures/PaintedPlaster001_1K-JPG/PaintedPlaster001_1K-JPG_AmbientOcclusion.jpg')
        // this.paintedPlasterAmbientOcclusion.repeat.x = paintedPlaster_x
        // this.paintedPlasterAmbientOcclusion.repeat.y = paintedPlaster_y
        // this.paintedPlasterAmbientOcclusion.wrapS = THREE.RepeatWrapping
        // this.paintedPlasterAmbientOcclusion.wrapT = THREE.RepeatWrapping
        this.paintedPlasterRoughness = this.loader.textures.load('../../textures/PaintedPlaster001_1K-JPG/PaintedPlaster001_1K-JPG_Roughness.jpg')
        this.paintedPlasterRoughness.repeat.x = paintedPlaster_x
        this.paintedPlasterRoughness.repeat.y = paintedPlaster_y
        this.paintedPlasterRoughness.wrapS = THREE.RepeatWrapping
        this.paintedPlasterRoughness.wrapT = THREE.RepeatWrapping

        // Painted Wall
        const paintedWall_x = 1
        const paintedWall_y = 1
        this.paintedWallColor = this.loader.textures.load('../../textures/PaintedPlaster009_1K-JPG/PaintedPlaster009_1K-JPG_Color.jpg')
        this.paintedWallColor.repeat.x = paintedWall_x
        this.paintedWallColor.repeat.y = paintedWall_y
        this.paintedWallColor.wrapS = THREE.RepeatWrapping
        this.paintedWallColor.wrapT = THREE.RepeatWrapping
        this.paintedWallDisplacement = this.loader.textures.load('../../textures/PaintedPlaster009_1K-JPG/PaintedPlaster009_1K-JPG_Displacement.jpg')
        this.paintedWallDisplacement.repeat.x = paintedWall_x
        this.paintedWallDisplacement.repeat.y = paintedWall_y
        this.paintedWallDisplacement.wrapS = THREE.RepeatWrapping
        this.paintedWallDisplacement.wrapT = THREE.RepeatWrapping
        this.paintedWallNormalGL = this.loader.textures.load('../../textures/PaintedPlaster009_1K-JPG/PaintedPlaster009_1K-JPG_NormalGL.jpg')
        this.paintedWallNormalGL.repeat.x = paintedWall_x
        this.paintedWallNormalGL.repeat.y = paintedWall_y
        this.paintedWallNormalGL.wrapS = THREE.RepeatWrapping
        this.paintedWallNormalGL.wrapT = THREE.RepeatWrapping
        this.paintedWallAmbientOcclusion = this.loader.textures.load('../../textures/PaintedPlaster009_1K-JPG/PaintedPlaster009_1K-JPG_AmbientOcclusion.jpg')
        this.paintedWallAmbientOcclusion.repeat.x = paintedWall_x
        this.paintedWallAmbientOcclusion.repeat.y = paintedWall_y
        this.paintedWallAmbientOcclusion.wrapS = THREE.RepeatWrapping
        this.paintedWallAmbientOcclusion.wrapT = THREE.RepeatWrapping
        this.paintedWallRoughness = this.loader.textures.load('../../textures/PaintedPlaster009_1K-JPG/PaintedPlaster009_1K-JPG_Roughness.jpg')
        this.paintedWallRoughness.repeat.x = paintedWall_x
        this.paintedWallRoughness.repeat.y = paintedWall_y
        this.paintedWallRoughness.wrapS = THREE.RepeatWrapping
        this.paintedWallRoughness.wrapT = THREE.RepeatWrapping

        // Wood Siding
        const woodSiding_x = 0.5
        const woodSiding_y = 0.8
        this.woodSidingColor = this.loader.textures.load('../../textures/WoodSiding005_1K-JPG/WoodSiding005_1K-JPG_Color.jpg')
        this.woodSidingColor.repeat.x = woodSiding_x
        this.woodSidingColor.repeat.y = woodSiding_y
        this.woodSidingColor.wrapS = THREE.RepeatWrapping
        this.woodSidingColor.wrapT = THREE.RepeatWrapping
        this.woodSidingDisplacement = this.loader.textures.load('../../textures/WoodSiding005_1K-JPG/WoodSiding005_1K-JPG_Displacement.jpg')
        this.woodSidingDisplacement.repeat.x = woodSiding_x
        this.woodSidingDisplacement.repeat.y = woodSiding_y
        this.woodSidingDisplacement.wrapS = THREE.RepeatWrapping
        this.woodSidingDisplacement.wrapT = THREE.RepeatWrapping
        this.woodSidingNormalGL = this.loader.textures.load('../../textures/WoodSiding005_1K-JPG/WoodSiding005_1K-JPG_NormalGL.jpg')
        this.woodSidingNormalGL.repeat.x = woodSiding_x
        this.woodSidingNormalGL.repeat.y = woodSiding_y
        this.woodSidingNormalGL.wrapS = THREE.RepeatWrapping
        this.woodSidingNormalGL.wrapT = THREE.RepeatWrapping
        this.woodSidingAmbientOcclusion = this.loader.textures.load('../../textures/WoodSiding005_1K-JPG/WoodSiding005_1K-JPG_AmbientOcclusion.jpg')
        this.woodSidingAmbientOcclusion.repeat.x = woodSiding_x
        this.woodSidingAmbientOcclusion.repeat.y = woodSiding_y
        this.woodSidingAmbientOcclusion.wrapS = THREE.RepeatWrapping
        this.woodSidingAmbientOcclusion.wrapT = THREE.RepeatWrapping
        this.woodSidingRoughness = this.loader.textures.load('../../textures/WoodSiding005_1K-JPG/WoodSiding005_1K-JPG_Roughness.jpg')
        this.woodSidingRoughness.repeat.x = woodSiding_x
        this.woodSidingRoughness.repeat.y = woodSiding_y
        this.woodSidingRoughness.wrapS = THREE.RepeatWrapping
        this.woodSidingRoughness.wrapT = THREE.RepeatWrapping


    }
}