import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Logo3DImage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const modelRef = useRef<THREE.Object3D>();
  const animateRef = useRef<number | null>(null);

  const [isRotation, setRotation] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current!,
      antialias: true,
      alpha: true,
    });

    const camera = new THREE.PerspectiveCamera(34, 1);

    renderer.setSize(500, 500);
    camera.position.set(0, 0, 5);

    const loader = new GLTFLoader();
    loader.load(
      "/shiba/scene.gltf",
      (gltf) => {
        scene.add(gltf.scene);
        modelRef.current = gltf.scene;
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const animate = () => {
      animateRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
      const model = modelRef.current;

      if (model) {
        setRotation(true);
        model.rotation.y += 0.002;
      }
    };

    animate();
    return () => {
      cancelAnimationFrame(animateRef.current!);
    };
  }, [isRotation]);

  return <CanvasImage ref={canvasRef}></CanvasImage>;
};
const textFade = keyframes`
  0% {
    opacity: 0;
    font-size: 100px;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    font-size: 60px;
  }
`;

const CanvasImage = styled.canvas`
  animation: ${textFade} 2s linear alternate;
  cursor: pointer;
`;
