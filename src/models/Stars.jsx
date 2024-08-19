import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import starScene from '../assets/3d/stars.glb'

const Stars = ({ isRotating, deltaX, deltaY }) => {
  const stars = useGLTF(starScene);
  const starRef = useRef();

  useFrame((_) => {
    if(isRotating){
        starRef.current.rotation.x += 0.05 * deltaY;
        const rota = starRef.current.rotation.x % Math.PI;
        //starRef.current.rotation.y += 0.05 * deltaX;
        starRef.current.rotation.y += 0.05 * Math.cos(rota)*deltaX;
        starRef.current.rotation.z -= 0.05 * Math.sin(rota)*deltaX
        
    }
  })

  return (
    <mesh ref={starRef}>
        <primitive object={stars.scene} />
    </mesh>
  )
}

export default Stars