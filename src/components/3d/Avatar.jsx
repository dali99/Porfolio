import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

const Avatar = (props) => {
    const group = useRef();
    const head = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const mouseX = state.pointer.x;
        const mouseY = state.pointer.y;

        if (group.current) {
            group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, mouseX * 0.5, 0.1);
        }

        if (head.current) {
            head.current.rotation.y = MathUtils.lerp(head.current.rotation.y, mouseX * 0.8, 0.1);
            head.current.rotation.x = MathUtils.lerp(head.current.rotation.x, -mouseY * 0.5, 0.1);
        }
    });

    const skinColor = "#f5d0b0";
    const shirtColor = "#1e293b"; // slate-800
    const glassColor = "#000000";

    return (
        <group ref={group} {...props} dispose={null}>
            {/* HEAD GROUP */}
            <group ref={head} position={[0, 1.4, 0]}>
                {/* Face/Head */}
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[0.7, 0.75, 0.75]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>

                {/* Hair */}
                <mesh position={[0, 0.38, 0]} castShadow>
                    <boxGeometry args={[0.75, 0.15, 0.8]} />
                    <meshStandardMaterial color="#2d1b0e" />
                </mesh>
                <mesh position={[0, 0.2, -0.38]} castShadow>
                    <boxGeometry args={[0.75, 0.5, 0.1]} />
                    <meshStandardMaterial color="#2d1b0e" />
                </mesh>

                {/* Glasses Frame */}
                <group position={[0, 0.05, 0.38]}>
                    <mesh position={[-0.18, 0, 0]}>
                        <torusGeometry args={[0.12, 0.02, 16, 32]} />
                        <meshStandardMaterial color={glassColor} />
                    </mesh>
                    <mesh position={[0.18, 0, 0]}>
                        <torusGeometry args={[0.12, 0.02, 16, 32]} />
                        <meshStandardMaterial color={glassColor} />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <cylinderGeometry args={[0.01, 0.01, 0.1]} rotation={[0, 0, Math.PI / 2]} />
                        <meshStandardMaterial color={glassColor} />
                    </mesh>
                </group>
            </group>

            {/* BODY */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <boxGeometry args={[1.1, 1.5, 0.6]} />
                <meshStandardMaterial color={shirtColor} />
            </mesh>

            {/* NECK */}
            <mesh position={[0, 0.8, 0]}>
                <cylinderGeometry args={[0.15, 0.15, 0.3]} />
                <meshStandardMaterial color={skinColor} />
            </mesh>

            {/* ARMS */}
            <group position={[0.7, 0.2, 0]}>
                {/* Sleeve */}
                <mesh position={[0, 0.4, 0]} castShadow>
                    <boxGeometry args={[0.3, 0.4, 0.3]} />
                    <meshStandardMaterial color={shirtColor} />
                </mesh>
                {/* Arm Skin */}
                <mesh position={[0, -0.2, 0]} castShadow>
                    <boxGeometry args={[0.25, 1.0, 0.25]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>
            </group>

            <group position={[-0.7, 0.2, 0]}>
                {/* Sleeve */}
                <mesh position={[0, 0.4, 0]} castShadow>
                    <boxGeometry args={[0.3, 0.4, 0.3]} />
                    <meshStandardMaterial color={shirtColor} />
                </mesh>
                {/* Arm Skin */}
                <mesh position={[0, -0.2, 0]} castShadow>
                    <boxGeometry args={[0.25, 1.0, 0.25]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>
            </group>

        </group>
    );
};

export default Avatar;
