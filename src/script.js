import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import Experience from './Experience/Experience'


/**
 * Canvas
 */
const canvas = document.querySelector('canvas.webgl')

/**
 * Experience class
 */

const experience = new Experience(canvas)


