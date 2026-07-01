import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Generates node positions roughly resembling a graph/tree structure
function useGraphLayout(count) {
  return useMemo(() => {
    const nodes = []
    for (let i = 0; i < count; i++) {
      const radius = 4 + Math.random() * 4
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos((Math.random() * 2) - 1)
      nodes.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta) * 0.6,
          radius * Math.cos(phi) - 2,
        ],
        pulse: Math.random() * Math.PI * 2,
      })
    }
    // connect each node to its 1-2 nearest neighbors to form graph edges
    const edges = []
    for (let i = 0; i < nodes.length; i++) {
      const distances = nodes
        .map((n, j) => ({
          j,
          d: j === i ? Infinity : Math.hypot(
            n.position[0] - nodes[i].position[0],
            n.position[1] - nodes[i].position[1],
            n.position[2] - nodes[i].position[2]
          ),
        }))
        .sort((a, b) => a.d - b.d)
      edges.push([i, distances[0].j])
      if (Math.random() > 0.5) edges.push([i, distances[1].j])
    }
    return { nodes, edges }
  }, [count])
}

function GraphNodes({ nodes }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Node key={i} position={node.position} pulse={node.pulse} index={i} />
      ))}
    </group>
  )
}

function Node({ position, pulse, index }) {
  const meshRef = useRef()
  const isCopper = index % 3 === 0

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime()
      const scale = 1 + Math.sin(t * 1.5 + pulse) * 0.25
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshBasicMaterial color={isCopper ? '#58a6ff' : '#3fb950'} transparent opacity={0.85} />
    </mesh>
  )
}

function GraphEdges({ nodes, edges }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.04
    }
  })

  const positions = useMemo(() => {
    const arr = []
    edges.forEach(([a, b]) => {
      arr.push(...nodes[a].position, ...nodes[b].position)
    })
    return new Float32Array(arr)
  }, [nodes, edges])

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#8b95a1" transparent opacity={0.18} />
      </lineSegments>
    </group>
  )
}

function Scene({ nodeCount }) {
  const { nodes, edges } = useGraphLayout(nodeCount)
  return (
    <>
      <GraphEdges nodes={nodes} edges={edges} />
      <GraphNodes nodes={nodes} />
    </>
  )
}

export default function GraphBackground() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const nodeCount = isMobile ? 18 : 38
  const dpr = isMobile ? 1 : [1, 1.5]

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 9], fov: 60 }} dpr={dpr}>
        <Scene nodeCount={nodeCount} />
      </Canvas>
    </div>
  )
}
