import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = ({ darkMode }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Colors matching palette
    const colorBlack = new THREE.Color(0x050505);
    const colorDarkBrown = new THREE.Color(0x2b1d17);
    const colorMediumBrown = new THREE.Color(0x533c2a);
    const colorCream = new THREE.Color(0xe8dec9);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(colorCream, 1.8, 100);
    pointLight1.position.set(15, 20, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(colorMediumBrown, 2.5, 100);
    pointLight2.position.set(-20, -15, -10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(colorDarkBrown, 3, 100);
    pointLight3.position.set(0, -25, 10);
    scene.add(pointLight3);

    // 3. Floating Geometric Objects
    const geometriesGroup = new THREE.Group();
    scene.add(geometriesGroup);

    const shapes = [
      new THREE.IcosahedronGeometry(2.5, 0),
      new THREE.TorusGeometry(3, 0.8, 16, 100),
      new THREE.DodecahedronGeometry(2, 0),
      new THREE.OctahedronGeometry(2.2, 0),
      new THREE.TorusKnotGeometry(2, 0.5, 100, 16),
      new THREE.SphereGeometry(1.8, 32, 32),
    ];

    const meshArray = [];
    const count = 22;

    for (let i = 0; i < count; i++) {
      const geomIndex = i % shapes.length;
      const geometry = shapes[geomIndex];

      // Material with metallic glass reflection
      const isCreamAccent = i % 4 === 0;
      const material = new THREE.MeshStandardMaterial({
        color: isCreamAccent ? colorCream : (i % 2 === 0 ? colorMediumBrown : colorDarkBrown),
        metalness: isCreamAccent ? 0.3 : 0.8,
        roughness: isCreamAccent ? 0.2 : 0.4,
        wireframe: i % 5 === 0,
        transparent: true,
        opacity: isCreamAccent ? 0.65 : 0.45,
      });

      const mesh = new THREE.Mesh(geometry, material);

      // Random 3D positions in space
      mesh.position.x = (Math.random() - 0.5) * 60;
      mesh.position.y = (Math.random() - 0.5) * 60;
      mesh.position.z = (Math.random() - 0.5) * 40 - 5;

      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;

      const scale = Math.random() * 0.7 + 0.6;
      mesh.scale.set(scale, scale, scale);

      // Custom velocity for floating animation
      mesh.userData = {
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        floatSpeedY: (Math.random() - 0.5) * 0.005,
        floatSpeedX: (Math.random() - 0.5) * 0.003,
        initialY: mesh.position.y,
      };

      geometriesGroup.add(mesh);
      meshArray.push(mesh);
    }

    // 4. Starfield Particles
    const particleCount = 1200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 120;
      particlePositions[i + 1] = (Math.random() - 0.5) * 120;
      particlePositions[i + 2] = (Math.random() - 0.5) * 80;
      particleScales[i / 3] = Math.random() * 0.15 + 0.05;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: colorCream,
      size: 0.15,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 5. Mouse Parallax Effect
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 6. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetMouseX += (mouseX - targetMouseX) * 0.05;
      targetMouseY += (mouseY - targetMouseY) * 0.05;

      // Rotate whole geometries group with mouse
      geometriesGroup.rotation.y = targetMouseX * 0.2;
      geometriesGroup.rotation.x = -targetMouseY * 0.2;

      // Animate individual meshes
      meshArray.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotSpeedX;
        mesh.rotation.y += mesh.userData.rotSpeedY;

        mesh.position.y += Math.sin(elapsedTime + mesh.position.x) * 0.005;
        mesh.position.x += Math.cos(elapsedTime + mesh.position.y) * 0.003;
      });

      // Rotate particle field slowly
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = elapsedTime * 0.01;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 7. Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition-opacity duration-700"
      style={{ opacity: darkMode ? 0.9 : 0.35 }}
    />
  );
};

export default Background3D;
