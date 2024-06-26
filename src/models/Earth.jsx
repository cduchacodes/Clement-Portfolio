/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: matousekfoto (https://sketchfab.com/matousekfoto)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-globe-98d2b04d46474bafb4250cc75dc583b3
Title: Earth Globe 🌍
*/

import React, { useRef, useEffect } from 'react'

import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'
import { useAnimations, useGLTF } from '@react-three/drei';

import earthScene from '../assets/3d/earth_globe.glb';

const Earth = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {

  const earthRef = useRef();
  //const rotationSpeed = useRef(0.003);
  const { actions } = useAnimations(animations, ref);
  //const { gl, viewport } = useThree();
  //const { nodes, materials } = useGLTF(earthScene)
  const {scene, animations } = useGLTF(earthScene);

  /*
  useFrame(() => {
    if(earthRef.current){
        earthRef.current.rotation.y += rotationSpeed.current;
        earthRef.current.rotation.y = earthRef.current.rotation.y % (2 * Math.PI);
    }
    
  })
  */

  //x:-5.158
  //y:-9.552
  //z:2.365
  //group ref={earthRef} {...props} dispose={null}
  
  return (
    //<group ref={earthRef}>
      <group ref={earthRef} {...props} dispose={null}>
        <group position={[-5.177, -20.679, 0]} rotation={[Math.PI / 2, -0.462, Math.PI]}>
          <group rotation={[-Math.PI, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.meshNode_Material_u1_v1_0.geometry}
              material={materials.Material_u1_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.meshNode_Material_u2_v1_0.geometry}
              material={materials.Material_u2_v1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.meshNode_Material_u1_v2_0.geometry}
              material={materials.Material_u1_v2}
            />
          </group>
        </group>
      </group>
    //</group>
  )
}

export default Earth