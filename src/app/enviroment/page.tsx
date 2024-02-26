"use client"

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Header from "../../components/header/page"
import style from "./page.module.css"


const page = (): JSX.Element => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current! });

        renderer.setSize(window.innerWidth - 100, window.innerHeight - 100);
        camera.position.z = 5;

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        const animate = () => {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        animate();

        // Clean up
        return () => {
            renderer.dispose();
        };
    }, []);

    return (
        <>
            <Header />
            <canvas className={style.canvas} ref={canvasRef} />
        </>
    );
};

export default page;