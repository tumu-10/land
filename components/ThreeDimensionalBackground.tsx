"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three'; // Import the three.js core
import "@/styles/threeDimensionalBackground.scss"

function RotatingSphere() {
    // Reference to the mesh object
    const mesh = useRef<THREE.Mesh>(null!);

    // Animation loop to rotate the sphere
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.01;
            mesh.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshLambertMaterial color="hotpink" />
        </mesh>
    );
}

// Adjust the path as needed

function ThreeDimensionalBackground() {
    return (
        <Canvas className={styles.canvas}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <RotatingSphere />
        </Canvas>
    );
}

export default ThreeDimensionalBackground;
