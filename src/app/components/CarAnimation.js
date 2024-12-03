// src/components/CarAnimation.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useTheme } from '@mui/material/styles';  // Import useTheme

const CarAnimation = () => {
    const mountRef = useRef(null);

    // Access MUI theme
    const theme = useTheme();
    const primaryColor = theme.palette.mode;

    useEffect(() => {
        // Scene, Camera, and Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Set the background color of the scene to white, irrespective of the theme
        scene.background = new THREE.Color('#ffffff');

        // Lighting
        const ambientLight = new THREE.AmbientLight(primaryColor, 1);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(primaryColor, 0.8);
        directionalLight.position.set(-5, 10, 7);
        scene.add(directionalLight);

        // Load Ford Bronco Model
        const loader = new GLTFLoader();
        let fordBronco = null;

        loader.load(
            'models/67_mustang_high_poly.glb',
            (gltf) => {
                fordBronco = gltf.scene;
                fordBronco.scale.set(0.06, 0.06, 0.06);
                fordBronco.position.set(-10, 0.5, -10);
                scene.add(fordBronco);
            },
            undefined,
            (error) => {
                console.error('Error loading the model:', error);
            }

        );

        // Camera Position
        camera.position.set(5, 5, 15);
        camera.lookAt(0, 0, 0);

        // Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            if (fordBronco) {
                // Move car diagonally
                fordBronco.position.x += 0.01;
                fordBronco.position.z += 0.01;

                // Reset position when out of view
                if (fordBronco.position.x > 10 || fordBronco.position.z > 10) {
                    fordBronco.position.set(-10, 0.5, -10);
                }
            }

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            renderer.dispose();
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: '100%', height: '400px' }} />;
};

export default CarAnimation;
