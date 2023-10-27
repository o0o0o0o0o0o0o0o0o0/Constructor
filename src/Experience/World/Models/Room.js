import * as THREE from 'three'

import Experience from '../../Experience'

import PARAMS from '../../Utils/PARAMS'
import Materials from '../../Resources/Materials'



export default class Room
{
    constructor()
    {
        this.experience = new Experience()

        this.materials = new Materials()
        this.material = PARAMS.material

        this.instance = new THREE.Group()

        this.wallsGroup = new THREE.Group()
        this.ceiling
        this.instance.add(this.wallsGroup)

        const segments = 50

        this.setWalls(segments)
        this.setWallsPosition()
        this.setCeiling()

        this.debug(segments)
    }

    setWalls(segments)
    {
        for (let i = 0; i < 4; i++)
        {
            let wall
            if (i % 2 === 0)
            {
                wall = new THREE.Mesh(
                    new THREE.PlaneGeometry(PARAMS.width, PARAMS.height, segments, segments),
                    this.material
                )
            }
            if (i % 2 !== 0)
            {
                wall = new THREE.Mesh(
                    new THREE.PlaneGeometry(PARAMS.depth, PARAMS.height, segments, segments),
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

    update(segments)
    {
        let widthStatus = 1
        let depthStatus = 1

        for (let i = 0; i < 4; i++)
        {
            const wall = this.wallsGroup.children[i]
            if (i % 2 === 0)
            {
                wall.geometry = new THREE.PlaneGeometry(PARAMS.width, PARAMS.height, segments, segments)
                wall.position.z = PARAMS.depth / 2 * depthStatus
                depthStatus *= -1
            }
            if (i % 2 !== 0)
            {
                wall.geometry = new THREE.PlaneGeometry(PARAMS.depth, PARAMS.height, segments, segments)
                wall.position.x = PARAMS.width / 2 * widthStatus
                widthStatus *= -1
            }
            wall.position.y = PARAMS.height / 2


            // console.log(this.wallsGroup.children[0].material);
        }

        this.ceiling.geometry = new THREE.PlaneGeometry(PARAMS.width, PARAMS.depth, 1, 1)
        this.ceiling.position.y = PARAMS.height
    }

    debug(segments)
    {

        const changeRoom = {
            ceilingOn: () =>
            {
                PARAMS.ceiling = true
                this.visibleSeiling()
            },
            ceilingOff: () =>
            {
                PARAMS.ceiling = false
                this.visibleSeiling()
            }
        }

        const changeMaterials = {
            bricks: () =>
            {
                const newMaterial = this.materials.bricks
                this.ceiling.material = newMaterial
                for (let i = 0; i < 4; i++)
                {
                    const wall = this.wallsGroup.children[i]
                    wall.material = newMaterial
                }
            },
            paintedBricks: () =>
            {
                const newMaterial = this.materials.paintedBricks
                this.ceiling.material = newMaterial
                for (let i = 0; i < 4; i++)
                {
                    const wall = this.wallsGroup.children[i]
                    wall.material = newMaterial
                }
            },
            paintedPlaster: () =>
            {
                const newMaterial = this.materials.paintedPlaster
                this.ceiling.material = newMaterial
                for (let i = 0; i < 4; i++)
                {
                    const wall = this.wallsGroup.children[i]
                    wall.material = newMaterial
                }
            },
            paintedWall: () =>
            {
                const newMaterial = this.materials.paintedWall
                this.ceiling.material = newMaterial
                for (let i = 0; i < 4; i++)
                {
                    const wall = this.wallsGroup.children[i]
                    wall.material = newMaterial
                }
            },
            woodSiding: () =>
            {
                const newMaterial = this.materials.woodSiding
                this.ceiling.material = newMaterial
                for (let i = 0; i < 4; i++)
                {
                    const wall = this.wallsGroup.children[i]
                    wall.material = newMaterial
                }
            },
        }

        // Debug
        this.debug = this.experience.debug
        if (this.debug.active)
        {
            const folderRoomSize = this.debug.ui.addFolder('Room size')
            folderRoomSize.add(PARAMS, 'width', 0.2, 10, 0.01).onChange((value) =>
            {
                this.update(segments)
            })
            folderRoomSize.add(PARAMS, 'height', 0.2, 10, 0.01).onChange((value) =>
            {
                this.update(segments)
            })
            folderRoomSize.add(PARAMS, 'depth', 0.2, 10, 0.01).onChange((value) =>
            {
                this.update(segments)
            })
            folderRoomSize.add(changeRoom, 'ceilingOn').name('Ceiling On')
            folderRoomSize.add(changeRoom, 'ceilingOff').name('Ceiling Off')

            const folderMaterial = this.debug.ui.addFolder('Material')
            folderMaterial.add(changeMaterials, 'bricks')
            folderMaterial.add(changeMaterials, 'paintedBricks')
            folderMaterial.add(changeMaterials, 'paintedPlaster')
            folderMaterial.add(changeMaterials, 'paintedWall')
            folderMaterial.add(changeMaterials, 'woodSiding')

        }


    }
}



