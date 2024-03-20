import {Text, Html, ContactShadows, PresentationControls, Environment,useGLTF, Float } from '@react-three/drei'
import { RectAreaLight } from 'three'

export default function Experience()
{
    const macbook = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')
    return (
    <>
   <Environment preset='city' />

    <color args={ ['#ffffff'] } attach="background" />
        <PresentationControls
            global
            rotation={[0.13,0.1,0]}
            polar={[-0.4,0.2]}
            azimuth={[-1, 0.5]}
            config={ {mass: 2, tension: 400} }
            snap= {{mass: 4, tension: 400}}
        >
        <Float rotationIntensity={0.4}>
        <rectAreaLight
           width={ 2.5 }
           height={1.65}
           intensity={75}
           color={ '#01386f' }
           rotation = { [0.1, Math.PI, 0]}
           position={[0,0.55,-1.15]}
        />
        <primitive 
        object = {macbook.scene} 
        position-y={ -1.2 }
        >
            <Html
            transform
            wrapperClass='htmlScreen'
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={ -0.256 }
            >
                <iframe src="https://japp47.github.io/simplePortfolio/"/>
            </Html>
        

        </primitive>
        <Text
           font = "./bangers-v20-latin-regular.woff"
           fontSize={1}
           color={'#00b300'}
           position={[2,0.75,0.75]}
           rotation-y={-1.25}
           maxWidth={2 }
           textAlign='center'
        >JAPPREET SINGH</Text>
        </Float>
        </PresentationControls>

        <ContactShadows 
            position-y = { -1.4 }
            opacity={0.4}
            scale={ 5 }
            blur= {2}
        />
    </>
    )
}