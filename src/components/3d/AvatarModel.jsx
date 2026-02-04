import React, { useRef, useEffect } from 'react';
import { useGraph, useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import { MathUtils } from 'three';

const AvatarModel = (props) => {
    const group = useRef();
    // Default to a standard male developer-like avatar from Ready Player Me
    const modelUrl = 'https://models.readyplayer.me/642152d1844b2075677d612e.glb';

    // Load the model
    const { scene, animations } = useGLTF(modelUrl);
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
    const { nodes } = useGraph(clone);
    const { actions } = useAnimations(animations, group);

    const headBone = useRef();

    useEffect(() => {
        // Try to find the head bone (standard names usually)
        headBone.current = nodes.Head || nodes.Neck || nodes.mixamorigHead;

        // Play idle animation if available
        if (actions) {
            const action = actions.Idle || Object.values(actions)[0];
            if (action) action.play();
        }
    }, [nodes, actions]);

    useFrame((state) => {
        const mouseX = state.pointer.x;
        const mouseY = state.pointer.y;

        if (group.current) {
            // Rotate body slightly
            group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, mouseX * 0.2, 0.1);
        }

        if (headBone.current) {
            // Rotate head to look at cursor
            // Limit rotation to avoid breaking neck
            const targetRotationY = MathUtils.clamp(mouseX * 0.8, -1, 1);
            const targetRotationX = MathUtils.clamp(-mouseY * 0.5, -0.5, 0.5);

            headBone.current.rotation.y = MathUtils.lerp(headBone.current.rotation.y, targetRotationY, 0.1);
            headBone.current.rotation.x = MathUtils.lerp(headBone.current.rotation.x, targetRotationX, 0.1);
        }
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <primitive object={clone} />
        </group>
    );
};

// Preload removed to prevent crash on load failure

export default AvatarModel;
