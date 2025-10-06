import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { RadioStation } from '../../types';

// Earth material component using useTexture hook
const EarthMaterial = () => {
  const earthTexture = useTexture('https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg');
  return (
    <meshPhongMaterial
      map={earthTexture}
      shininess={100}
    />
  );
};

interface GlobeProps {
  stations?: RadioStation[];
  onStationClick?: (station: RadioStation) => void;
}

const Earth: React.FC<{ stations: RadioStation[] }> = ({ stations }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  // Convert lat/lng to 3D coordinates
  const latLongToVector3 = (lat: number, lng: number, radius: number = 5) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    return new THREE.Vector3(
      -radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
  };

  return (
    <>
      {/* Earth Sphere */}
      <Sphere ref={meshRef} args={[5, 64, 64]} position={[0, 0, 0]}>
        <EarthMaterial />
      </Sphere>
      
      {/* Atmosphere */}
      <Sphere args={[5.1, 64, 64]} position={[0, 0, 0]}>
        <meshPhongMaterial
          color="#4A90E2"
          transparent={true}
          opacity={0.1}
        />
      </Sphere>

      {/* Station Markers */}
      {stations.filter(station => station.geo_lat && station.geo_long).map((station, index) => {
        const position = latLongToVector3(station.geo_lat, station.geo_long, 5.05);
        return (
          <mesh key={station.stationuuid} position={position}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#ff6b35" />
            <Html distanceFactor={10}>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 max-w-xs pointer-events-auto">
                <div className="text-xs font-semibold text-gray-900 truncate">
                  {station.name}
                </div>
                <div className="text-xs text-gray-500">
                  {station.country}
                </div>
              </div>
            </Html>
          </mesh>
        );
      })}
    </>
  );
};

const InteractiveGlobe: React.FC<GlobeProps> = ({ stations = [], onStationClick }) => {
  const [filteredStations, setFilteredStations] = useState<RadioStation[]>([]);

  useEffect(() => {
    // Filter stations with valid coordinates and limit for performance
    const validStations = stations
      .filter(station => station.geo_lat && station.geo_long)
      .slice(0, 100); // Limit to 100 stations for performance
    
    setFilteredStations(validStations);
  }, [stations]);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Earth and Stations */}
        <Earth stations={filteredStations} />
        
        {/* Controls */}
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={8}
          maxDistance={20}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default InteractiveGlobe;