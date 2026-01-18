// ============================================
// TESTS PARA ÁRBOL GENEALÓGICO
// ============================================
// INSTRUCCIONES:
// 1. Abre arbol-genealogico_v2_9_6.html en Brave
// 2. Presiona F12
// 3. Click en pestaña "Console"
// 4. Copia UNA de las secciones de abajo
// 5. Pega en Console y presiona Enter
// 6. Observa el árbol
// ============================================


// ============================================
// TEST 1: BÁSICO (Tu JSON real)
// ============================================
personas = [
  {
    "id": 1,
    "nombre": "Salvatore Teresi",
    "fechaNac": "05/07/1882",
    "lugarNac": "Termini Imerese, Italia",
    "matrimonios": [],
    "fechaDef": "12/02/1940",
    "padres": [],
    "hijos": [2]
  },
  {
    "id": 2,
    "nombre": "Stephen Teresi",
    "fechaNac": "03/03/1914",
    "lugarNac": "Portland, Oregon",
    "matrimonios": [{"fecha": "05/11/1941", "nombreConyuge": "Ann Coppola"}],
    "fechaDef": "08/01/1975",
    "padres": [1],
    "hijos": []
  }
];
nextId = 3;
updatePersonList();
drawTree();
console.log("✅ TEST 1 cargado: 2 personas, 1 matrimonio");


// ============================================
// TEST 2: TRES GENERACIONES
// ============================================
personas = [
  {id: 1, nombre: "Abuelo", fechaNac: "01/01/1900", lugarNac: "Madrid", matrimonios: [], fechaDef: "01/01/1980", padres: [], hijos: [2]},
  {id: 2, nombre: "Padre", fechaNac: "01/01/1930", lugarNac: "Barcelona", matrimonios: [{fecha: "01/01/1955", nombreConyuge: "Madre"}], fechaDef: "", padres: [1], hijos: [3]},
  {id: 3, nombre: "Hijo", fechaNac: "01/01/1960", lugarNac: "Valencia", matrimonios: [], fechaDef: "", padres: [2], hijos: []}
];
nextId = 4;
updatePersonList();
drawTree();
console.log("✅ TEST 2 cargado: 3 generaciones");


// ============================================
// TEST 3: CUATRO MATRIMONIOS ⚠️ CRÍTICO
// ============================================
personas = [
  {
    id: 1,
    nombre: "Juan Pérez",
    fechaNac: "15/03/1950",
    lugarNac: "Buenos Aires",
    matrimonios: [
      {fecha: "20/05/1975", nombreConyuge: "María García"},
      {fecha: "10/08/1985", nombreConyuge: "Ana López"},
      {fecha: "15/03/1995", nombreConyuge: "Rosa Martínez"},
      {fecha: "22/11/2005", nombreConyuge: "Laura Sánchez"}
    ],
    fechaDef: "12/12/2020",
    padres: [],
    hijos: [2]
  },
  {id: 2, nombre: "Carlos Pérez", fechaNac: "10/06/1976", lugarNac: "Córdoba", matrimonios: [{fecha: "15/09/2000", nombreConyuge: "Sofía"}], fechaDef: "", padres: [1], hijos: []}
];
nextId = 3;
updatePersonList();
drawTree();
console.log("⚠️ TEST 3 cargado: 4 matrimonios - OBSERVA SUPERPOSICIÓN");


// ============================================
// TEST 4: HERMANOS
// ============================================
personas = [
  {id: 1, nombre: "Padre", fechaNac: "12/04/1950", lugarNac: "", matrimonios: [], fechaDef: "", padres: [], hijos: [2, 3]},
  {id: 2, nombre: "Hijo 1", fechaNac: "25/06/1975", lugarNac: "", matrimonios: [], fechaDef: "", padres: [1], hijos: []},
  {id: 3, nombre: "Hijo 2", fechaNac: "08/11/1978", lugarNac: "", matrimonios: [], fechaDef: "", padres: [1], hijos: []}
];
nextId = 4;
updatePersonList();
drawTree();
console.log("✅ TEST 4 cargado: Hermanos - VERIFICA CENTRADO");


// ============================================
// TEST 5: SEIS MATRIMONIOS ⚠️⚠️ EXTREMO
// ============================================
personas = [
  {
    id: 1,
    nombre: "Enrique VIII",
    fechaNac: "28/06/1491",
    lugarNac: "Inglaterra",
    matrimonios: [
      {fecha: "11/06/1509", nombreConyuge: "Catalina de Aragón"},
      {fecha: "25/01/1533", nombreConyuge: "Ana Bolena"},
      {fecha: "30/05/1536", nombreConyuge: "Juana Seymour"},
      {fecha: "06/01/1540", nombreConyuge: "Ana de Cleves"},
      {fecha: "28/07/1540", nombreConyuge: "Catalina Howard"},
      {fecha: "12/07/1543", nombreConyuge: "Catalina Parr"}
    ],
    fechaDef: "28/01/1547",
    padres: [],
    hijos: [2]
  },
  {id: 2, nombre: "María I", fechaNac: "18/02/1516", lugarNac: "", matrimonios: [], fechaDef: "17/11/1558", padres: [1], hijos: []}
];
nextId = 3;
updatePersonList();
drawTree();
console.log("⚠️⚠️ TEST 5 cargado: 6 matrimonios - CASO EXTREMO");


// ============================================
// DIAGNÓSTICO RÁPIDO
// ============================================
// Ejecuta esto DESPUÉS de cargar un test
console.log("\n=== DIAGNÓSTICO ===");
personas.forEach(p => {
  let h = 30;
  if (p.fechaNac || p.lugarNac) h += 20;
  h += p.matrimonios.length * 20;
  if (p.fechaDef) h += 20;
  h += 24;
  const espacio = NODE_HEIGHT + V_GAP;
  console.log(`${p.nombre}: Altura ${h}px vs Espacio ${espacio}px ${h > espacio ? '❌ DESBORDA ' + (h-espacio) + 'px' : '✅'}`);
});
