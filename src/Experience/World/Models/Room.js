import * as THREE from 'three'

import Experience from '../../Experience'

import PARAMS from '../../Utils/PARAMS'
import BUTTONS from '../../Utils/BUTTONS'

import Materials from '../../Resources/Materials'

let instance = null

export default class Room
{
    constructor()
    {
        // Singleton
        if (instance)
        {
            return instance
        }
        instance = this

        this.buttons = new BUTTONS()

        this.experience = new Experience()

        this.materials = new Materials()
        this.material = PARAMS.material

        this.instance = new THREE.Group()

        this.wallsGroup = new THREE.Group()
        this.ceiling
        this.instance.add(this.wallsGroup)

        this.setWalls()
        this.setWallsPosition()
        this.setCeiling()

        this.debug()
    }

    setWalls()
    {
        for (let i = 0; i < 4; i++)
        {
            let wall
            if (i % 2 === 0)
            {
                wall = new THREE.Mesh(
                    new THREE.PlaneGeometry(PARAMS.width, PARAMS.height, 10, 10),
                    this.material
                )
            }
            if (i % 2 !== 0)
            {
                wall = new THREE.Mesh(
                    new THREE.PlaneGeometry(PARAMS.depth, PARAMS.height, 10, 10),
                    this.material
                )
            }

            wall.rotation.y = i * Math.PI / 2
            wall.position.y = PARAMS.height / 2
            this.wallsGroup.add(wall)

            wall.receiveShadow = true
            wall.castShadow = true

        }

    }

    setWallsPosition()
    {
        let widthStatus = 1
        let depthStatus = 1
        for (let i = 0; i < 4; i++)
        {

            const wall = this.wallsGroup.children[i]

            if (i % 2 === 0)
            {
                wall.position.z = PARAMS.depth / 2 * depthStatus
                depthStatus *= -1
            }

            if (i % 2 !== 0)
            {
                wall.position.x = PARAMS.width / 2 * widthStatus
                widthStatus *= -1
            }
        }
    }

    setCeiling()
    {
        this.ceiling = new THREE.Mesh(
            new THREE.PlaneGeometry(PARAMS.width, PARAMS.depth, 1, 1),
            this.material
        )

        this.ceiling.position.y = PARAMS.height
        this.ceiling.rotation.x = Math.PI / 2
        this.instance.add(this.ceiling)

        this.ceiling.castShadow = true

        this.visibleSeiling()

    }

    visibleSeiling()
    {
        if (PARAMS.ceiling)
        {
            this.ceiling.scale.set(1, 1, 1)
        }
        if (!PARAMS.ceiling)
        {
            this.ceiling.scale.set(0, 0, 0)
        }
    }

    update()
    {
        let widthStatus = 1
        let depthStatus = 1

        for (let i = 0; i < 4; i++)
        {
            const wall = this.wallsGroup.children[i]
            if (i % 2 === 0)
            {
                wall.geometry = new THREE.PlaneGeometry(PARAMS.width, PARAMS.height, 10, 10)
                wall.position.z = PARAMS.depth / 2 * depthStatus
                depthStatus *= -1
            }
            if (i % 2 !== 0)
            {
                wall.geometry = new THREE.PlaneGeometry(PARAMS.depth, PARAMS.height, 10, 10)
                wall.position.x = PARAMS.width / 2 * widthStatus
                widthStatus *= -1
            }
            wall.position.y = PARAMS.height / 2

        }

        this.ceiling.geometry = new THREE.PlaneGeometry(PARAMS.width, PARAMS.depth, 1, 1)
        this.ceiling.position.y = PARAMS.height
    }

    debug()
    {

        // Debug
        this.debug = this.experience.debug
        if (this.debug.active)
        {
            const folderRoomSize = this.debug.ui.addFolder('Room size')
            folderRoomSize.add(this.buttons.changeSize, 'default').name('default')
            folderRoomSize.add(this.buttons.changeSize, 'size31x31').name('3.1x3.1')
            folderRoomSize.add(this.buttons.changeSize, 'size41x41').name('4.1x4.1')
            folderRoomSize.add(this.buttons.changeRoom, 'ceilingOn').name('Ceiling On')
            folderRoomSize.add(this.buttons.changeRoom, 'ceilingOff').name('Ceiling Off')

            const folderMaterial = this.debug.ui.addFolder('Material')
            folderMaterial.add(this.buttons.changeMaterials, 'bricks')
            folderMaterial.add(this.buttons.changeMaterials, 'paintedBricks')
            folderMaterial.add(this.buttons.changeMaterials, 'paintedPlaster')
            folderMaterial.add(this.buttons.changeMaterials, 'paintedWall')
            folderMaterial.add(this.buttons.changeMaterials, 'woodSiding')

        }


    }
}



