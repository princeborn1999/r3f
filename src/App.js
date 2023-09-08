import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
function App() {
  const Mesh = () =>{
    const ref = useRef(null)

    useFrame(()=>{
      if(!ref.current){
        return;
      }     
    })
    return(
      <mesh  ref={ref}>
          <boxGeometry args={[2,2,2]}/>
          <meshStandardMaterial color="hotpink"/>
          {/* <planeGeometry scale={10} attach="geometry"/>
          <meshStandardMaterial color="gray" attach="material"/> */}
          {/* Enemy 潑水RainControl 菸味SmellControl*/}
          {/* NPC -> TalkControl */}
          {/* Player -> Self */}
          {/* Building -> 冷氣TempControl 大樓Fingerprint */}
          {/* Ground */}
        </mesh>
    )
  }

  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}> 
      <Canvas>
        <perspectiveCamera fov={75} position={[0, 0, 5]}/>
        <ambientLight intensity={0.1} />  
        <directionalLight color="red" position={[0, 0, 5]} />
        <pointLight position={[10, 10, 10]} />
        <Mesh />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
