import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'


import flagScene from '../assets/3d/flag_in_the_wind.glb'

const Flag = () => {
    const flag = useGLTF(flagScene);
    const flagRef = useRef();
    return (
    <mesh ref={flagRef}>
        <primitive object={flag.scene} />
    </mesh>
  )
}

export default Flag