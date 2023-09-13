import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Physics, useSphere, usePlane } from '@react-three/cannon'

function App() {

  const Player = () => {
    // const [ref, api] = useSphere(() => ({ mass: 1, args: [0.5], position: [0, 5, 0] }))
    // usePlane(() => ({
    //   rotation: [-Math.PI / 2, 0, 0],
    //   position: [0, -10, 0],
    //   onCollide: () => {
    //     api.position.set(0, 5, 0)
    //     api.velocity.set(0, 5, 0)
    //   },
    // }))
    return(
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>
    )
  }

  const Mesh = () =>{
    const ref = useRef(null)
    useFrame(()=>{
      if(!ref.current){
        return;
      }     
    })
    return(
      <mesh  ref={ref}>
          {/* <planeGeometry scale={10} attach="geometry"/>
          <meshStandardMaterial color="gray" attach="material"/> */}
          {/* Enemy 潑水RainControl 菸味SmellControl*/}
          {/* NPC -> TalkControl */}
          {/* Player -> Self */}
          <Box />
          <Player />
          {/* Building -> 冷氣TempControl 大樓Fingerprint */}
          {/* Ground */}
        </mesh>
    )
  }

  const Box = () =>{
    return(
      <mesh>
        <boxGeometry args={[2,2,2]}/>
        <meshStandardMaterial color="hotpink"/>
      </mesh>
    )
  }
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}> 
      <Canvas shadows camera={{ position: [0, 5, 12], fov: 50 }}>
        <color attach="background" args={["#171720"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[-10, -10, -10]} />
        <spotLight position={[10, 10, 10]} angle={0.4} penumbra={1} intensity={1} castShadow shadow-mapSize={[2048, 2048]} shadow-bias={-0.0001} />
        <Physics
          gravity={[0, -40, 0]}
        >
          <perspectiveCamera fov={75} position={[0, 0, 5]}/>
          <ambientLight intensity={0.1} />  
          <directionalLight color="red" position={[0, 0, 5]} />
          <pointLight position={[10, 10, 10]} />
          <Mesh />
          <OrbitControls />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
