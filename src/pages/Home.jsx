import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import  HomeInfo from "../components/HomeInfo";
import Loader  from "../components/Loader";
import { soundoff, soundon } from "../assets/icons";

import Earth from '../models/Earth';

import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Stars from '../models/Stars';
import Flag from "../models/Flag";


const Home = () => {
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  //scale =4,4,4
  //pos = [0, -4.7, 1]
  const adjustEarthForScreenSize = () => {
    let screenScale = [4,4,4];
    let screenPosition = [0, -4.7, 1];
    /*
    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];  
    } else {
      screenScale = [1, 1, 1];
    }
    */
    return [screenScale, screenPosition];
  };

  const [earthScale, earthPosition] = adjustEarthForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        //fog={{ color: 'red', near: 0.1, far: 1000 }}
        style={{ background: 'black'}}
        
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[0,0,0]} intensity={1} />
          <ambientLight intensity={1} color='#000000' />
          <pointLight position={[0,0, 10]} intensity={1} />
          <spotLight
            
            position={[0, 0, 10]}
            angle={0}
            penumbra={Math.PI/2}
            intensity={200}
          />
          <hemisphereLight
            skyColor='#000000'
            groundColor='#000000'
            intensity={2}
          />
      
          <Stars
            isRotating={isRotating}
            deltaX={deltaX}
            deltaY={deltaY}
          />

          
          <Plane
            isRotating={isRotating}
            position={[-0.1,-1.37,3.6]}
            rotation={[-0.1, 3.09, 0.05]}
            scale={[1.5,1.5,1.5]}
          /> 
          
          {/* <Flag/> */}


      
          <Earth
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            setDeltaX={setDeltaX}
            setDeltaY={setDeltaY}
            position={earthPosition}
            scale={earthScale}
            rotation={[-0.825,0.337,0.461]}
          />
          
        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;