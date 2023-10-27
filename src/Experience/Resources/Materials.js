import * as THREE from 'three'

import Textures from './Texture'

export default class Materials
{
    constructor()
    {
        this.textures = new Textures()

        this.basic = new THREE.MeshStandardMaterial({
            metalness: 0.45,
            roughness: 0.65,
            side: THREE.DoubleSide,
        })

        this.bricks = new THREE.MeshStandardMaterial({
            map: this.textures.bricksColor,
            metalness: 0.6,
            roughnessMap: this.textures.bricksRoughness,
            displacementMap: this.textures.bricksDisplacement,
            displacementScale: 0,
            side: THREE.DoubleSide,
            // aoMap: this.textures.bricksAmbientOcclusion,
            // aoMapIntensity: 1
        })
        this.bricks.normalMap = this.textures.bricksNormalGL
        this.bricks.normalScale.set(0.7, 0.7)

        this.paintedBricks = new THREE.MeshStandardMaterial({
            map: this.textures.paintedBricksColor,
            metalness: 0.6,
            roughnessMap: this.textures.paintedBricksRoughness,
            displacementMap: this.textures.paintedBricksDisplacement,
            displacementScale: 0,
            side: THREE.DoubleSide,
            aoMap: this.textures.paintedBricksAmbientOcclusion,
            aoMapIntensity: 1
        })
        this.paintedBricks.normalMap = this.textures.paintedBricksNormalGL
        this.paintedBricks.normalScale.set(0.7, 0.7)

        this.paintedPlaster = new THREE.MeshStandardMaterial({
            // map: this.textures.paintedPlasterColor,
            color: 0x808080,
            metalness: 1,
            roughnessMap: this.textures.paintedPlasterRoughness,
            roughness: 0.5,
            displacementMap: this.textures.paintedPlasterDisplacement,
            displacementScale: 0,
            side: THREE.DoubleSide,
            // aoMap: this.textures.paintedPlasterAmbientOcclusion,
            // aoMapIntensity: 1
        })
        this.paintedPlaster.normalMap = this.textures.paintedPlasterNormalGL
        this.paintedPlaster.normalScale.set(2, 2)

        this.paintedWall = new THREE.MeshStandardMaterial({
            map: this.textures.paintedWallColor,
            metalness: 0.7,
            roughnessMap: this.textures.paintedWallRoughness,
            roughness: 0.5,
            displacementMap: this.textures.paintedWallDisplacement,
            displacementScale: 0,
            side: THREE.DoubleSide,
            aoMap: this.textures.paintedWallAmbientOcclusion,
            aoMapIntensity: 1
        })
        this.paintedWall.normalMap = this.textures.paintedWallNormalGL
        this.paintedWall.normalScale.set(0.7, 0.7)

        this.woodSiding = new THREE.MeshStandardMaterial({
            map: this.textures.woodSidingColor,
            metalness: 0.7,
            roughnessMap: this.textures.woodSidingRoughness,
            roughness: 0.5,
            displacementMap: this.textures.woodSidingDisplacement,
            displacementScale: 0,
            side: THREE.DoubleSide,
            aoMap: this.textures.woodSidingAmbientOcclusion,
            aoMapIntensity: 1
        })
        this.woodSiding.normalMap = this.textures.woodSidingNormalGL
        this.woodSiding.normalScale.set(0.7, 0.7)
    }
}