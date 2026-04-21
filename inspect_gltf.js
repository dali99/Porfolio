const fs = require('fs');
const { NodeIO } = require('@gltf-transform/core');

async function inspect() {
  const io = new NodeIO();
  const document = await io.read('public/DQ1nW9Gy.glb');
  const root = document.getRoot();
  const meshes = root.listMeshes();
  console.log('Meshes found:', meshes.map(m => m.getName()));
  const materials = root.listMaterials();
  console.log('Materials found:', materials.map(m => m.getName() + " -> " + m.getBaseColorHex()));
}
inspect().catch(console.error);
