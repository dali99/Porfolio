import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

const AvatarProcedural = (props) => {
    const group = useRef();
    const head = useRef();

    useFrame((state) => {
        const mouseX = state.pointer.x;
        const mouseY = state.pointer.y;

        if (group.current) {
            group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, mouseX * 0.3, 0.1);
        }

        if (head.current) {
            head.current.rotation.y = MathUtils.lerp(head.current.rotation.y, mouseX * 0.6, 0.1);
            head.current.rotation.x = MathUtils.lerp(head.current.rotation.x, -mouseY * 0.5, 0.1);
        }
    });

    // Colors from Reference Image
    const skinColor = "#f5d0b0";
    const shirtColor = "#ffffff";
    const shirtTrimColor = "#1e293b";
    const pantsColor = "#172554"; // Dark blue jeans
    const shoeColor = "#facc15"; // Yellow
    const hairColor = "#1a1a1a"; // Black
    const beardColor = "#1a1a1a";
    const glassColor = "#000000";

    return (
        <group ref={group} {...props} dispose={null}>
            {/* HEAD GROUP */}
            <group ref={head} position={[0, 1.7, 0]}>
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[0.32, 0.38, 0.32]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>

                {/* Hair - Top */}
                <mesh position={[0, 0.22, 0]}>
                    <boxGeometry args={[0.35, 0.15, 0.38]} />
                    <meshStandardMaterial color={hairColor} />
                </mesh>
                <mesh position={[0, 0.15, -0.15]}>
                    <boxGeometry args={[0.34, 0.2, 0.1]} />
                    <meshStandardMaterial color={hairColor} />
                </mesh>

                {/* Beard */}
                <group position={[0, -0.12, 0.16]}>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry args={[0.33, 0.15, 0.05]} />
                        <meshStandardMaterial color={beardColor} />
                    </mesh>
                    <mesh position={[0, -0.08, -0.1]}>
                        <boxGeometry args={[0.33, 0.05, 0.25]} />
                        <meshStandardMaterial color={beardColor} />
                    </mesh>
                </group>

                {/* Glasses */}
                <group position={[0, 0.05, 0.17]}>
                    <mesh position={[-0.08, 0, 0]}>
                        <torusGeometry args={[0.055, 0.012, 16, 32]} />
                        <meshStandardMaterial color={glassColor} />
                    </mesh>
                    <mesh position={[0.08, 0, 0]}>
                        <torusGeometry args={[0.055, 0.012, 16, 32]} />
                        <meshStandardMaterial color={glassColor} />
                    </mesh>
                </group>
            </group>

            {/* BODY */}
            <group position={[0, 1.0, 0]}>
                {/* Torso - White Shirt */}
                <mesh castShadow receiveShadow>
                    <boxGeometry args={[0.6, 0.9, 0.3]} />
                    <meshStandardMaterial color={shirtColor} />
                </mesh>

                {/* Shirt Collar/Neck Trim */}
                <mesh position={[0, 0.46, 0]}>
                    <boxGeometry args={[0.61, 0.05, 0.31]} />
                    <meshStandardMaterial color={shirtTrimColor} />
                </mesh>

                {/* Neck */}
                <mesh position={[0, 0.5, 0]}>
                    <cylinderGeometry args={[0.08, 0.08, 0.2]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>
            </group>

            {/* ARMS */}
            <group position={[0.45, 1.1, 0]}>
                <mesh position={[0, -0.3, 0]} rotation={[0, 0, -0.1]} castShadow>
                    <boxGeometry args={[0.15, 0.8, 0.15]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>
                {/* Sleeve */}
                <mesh position={[0, 0.25, 0]} rotation={[0, 0, -0.1]}>
                    <boxGeometry args={[0.18, 0.3, 0.18]} />
                    <meshStandardMaterial color={shirtColor} />
                </mesh>
                {/* Sleeve Trim */}
                <mesh position={[0, 0.05, 0]} rotation={[0, 0, -0.1]}>
                    <boxGeometry args={[0.19, 0.05, 0.19]} />
                    <meshStandardMaterial color={shirtTrimColor} />
                </mesh>
            </group>

            <group position={[-0.45, 1.1, 0]}>
                <mesh position={[0, -0.3, 0]} rotation={[0, 0, 0.1]} castShadow>
                    <boxGeometry args={[0.15, 0.8, 0.15]} />
                    <meshStandardMaterial color={skinColor} />
                </mesh>
                {/* Sleeve */}
                <mesh position={[0, 0.25, 0]} rotation={[0, 0, 0.1]}>
                    <boxGeometry args={[0.18, 0.3, 0.18]} />
                    <meshStandardMaterial color={shirtColor} />
                </mesh>
                {/* Sleeve Trim */}
                <mesh position={[0, 0.05, 0]} rotation={[0, 0, 0.1]}>
                    <boxGeometry args={[0.19, 0.05, 0.19]} />
                    <meshStandardMaterial color={shirtTrimColor} />
                </mesh>
            </group>

            {/* LEGS - Blue Pants */}
            <group position={[0.18, 0.1, 0]}>
                <mesh position={[0, 0, 0]} castShadow>
                    <boxGeometry args={[0.22, 1.0, 0.25]} />
                    <meshStandardMaterial color={pantsColor} />
                </mesh>
                {/* Cuff */}
                <mesh position={[0, -0.45, 0]}>
                    <boxGeometry args={[0.24, 0.1, 0.27]} />
                    <meshStandardMaterial color={pantsColor} />
                </mesh>
                {/* Shoe - Yellow */}
                <mesh position={[0, -0.55, 0.05]}>
                    <boxGeometry args={[0.24, 0.15, 0.4]} />
                    <meshStandardMaterial color={shoeColor} />
                </mesh>
            </group>

            <group position={[-0.18, 0.1, 0]}>
                <mesh position={[0, 0, 0]} castShadow>
                    <boxGeometry args={[0.22, 1.0, 0.25]} />
                    <meshStandardMaterial color={pantsColor} />
                </mesh>
                {/* Cuff */}
                <mesh position={[0, -0.45, 0]}>
                    <boxGeometry args={[0.24, 0.1, 0.27]} />
                    <meshStandardMaterial color={pantsColor} />
                </mesh>
                {/* Shoe - Yellow */}
                <mesh position={[0, -0.55, 0.05]}>
                    <boxGeometry args={[0.24, 0.15, 0.4]} />
                    <meshStandardMaterial color={shoeColor} />
                </mesh>
            </group>

        </group>
    );
};

export default AvatarProcedural;
