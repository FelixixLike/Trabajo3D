import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/COCINACOMPLETA.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={0.001}>
          <group position={[1196.473, 3312.48, 1521.596]} scale={25.4}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-3'].geometry}
              material={materials['[Metal_Corrogated_Shiny]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-4'].geometry}
              material={materials['[Color_009]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-5'].geometry}
              material={nodes['3DGeom-5'].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-6'].geometry}
              material={materials['[Color_A01]']}
            />
            <group position={[11.995, 3.754, -0.787]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-7'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-8'].geometry}
                material={materials['[Color_A01]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-9'].geometry}
                material={materials['[Color_009]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-10'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-11'].geometry}
                material={materials['[Color_009]']}
              />
            </group>
            <group position={[12.366, 3.888, 2.621]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-12'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-13'].geometry}
                material={materials['[Color_009]']}
              />
            </group>
            <group position={[11.905, 4.461, 3.937]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-14'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
                position={[0.425, 0.469, 0.157]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-15'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
                scale={[0.91, 0.91, 1]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_13.geometry}
              material={materials['Material-5']}
              position={[19, 4.109, 0.93]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={[0.02, 0.01, 1]}
            />
          </group>
          <group
            position={[3732.83, 3047.862, 115.798]}
            rotation={[0, 0, 0.04]}
            scale={[25.38, 26.003, 23.475]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-17'].geometry}
              material={nodes['3DGeom-17'].material}
            />
            <group
              position={[24.701, 6.576, 26.317]}
              rotation={[1.384, 0, 0]}
              scale={[0.85, 0.902, 0.997]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-18'].geometry}
                material={materials['[0063_GreenYellow]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-19'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-20'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-21'].geometry}
                material={materials['[0020_Red]']}
              />
            </group>
            <group
              position={[5.393, 6.576, 26.317]}
              rotation={[1.384, 0, 0]}
              scale={[0.85, 0.902, 0.997]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-22'].geometry}
                material={materials['[0063_GreenYellow]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-23'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-24'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-25'].geometry}
                material={materials['[Color_A01]']}
              />
            </group>
            <group position={[-0.726, 5.538, -4.195]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-26'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-27'].geometry}
                material={nodes['3DGeom-27'].material}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_25.geometry}
              material={materials['Material-9']}
              position={[29.32, 6.799, 25.123]}
              rotation={[1.365, 0, 0]}
              scale={[0.009, 0.013, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_26.geometry}
              material={materials['Material-10']}
              position={[-0.387, 6.758, 24.925]}
              rotation={[1.365, 0, 0]}
              scale={[0.013, 0.023, 1]}
            />
          </group>
          <group
            position={[2976.203, 3281.549, 14.229]}
            rotation={[0, 0, 0.046]}
            scale={[21.262, 25.049, 21.64]}>
            <group position={[-4.042, -4.949, 0]} scale={[1, 1.04, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-30'].geometry}
                material={materials['[Metal_Corrogated_Shiny]3']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-31'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-32'].geometry}
                material={materials['[Color M09]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-33'].geometry}
                material={materials['[Color M08]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-34'].geometry}
                material={materials['[Metal_Corrogated_Shiny]3']}
              />
              <group position={[16.417, 1.475, 33.091]} rotation={[1.385, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-36'].geometry}
                  material={materials['[Color M08]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-37'].geometry}
                  material={materials['[0137_Black]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-38'].geometry}
                  material={materials['[Metal_Corrogated_Shiny]3']}
                />
              </group>
              <group position={[14.065, 1.516, 33.309]} rotation={[1.385, 0, 0]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-39'].geometry}
                  material={materials['[0020_Red]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-40'].geometry}
                  material={materials['[0064_Chartreuse]']}
                  position={[0.006, 0, 0]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-35'].geometry}
                material={materials['[Metal_Corrogated_Shiny]3']}
                position={[21.653, 32.402, 5.906]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
            </group>
            <group
              position={[-1.657, 30.245, 21.378]}
              rotation={[0, 0, -Math.PI / 2]}
              scale={[1.391, 1.431, 1.813]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-41'].geometry}
                material={materials['[Metal_Corrogated_Shiny]5']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-42'].geometry}
                material={materials['[Metal_Corrogated_Shiny]5']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-43'].geometry}
                material={materials['[Color D06]']}
              />
              <group
                position={[2.123, 12.2, 3.28]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[1.665, 1.28, 1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-48'].geometry}
                  material={materials['[Metal_Aluminum_Anodized]2']}
                  position={[1.656, 0, 5.533]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-44'].geometry}
                  material={materials['[Metal_Aluminum_Anodized]2']}
                  position={[0, 0.504, 0.02]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-45'].geometry}
                  material={materials['[Metal_Aluminum_Anodized]2']}
                  position={[0.8, 1.706, 0.2]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-46'].geometry}
                  material={materials['[Metal_Aluminum_Anodized]2']}
                  position={[0.125, 0.596, 0.145]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-47'].geometry}
                  material={materials['[Metal_Aluminum_Anodized]2']}
                  position={[0, 0.504, 5.375]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-49'].geometry}
                  material={materials['[Metal_Aluminum_Anodized]2']}
                  position={[2.531, 13.692, 5.539]}
                />
              </group>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-50'].geometry}
              material={materials['LOGO FAGOR']}
              position={[-1.45, -1.979, 34.252]}
            />
          </group>
          <group
            position={[7074.708, 4260.986, 821.66]}
            rotation={[0, 0, 0.046]}
            scale={[63.246, 37.846, 55.372]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-51'].geometry}
              material={materials['<Snow>']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-52'].geometry}
              material={materials.grey}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-53'].geometry}
              material={materials.grey}
              position={[-0.347, -14.401, 1.063]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-53_1'].geometry}
              material={materials.grey}
              position={[8.347, -14.401, 1.063]}
              rotation={[-Math.PI, 0, 0]}
              scale={-1}
            />
          </group>
          <group position={[3324.13, 3175.176, 6.549]} scale={[25.4, 26.723, 23.789]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-56'].geometry}
              material={materials['[Metal_Corrogated_Shiny]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-57'].geometry}
              material={materials['[Metal_Corrogated_Shiny]']}
            />
            <group
              position={[3.853, 1.132, 30.512]}
              rotation={[1.384, 0.04, 0.008]}
              scale={[0.35, 0.902, 0.991]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-58'].geometry}
                material={materials['[0063_GreenYellow]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-59'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-60'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-61'].geometry}
                material={materials['[Color_A01]']}
              />
            </group>
            <group
              position={[11.79, 1.451, 30.512]}
              rotation={[1.384, 0.04, 0.008]}
              scale={[0.35, 0.902, 0.991]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-62'].geometry}
                material={materials['[0063_GreenYellow]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-63'].geometry}
                material={materials['[0137_Black]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-64'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-65'].geometry}
                material={materials['[0020_Red]']}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_63.geometry}
              material={materials['Material-21']}
              position={[13.68, 1.749, 29.318]}
              rotation={[1.366, 0.039, 0.008]}
              scale={[0.004, 0.013, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.mesh_64.geometry}
              material={materials['Material-22']}
              position={[1.469, 1.218, 29.119]}
              rotation={[1.366, 0.039, 0.008]}
              scale={[0.005, 0.023, 1]}
            />
          </group>
          <group
            position={[2667.702, 4073.968, 1613.388]}
            rotation={[0, 0, -1.518]}
            scale={[41.129, 50.867, 25.4]}>
            <group position={[0, 0, 4.086]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-68'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-69'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[5.834, 8.198, -4.086]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-69_1'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[5.834, 25.294, -4.086]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-69_2'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[5.834, 42.381, -4.086]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-69_3'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[5.834, 60.934, -4.086]}
                rotation={[-Math.PI, 0, Math.PI]}
              />
            </group>
            <group position={[3.972, 12.815, 6.345]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-73'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-74'].geometry}
                material={nodes['3DGeom-74'].material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_1'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_2'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 0.346, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
            </group>
            <group position={[3.972, 1.366, 6.345]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-78'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-79'].geometry}
                material={nodes['3DGeom-79'].material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_3'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_4'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_5'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 0.346, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
            </group>
            <group position={[3.972, 24.264, 6.345]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-83'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-84'].geometry}
                material={nodes['3DGeom-84'].material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_6'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_7'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_8'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 0.346, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
            </group>
            <group position={[3.972, 35.721, 6.345]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-88'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-89'].geometry}
                material={nodes['3DGeom-89'].material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_9'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_10'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_11'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 0.346, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
            </group>
            <group position={[3.972, 47.177, 6.345]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-93'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-94'].geometry}
                material={nodes['3DGeom-94'].material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_12'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_13'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_14'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 0.346, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
            </group>
            <group position={[3.972, 58.634, 6.345]} scale={[1, 1.02, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-98'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-99'].geometry}
                material={nodes['3DGeom-99'].material}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_15'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_16'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 11.094, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-75_17'].geometry}
                material={materials['[Metal_Corrogated_Shiny]1']}
                position={[4.95, 0.346, 5.167]}
                rotation={[-Math.PI, 0.837, -Math.PI / 2]}
              />
            </group>
          </group>
          <group position={[5408.798, 3261.655, 6.323]} rotation={[0, 0, 0.046]} scale={25.4}>
            <group position={[-210.62, 227.092, -1.099]} rotation={[0, 0, -0.046]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_108.geometry}
                material={materials['Material-28']}
                position={[226.142, -215.919, 34.968]}
                rotation={[Math.PI / 2, 0.046, 0]}
                scale={[0.013, 0.011, 1]}
              />
              <group position={[220.897, -217.108, 24.853]} rotation={[0, 0, 0.046]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-103'].geometry}
                  material={materials['[0131_Silver]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-104'].geometry}
                  material={materials['[Metal_Corrogated_Shiny]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-105'].geometry}
                  material={nodes['3DGeom-105'].material}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-106'].geometry}
                  material={materials['[Translucent_Glass_Blue]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-107'].geometry}
                  material={materials['[0137_Black]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-108'].geometry}
                  material={materials['[0076_Green]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-109'].geometry}
                  material={materials['[0136_Charcoal]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-110'].geometry}
                  material={materials['[0020_Red]']}
                />
              </group>
            </group>
            <group position={[0.276, 4.449, 2.362]} scale={[1.07, 1, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-112'].geometry}
                material={materials['[Metal_Corrogated_Shiny]2']}
              />
              <group position={[0, 0, 20.462]} scale={[1, 0.804, 0.878]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-113'].geometry}
                  material={materials['[Metal_Corrogated_Shiny]2']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-114'].geometry}
                  material={materials['[Metal_Corrogated_Shiny]2']}
                />
              </group>
            </group>
          </group>
          <group
            position={[1036.089, 2737.293, 18.66]}
            rotation={[0, 0, 0.046]}
            scale={[652.756, 25.4, 25.4]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-115'].geometry}
              material={materials['[Color_009]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-116'].geometry}
              material={nodes['3DGeom-116'].material}
            />
          </group>
          <group position={[4558.127, 3206.626, 6.323]} rotation={[0, 0, 0.046]} scale={25.4}>
            <group position={[-1.419, 0.793, 0]} rotation={[0, 0, -0.046]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-118'].geometry}
                material={materials['[Color_009]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-119'].geometry}
                material={materials['[Metal_Corrogated_Shiny]']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['3DGeom-120'].geometry}
                material={nodes['3DGeom-120'].material}
              />
              <group
                position={[21.069, 1.308, 28.633]}
                rotation={[1.38, 0.04, 0.008]}
                scale={[0.849, 0.838, 1.018]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-121'].geometry}
                  material={materials['[0063_GreenYellow]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-122'].geometry}
                  material={materials['[0137_Black]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-123'].geometry}
                  material={materials['[Metal_Corrogated_Shiny]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-124'].geometry}
                  material={materials['[Color_A01]']}
                />
              </group>
              <group
                position={[26.763, 2.082, 28.633]}
                rotation={[1.38, 0.04, 0.008]}
                scale={[0.849, 0.838, 1.018]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-125'].geometry}
                  material={materials['[0063_GreenYellow]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-126'].geometry}
                  material={materials['[0137_Black]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-127'].geometry}
                  material={materials['[Metal_Corrogated_Shiny]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-128'].geometry}
                  material={materials['[0020_Red]']}
                />
              </group>
              <group
                position={[14.297, 1.308, 28.633]}
                rotation={[1.38, 0.04, 0.008]}
                scale={[0.849, 0.838, 1.018]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-129'].geometry}
                  material={materials['[0063_GreenYellow]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-130'].geometry}
                  material={materials['[0137_Black]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-131'].geometry}
                  material={materials['[Metal_Corrogated_Shiny]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-132'].geometry}
                  material={materials['[Color_A01]']}
                />
              </group>
              <group
                position={[7.486, 1.308, 28.633]}
                rotation={[1.38, 0.04, 0.008]}
                scale={[0.849, 0.838, 1.018]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-133'].geometry}
                  material={materials['[0063_GreenYellow]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-134'].geometry}
                  material={materials['[0137_Black]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-135'].geometry}
                  material={materials['[Metal_Corrogated_Shiny]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-136'].geometry}
                  material={materials['[Color_A01]']}
                />
              </group>
              <group
                position={[2.693, 3.447, 17.41]}
                rotation={[1.381, 0.043, 0.029]}
                scale={[0.476, 0.838, 1.017]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-137'].geometry}
                  material={materials['[0063_GreenYellow]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-138'].geometry}
                  material={materials['[0137_Black]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-139'].geometry}
                  material={materials['[Metal_Corrogated_Shiny]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-140'].geometry}
                  material={materials['[Color_A01]']}
                />
              </group>
              <group
                position={[2.693, 3.447, 12.646]}
                rotation={[1.381, 0.043, 0.029]}
                scale={[0.476, 0.838, 1.017]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-141'].geometry}
                  material={materials['[0063_GreenYellow]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-142'].geometry}
                  material={materials['[0137_Black]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-143'].geometry}
                  material={materials['[Metal_Corrogated_Shiny]']}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['3DGeom-144'].geometry}
                  material={materials['[Color_A01]']}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_142.geometry}
                material={materials['Material-30']}
                position={[31.366, 2.496, 27.529]}
                rotation={[1.344, 0.039, 0.009]}
                scale={[0.009, 0.012, 1]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_143.geometry}
                material={materials['Material-31']}
                position={[1.708, 1.262, 27.346]}
                rotation={[1.344, 0.039, 0.009]}
                scale={[0.013, 0.022, 1]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-117'].geometry}
              material={materials['[Metal_Corrogated_Shiny]']}
              position={[9.877, 0.859, 19.838]}
              rotation={[0, 0, -0.006]}
              scale={[2.666, 1, 1]}
            />
          </group>
          <group position={[1488.485, 3417.522, 838.66]} rotation={[0, 0, 0.046]} scale={25.4}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-147'].geometry}
              material={materials['FRONTAL MICRO 1']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-148'].geometry}
              material={materials['[Color M05]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-149'].geometry}
              material={nodes['3DGeom-149'].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-150'].geometry}
              material={materials['[Color M05]']}
              position={[0, 1.181, 0]}
            />
          </group>
          <group position={[1487.283, 3443.494, -28.34]} scale={25.4}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-151'].geometry}
              material={materials['[Metal_Corrogated_Shiny]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-152'].geometry}
              material={nodes['3DGeom-152'].material}
            />
          </group>
          <group position={[6307.568, 3617.936, -26.823]} scale={25.4}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-153'].geometry}
              material={materials['[Metal_Corrogated_Shiny]']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['3DGeom-154'].geometry}
              material={materials['[Metal_Corrogated_Shiny]5']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['3DGeom-1'].geometry}
            material={materials['[Stone_Vein_Gray]']}
            scale={25.4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['3DGeom-2'].geometry}
            material={nodes['3DGeom-2'].material}
            scale={25.4}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['3DGeom-55'].geometry}
            material={materials['Rectangles Stacked 1x1']}
            position={[923.674, 3216.876, -28.34]}
            scale={25.654}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/COCINACOMPLETA.glb')