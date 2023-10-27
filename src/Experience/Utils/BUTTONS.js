import PARAMS from "./PARAMS"
import Room from "../World/Models/Room";

import Materials from "../Resources/Materials";



export default class BUTTONS
{
    constructor()
    {
        this.room = new Room()
        this.materials = new Materials()

        this.changeRoom = {
            ceilingOn: () =>
            {
                PARAMS.ceiling = true
                this.room.visibleSeiling()
                console.log('ceiling on', PARAMS.ceiling);
            },
            ceilingOff: () =>
            {
                PARAMS.ceiling = false
                this.room.visibleSeiling()
                console.log('ceiling off', PARAMS.ceiling);
            }
        }

        this.changeSize = {
            default: () =>
            {
                PARAMS.width = 4
                PARAMS.height = 3
                PARAMS.depth = 3
                this.room.update()
            },
            size31x31: () =>
            {
                PARAMS.width = 3.1
                PARAMS.height = 2
                PARAMS.depth = 3.1
                this.room.update()
            },
            size41x41: () =>
            {
                PARAMS.width = 4.1
                PARAMS.height = 2
                PARAMS.depth = 4.1
                this.room.update()
            }
        }

        this.changeMaterials = {
            bricks: () =>
            {
                const newMaterial = this.materials.bricks
                this.room.ceiling.material = newMaterial
                for (let i = 0; i < 4; i++)
                {
                    const wall = this.room.wallsGroup.children[i]
                    wall.material = newMaterial
                }
            },
            paintedBricks: () =>
            {
                const newMaterial = this.materials.paintedBricks
                this.room.ceiling.material = newMaterial
                for (let i = 0; i < 4; i++)
                {
                    const wall = this.room.wallsGroup.children[i]
                    wall.material = newMaterial
                }
            },
            paintedPlaster: () =>
            {
                const newMaterial = this.materials.paintedPlaster
                this.room.ceiling.material = newMaterial
                for (let i = 0; i < 4; i++)
                {
                    const wall = this.room.wallsGroup.children[i]
                    wall.material = newMaterial
                }
            },
            paintedWall: () =>
            {
                const newMaterial = this.materials.paintedWall
                this.room.ceiling.material = newMaterial
                for (let i = 0; i < 4; i++)
                {
                    const wall = this.room.wallsGroup.children[i]
                    wall.material = newMaterial
                }
            },
            woodSiding: () =>
            {
                const newMaterial = this.materials.woodSiding
                this.room.ceiling.material = newMaterial
                for (let i = 0; i < 4; i++)
                {
                    const wall = this.room.wallsGroup.children[i]
                    wall.material = newMaterial
                }
            },
        }
    }
}












