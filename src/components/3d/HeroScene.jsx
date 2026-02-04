import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

/* eslint-disable react/no-unknown-property */
const Stars = (props) => {
    const ref = useRef();
    const [sphere] = React.useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#3b82f6" // blue-500
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

import { Suspense } from 'react';
import { ContactShadows, Environment } from '@react-three/drei';
import AvatarModel from './AvatarModel';
import AvatarProcedural from './AvatarProcedural';
import ErrorBoundary from '../common/ErrorBoundary';

const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
                <ambientLight intensity={0.7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <Stars />

                <Suspense fallback={<group position={[2, -1, 0]} rotation={[0, -0.3, 0]}><AvatarProcedural /></group>}>
                    <ErrorBoundary fallback={<group position={[2, -1, 0]} rotation={[0, -0.3, 0]}><AvatarProcedural /></group>}>
                        <group position={[2, -1, 0]} rotation={[0, -0.3, 0]}>
                            <AvatarModel scale={2} />
                            <ContactShadows opacity={0.7} width={10} blur={2.5} far={10} />
                        </group>
                    </ErrorBoundary>
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default HeroScene;
