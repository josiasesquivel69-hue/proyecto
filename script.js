/* ═══════════════════════════════════════════════
   AUTORENT GLOBAL — script.js
   Vanilla JS · Sin dependencias externas
═══════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════
   DATOS DE DEMOSTRACIÓN
══════════════════════════════ */
const VEHICLES = [
  {
    id: 'v01',
    brand: 'Hyundai', model: 'i10', year: 2024, category: 'Económico',
    transmission: 'Manual', fuel: 'Gasolina', seats: 5, doors: 4,
    hasAC: true, hasGPS: false, mileage: 22410, color: 'Blanco',
    branch: 'SJO — San José Aeropuerto',
    status: 'available',
    dailyRate: 35, weeklyRate: 210, monthlyRate: 750,
    plate: 'ABC-123',
    // Hyundai i10 — hatchback compacto
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=700&q=80',
    description: 'Ideal para recorridos urbanos y rutas costeras. Bajo consumo de combustible y fácil estacionamiento.'
  },
  {
    id: 'v02',
    brand: 'Kia', model: 'Picanto', year: 2024, category: 'Económico',
    transmission: 'Automático', fuel: 'Gasolina', seats: 5, doors: 4,
    hasAC: true, hasGPS: false, mileage: 15820, color: 'Rojo',
    branch: 'LIR — Liberia Aeropuerto',
    status: 'available',
    dailyRate: 35, weeklyRate: 210, monthlyRate: 750,
    plate: 'DEF-456',
    // Kia Picanto — city car rojo
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=700&q=80',
    description: 'Compacto y ágil, perfecto para explorar Guanacaste y sus playas.'
  },
  {
    id: 'v03',
    brand: 'Toyota', model: 'Yaris', year: 2023, category: 'Compacto',
    transmission: 'Automático', fuel: 'Gasolina', seats: 5, doors: 4,
    hasAC: true, hasGPS: true, mileage: 34100, color: 'Plateado',
    branch: 'SJO — San José Aeropuerto',
    status: 'available',
    dailyRate: 45, weeklyRate: 280, monthlyRate: 950,
    plate: 'GHI-789',
    // Toyota Yaris — sedán compacto plateado
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80',
    description: 'Versátil y económico. Incluye GPS y cámara de reversa para mayor comodidad en carretera.'
  },
  {
    id: 'v04',
    brand: 'Hyundai', model: 'Accent', year: 2025, category: 'Compacto',
    transmission: 'Automático', fuel: 'Gasolina', seats: 5, doors: 4,
    hasAC: true, hasGPS: true, mileage: 8650, color: 'Azul',
    branch: 'SJC — San José Centro',
    status: 'available',
    dailyRate: 45, weeklyRate: 280, monthlyRate: 950,
    plate: 'JKL-012',
    // Hyundai Accent — sedán azul moderno
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=700&q=80',
    description: 'Unidad nueva del año 2025, con sistema multimedia y conectividad Bluetooth.'
  },
  {
    id: 'v05',
    brand: 'Hyundai', model: 'Tucson', year: 2023, category: 'SUV Mediano',
    transmission: 'Automático', fuel: 'Gasolina', seats: 5, doors: 4,
    hasAC: true, hasGPS: true, mileage: 41200, color: 'Negro',
    branch: 'SJO — San José Aeropuerto',
    status: 'available',
    dailyRate: 65, weeklyRate: 400, monthlyRate: 1400,
    plate: 'MNO-345',
    // Hyundai Tucson — SUV crossover negro
    image: 'https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?auto=format&fit=crop&w=700&q=80',
    description: 'SUV mediano con tracción AWD opcional. Ideal para rutas mixtas entre ciudad y zona rural.'
  },
  {
    id: 'v06',
    brand: 'Toyota', model: 'RAV4', year: 2024, category: 'SUV Mediano',
    transmission: 'Automático', fuel: 'Híbrido', seats: 5, doors: 4,
    hasAC: true, hasGPS: true, mileage: 19750, color: 'Gris',
    branch: 'LIR — Liberia Aeropuerto',
    status: 'available',
    dailyRate: 65, weeklyRate: 400, monthlyRate: 1400,
    plate: 'PQR-678',
    // Toyota RAV4 — SUV híbrido gris
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=700&q=80',
    description: 'Versión híbrida con excelente eficiencia de combustible. Perfecto para recorridos largos.'
  },
  {
    id: 'v07',
    brand: 'Toyota', model: 'Land Cruiser Prado', year: 2024, category: 'SUV Premium',
    transmission: 'Automático', fuel: 'Diésel', seats: 7, doors: 4,
    hasAC: true, hasGPS: true, mileage: 12300, color: 'Blanco',
    branch: 'SJO — San José Aeropuerto',
    status: 'available',
    dailyRate: 95, weeklyRate: 580, monthlyRate: 2100,
    plate: 'STU-901',
    // Toyota Land Cruiser Prado — SUV 4x4 grande blanco
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=700&q=80',
    description: 'Referente de la aventura 4×4. Apto para cualquier terreno, con capacidad para 7 pasajeros.'
  },
  {
    id: 'v08',
    brand: 'Hyundai', model: 'Santa Fe', year: 2023, category: 'SUV Premium',
    transmission: 'Automático', fuel: 'Gasolina', seats: 7, doors: 4,
    hasAC: true, hasGPS: true, mileage: 28900, color: 'Marrón',
    branch: 'LIR — Liberia Aeropuerto',
    status: 'rented',
    dailyRate: 95, weeklyRate: 580, monthlyRate: 2100,
    plate: 'VWX-234',
    // Hyundai Santa Fe — SUV premium de 7 plazas
    image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=700&q=80',
    description: 'Lujo y espacio en un mismo vehículo. Tecnología de conducción semi-autónoma.'
  },
  {
    id: 'v09',
    brand: 'Toyota', model: 'Hilux', year: 2024, category: 'Pickup 4×4',
    transmission: 'Manual', fuel: 'Diésel', seats: 5, doors: 4,
    hasAC: true, hasGPS: true, mileage: 36700, color: 'Gris Oscuro',
    branch: 'SJO — San José Aeropuerto',
    status: 'available',
    dailyRate: 85, weeklyRate: 520, monthlyRate: 1800,
    plate: 'YZA-567',
    // Toyota Hilux — pickup doble cabina gris
    image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?auto=format&fit=crop&w=700&q=80',
    description: 'La pickup más confiable del mercado. Tracción 4×4 real para cualquier condición de terreno.'
  },
  {
    id: 'v10',
    brand: 'Mitsubishi', model: 'L200', year: 2023, category: 'Pickup 4×4',
    transmission: 'Automático', fuel: 'Diésel', seats: 5, doors: 4,
    hasAC: true, hasGPS: false, mileage: 52100, color: 'Negro',
    branch: 'SJC — San José Centro',
    status: 'maintenance',
    dailyRate: 85, weeklyRate: 520, monthlyRate: 1800,
    plate: 'BCD-890',
    // Mitsubishi L200 — pickup de trabajo negra
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=700&q=80',
    description: 'Pickup robusta para transporte de carga y aventura. Actualmente en mantenimiento programado.'
  },
  {
    id: 'v11',
    brand: 'Kia', model: 'Carnival', year: 2024, category: 'Minivan',
    transmission: 'Automático', fuel: 'Gasolina', seats: 8, doors: 4,
    hasAC: true, hasGPS: true, mileage: 21500, color: 'Plateado',
    branch: 'SJO — San José Aeropuerto',
    status: 'available',
    dailyRate: 75, weeklyRate: 460, monthlyRate: 1600,
    plate: 'EFG-123',
    // Kia Carnival — minivan de 8 plazas plateada
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=700&q=80',
    description: 'La mejor opción para familias o grupos. 8 plazas con máximo confort y maletero amplio.'
  },
  {
    id: 'v12',
    brand: 'Hyundai', model: 'Staria', year: 2024, category: 'Minivan',
    transmission: 'Automático', fuel: 'Gasolina', seats: 9, doors: 4,
    hasAC: true, hasGPS: true, mileage: 14300, color: 'Blanco',
    branch: 'LIR — Liberia Aeropuerto',
    status: 'available',
    dailyRate: 75, weeklyRate: 460, monthlyRate: 1600,
    plate: 'HIJ-456',
    // Hyundai Staria — minivan premium blanca
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=700&q=80',
    description: 'Diseño futurista y espacioso. Perfecta para traslados corporativos o tours grupales.'
  }
];

/* ══════════════════════════════
   NAVEGACIÓN DE SECCIONES
══════════════════════════════ */
function showSection(sectionId) {
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

  // Mostrar la sección solicitada
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Actualizar clases activas en los enlaces
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === sectionId);
  });

  // Cerrar menú hamburguesa si está abierto
  const navLinks = document.getElementById('navLinks');
  if (navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
  }

  // Inicializar catálogo si es la sección
  if (sectionId === 'catalog') {
    renderCatalog(VEHICLES);
  }
}

/* ══════════════════════════════
   HAMBURGER MENU
══════════════════════════════ */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

/* ══════════════════════════════
   RENDER DE TARJETAS DE FLOTA
══════════════════════════════ */
function getStatusLabel(status) {
  if (status === 'available') return { label: 'Disponible', cls: 'available' };
  if (status === 'rented') return { label: 'Alquilado', cls: 'rented' };
  if (status === 'maintenance') return { label: 'Mantenimiento', cls: 'maintenance' };
  return { label: status, cls: '' };
}

function buildVehicleCard(vehicle) {
  const status = getStatusLabel(vehicle.status);

  // Spec pills con icono FA apropiado para cada atributo
  const specs = [
    { icon: 'fa-solid fa-gears',     label: vehicle.transmission },
    { icon: vehicle.fuel === 'Híbrido' ? 'fa-solid fa-leaf' : vehicle.fuel === 'Eléctrico' ? 'fa-solid fa-bolt' : 'fa-solid fa-gas-pump', label: vehicle.fuel },
    { icon: 'fa-solid fa-users',     label: `${vehicle.seats} plazas` },
    vehicle.hasAC  ? { icon: 'fa-solid fa-snowflake', label: 'A/C' }    : null,
    vehicle.hasGPS ? { icon: 'fa-solid fa-map-pin',   label: 'GPS' }    : null,
  ].filter(Boolean);

  return `
    <div class="fleet-card" data-id="${vehicle.id}">
      <div class="fleet-card-img">
        <img src="${vehicle.image}" alt="${vehicle.brand} ${vehicle.model} ${vehicle.year}"
             loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=700&q=80'" />
        <span class="fleet-card-badge ${status.cls}">${status.label}</span>
      </div>
      <div class="fleet-card-body">
        <div class="fleet-card-category">${vehicle.category}</div>
        <div class="fleet-card-name">${vehicle.year} ${vehicle.brand} ${vehicle.model}</div>
        <div class="fleet-card-specs">
          ${specs.map(s => `<span class="spec-pill"><i class="${s.icon}"></i> ${s.label}</span>`).join('')}
        </div>
        <div class="fleet-card-footer">
          <div class="fleet-card-price">$${vehicle.dailyRate} <span>/día</span></div>
          <button class="btn btn-primary btn-sm" onclick="openVehicleModal('${vehicle.id}')">
            ${vehicle.status === 'available' ? '<i class="fa-solid fa-calendar-check"></i> Reservar' : '<i class="fa-solid fa-eye"></i> Ver detalles'}
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ══════════════════════════════
   HOME: FLOTA DESTACADA (6)
══════════════════════════════ */
function renderHomeFleet() {
  const grid = document.getElementById('homeFleetGrid');
  if (!grid) return;
  const featured = VEHICLES.filter(v => v.status !== 'maintenance').slice(0, 6);
  grid.innerHTML = featured.map(buildVehicleCard).join('');
}

/* ══════════════════════════════
   CATÁLOGO: RENDER + FILTROS
══════════════════════════════ */
function renderCatalog(vehicles) {
  const grid = document.getElementById('catalogGrid');
  const empty = document.getElementById('emptyState');
  const count = document.getElementById('resultsCount');
  if (!grid) return;

  if (vehicles.length === 0) {
    grid.innerHTML = '';
    grid.classList.add('hidden');
    empty.classList.remove('hidden');
    count.textContent = 'Sin resultados con los filtros actuales';
  } else {
    grid.innerHTML = vehicles.map(buildVehicleCard).join('');
    grid.classList.remove('hidden');
    empty.classList.add('hidden');
    count.textContent = `Mostrando ${vehicles.length} vehículo${vehicles.length !== 1 ? 's' : ''}`;
  }
}

function applyFilters() {
  const cat   = document.getElementById('filterCategory')?.value || '';
  const branch = document.getElementById('filterBranch')?.value || '';
  const trans  = document.getElementById('filterTransmission')?.value || '';
  const fuel   = document.getElementById('filterFuel')?.value || '';
  const search = (document.getElementById('filterSearch')?.value || '').toLowerCase();

  const filtered = VEHICLES.filter(v => {
    if (cat   && v.category     !== cat)   return false;
    if (branch && !v.branch.includes(branch.split(' ')[0])) return false;
    if (trans && v.transmission !== trans) return false;
    if (fuel  && v.fuel         !== fuel)  return false;
    if (search && !`${v.brand} ${v.model} ${v.category}`.toLowerCase().includes(search)) return false;
    return true;
  });

  renderCatalog(filtered);
}

function clearFilters() {
  ['filterCategory','filterBranch','filterTransmission','filterFuel','filterSearch'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  renderCatalog(VEHICLES);
}

/* ══════════════════════════════
   BÚSQUEDA DESDE HERO WIDGET
══════════════════════════════ */
function handleSearch() {
  const pickup  = document.getElementById('bwPickup')?.value;
  const ret     = document.getElementById('bwReturn')?.value;
  const catVal  = document.getElementById('bwCategory')?.value;

  if (!pickup || !ret) {
    showToast('Por favor seleccione fechas de recogida y devolución.');
    return;
  }
  if (new Date(ret) <= new Date(pickup)) {
    showToast('La fecha de devolución debe ser posterior a la de recogida.');
    return;
  }

  // Ir al catálogo con el filtro de categoría pre-aplicado
  showSection('catalog');
  setTimeout(() => {
    if (catVal) {
      const filterEl = document.getElementById('filterCategory');
      if (filterEl) { filterEl.value = catVal; applyFilters(); }
    }
  }, 100);
}

/* ══════════════════════════════
   MODAL DE VEHÍCULO
══════════════════════════════ */
let currentVehicleId = null;
let bookingStep = 1;

function openVehicleModal(vehicleId) {
  currentVehicleId = vehicleId;
  const v = VEHICLES.find(x => x.id === vehicleId);
  if (!v) return;

  const overlay = document.getElementById('vehicleModal');
  const content = document.getElementById('vehicleModalContent');

  content.innerHTML = `
    <div class="vmodal-img">
      <img src="${v.image}" alt="${v.brand} ${v.model}"
           onerror="this.src='https://images.unsplash.com/photo-1469285994282-454ceb49e63c?auto=format&fit=crop&w=700&q=80'" />
    </div>
    <div class="vmodal-body">
      <div class="vmodal-header">
        <div>
          <div class="vmodal-category">${v.category}</div>
          <div class="vmodal-name">${v.year} ${v.brand} ${v.model}</div>
        </div>
        <div class="vmodal-price-block">
          <div class="vmodal-price-label">Tarifa diaria</div>
          <div class="vmodal-price">$${v.dailyRate} <small style="font-size:0.75rem;font-weight:400;color:#68737D">/día</small></div>
        </div>
      </div>

      <div class="vmodal-specs">
        <div class="vmodal-spec">
          <div class="vmodal-spec-label">Transmisión</div>
          <div class="vmodal-spec-value">${v.transmission}</div>
        </div>
        <div class="vmodal-spec">
          <div class="vmodal-spec-label">Combustible</div>
          <div class="vmodal-spec-value">${v.fuel}</div>
        </div>
        <div class="vmodal-spec">
          <div class="vmodal-spec-label">Plazas</div>
          <div class="vmodal-spec-value">${v.seats} pasajeros</div>
        </div>
        <div class="vmodal-spec">
          <div class="vmodal-spec-label">Año</div>
          <div class="vmodal-spec-value">${v.year}</div>
        </div>
        <div class="vmodal-spec">
          <div class="vmodal-spec-label">Aire acond.</div>
          <div class="vmodal-spec-value">${v.hasAC ? 'Incluido' : 'No'}</div>
        </div>
        <div class="vmodal-spec">
          <div class="vmodal-spec-label">GPS</div>
          <div class="vmodal-spec-value">${v.hasGPS ? 'Incluido' : 'No incluye'}</div>
        </div>
      </div>

      <div class="vmodal-branch">
        <span>Sucursal de recogida: <strong>${v.branch}</strong></span>
        <span style="font-size:0.75rem;color:#68737D">Placa: ${v.plate}</span>
      </div>

      <p style="font-size:0.875rem;color:#68737D;margin-bottom:20px;line-height:1.6;">${v.description}</p>

      ${v.status === 'available'
        ? `<div class="vmodal-cta">
            <button class="btn btn-outline" onclick="closeVehicleModal()">Cerrar</button>
            <button class="btn btn-primary" onclick="openBookingModal('${v.id}')">Iniciar reserva</button>
          </div>`
        : `<div style="padding:12px 16px;background:#FEF3C7;border:1px solid #B7791F;border-radius:8px;font-size:0.875rem;color:#92400E;margin-bottom:16px;">
            Este vehículo no está disponible en este momento. Puede consultar disponibilidad futura contactando con nuestra oficina.
           </div>
           <button class="btn btn-outline w-full" onclick="closeVehicleModal()">Volver al catálogo</button>`
      }
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVehicleModal() {
  document.getElementById('vehicleModal').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════
   FLUJO DE RESERVA (4 PASOS)
══════════════════════════════ */
function openBookingModal(vehicleId) {
  // Si se llama desde el modal de vehículo, asignamos el ID
  if (vehicleId) currentVehicleId = vehicleId;
  const v = VEHICLES.find(x => x.id === currentVehicleId) || VEHICLES[0];
  bookingStep = 1;

  // Cerrar modal de vehículo si estaba abierto
  closeVehicleModal();

  const overlay = document.getElementById('vehicleModal');
  const content = document.getElementById('vehicleModalContent');

  content.innerHTML = buildBookingHTML(v);
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Set default dates
  const today = new Date();
  const pickup = new Date(today); pickup.setDate(today.getDate() + 1);
  const ret    = new Date(today); ret.setDate(today.getDate() + 4);
  document.getElementById('bPickup').value = formatDate(pickup);
  document.getElementById('bReturn').value = formatDate(ret);
  updatePriceBreakdown(v);
}

function buildBookingHTML(v) {
  return `
    <div class="booking-steps">
      <h3 class="modal-title" style="margin-bottom:20px;">
        Reservar: ${v.year} ${v.brand} ${v.model}
      </h3>

      <!-- Indicador de pasos -->
      <div class="step-indicator">
        <div class="step-dot active" id="sd1">
          <div class="step-dot-circle">1</div>
          <span class="step-dot-label">Fechas</span>
        </div>
        <div class="step-line" id="sl1"></div>
        <div class="step-dot" id="sd2">
          <div class="step-dot-circle">2</div>
          <span class="step-dot-label">Cobertura</span>
        </div>
        <div class="step-line" id="sl2"></div>
        <div class="step-dot" id="sd3">
          <div class="step-dot-circle">3</div>
          <span class="step-dot-label">Datos</span>
        </div>
        <div class="step-line" id="sl3"></div>
        <div class="step-dot" id="sd4">
          <div class="step-dot-circle">4</div>
          <span class="step-dot-label">Confirmación</span>
        </div>
      </div>

      <!-- Paso 1: Fechas y Sucursal -->
      <div class="booking-step active" id="bstep1">
        <h4>Seleccione fechas y sucursal</h4>
        <div class="booking-form-grid">
          <div class="form-group">
            <label>Fecha de recogida</label>
            <input type="date" id="bPickup" onchange="updatePriceBreakdown()"/>
          </div>
          <div class="form-group">
            <label>Fecha de devolución</label>
            <input type="date" id="bReturn" onchange="updatePriceBreakdown()"/>
          </div>
          <div class="form-group">
            <label>Sucursal de recogida</label>
            <select id="bPickupBranch">
              <option>San José — Aeropuerto Juan Santamaría (SJO)</option>
              <option>Liberia — Aeropuerto Daniel Oduber (LIR)</option>
              <option>San José — Oficina Centro (SJC)</option>
            </select>
          </div>
          <div class="form-group">
            <label>Sucursal de devolución</label>
            <select id="bReturnBranch" onchange="updatePriceBreakdown()">
              <option>Misma sucursal de recogida</option>
              <option>San José — Aeropuerto Juan Santamaría (SJO)</option>
              <option>Liberia — Aeropuerto Daniel Oduber (LIR)</option>
              <option>San José — Oficina Centro (SJC)</option>
            </select>
          </div>
        </div>

        <div id="priceBreakdown" style="margin-top:20px;"></div>

        <div class="step-nav">
          <button class="btn btn-ghost" onclick="closeVehicleModal()">Cancelar</button>
          <button class="btn btn-primary" onclick="nextStep(2)">Continuar &rarr;</button>
        </div>
      </div>

      <!-- Paso 2: Cobertura -->
      <div class="booking-step" id="bstep2">
        <h4>Seleccione su plan de cobertura</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${[
            { code:'CDW', name:'CDW Básica', price:12, desc:'Con deducible de $500. Cubre colisión y robo.'},
            { code:'FULL', name:'Full Coverage', price:22, desc:'Sin deducible. La más recomendada.'},
            { code:'PREMIUM', name:'Premium Plus', price:30, desc:'Sin deducible + efectos personales + asistencia legal.'},
            { code:'TPL', name:'Terceros (TPL)', price:8, desc:'Cobertura básica de responsabilidad civil.'},
          ].map(cov => `
            <label class="coverage-option" style="display:flex;align-items:center;gap:14px;padding:14px;border:1.5px solid #E9ECEF;border-radius:8px;cursor:pointer;transition:border-color 0.2s;">
              <input type="radio" name="bCoverage" value="${cov.code}" ${cov.code === 'FULL' ? 'checked' : ''} onchange="updatePriceBreakdown()" style="accent-color:#E87532;width:16px;height:16px;flex-shrink:0;" />
              <div style="flex:1;">
                <div style="font-weight:700;color:#172B3A;font-size:0.9rem;">${cov.name}</div>
                <div style="font-size:0.8rem;color:#68737D;">${cov.desc}</div>
              </div>
              <div style="font-family:'DM Sans',sans-serif;font-size:1.1rem;font-weight:700;color:#172B3A;white-space:nowrap;">$${cov.price}/día</div>
            </label>
          `).join('')}
        </div>
        <div class="step-nav">
          <button class="btn btn-ghost" onclick="nextStep(1)">&larr; Atrás</button>
          <button class="btn btn-primary" onclick="nextStep(3)">Continuar &rarr;</button>
        </div>
      </div>

      <!-- Paso 3: Datos del conductor -->
      <div class="booking-step" id="bstep3">
        <h4>Datos del conductor principal</h4>
        <div class="booking-form-grid">
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" id="bFirstName" placeholder="Nombre" required />
          </div>
          <div class="form-group">
            <label>Apellido</label>
            <input type="text" id="bLastName" placeholder="Apellido" required />
          </div>
          <div class="form-group">
            <label>Correo electrónico</label>
            <input type="email" id="bEmail" placeholder="correo@ejemplo.com" required />
          </div>
          <div class="form-group">
            <label>Teléfono</label>
            <input type="tel" id="bPhone" placeholder="+506 8888-0000" />
          </div>
          <div class="form-group">
            <label>N.° de licencia de conducir</label>
            <input type="text" id="bLicense" placeholder="Número de licencia" required />
          </div>
          <div class="form-group">
            <label>País de emisión</label>
            <select id="bLicenseCountry">
              <option>Costa Rica</option>
              <option>Estados Unidos</option>
              <option>México</option>
              <option>España</option>
              <option>Otro</option>
            </select>
          </div>
        </div>
        <div class="form-group" style="margin-top:10px;">
          <label style="display:flex;align-items:flex-start;gap:10px;cursor:pointer;font-size:0.82rem;color:#495057;font-weight:400;text-transform:none;letter-spacing:0;">
            <input type="checkbox" id="bAcceptTerms" style="margin-top:2px;" />
            Acepto los <a href="#" style="color:#E87532;text-decoration:underline;">Términos y Condiciones</a> y la <a href="#" style="color:#E87532;text-decoration:underline;">Política de Privacidad</a> de AutoRent Global.
          </label>
        </div>
        <div class="step-nav">
          <button class="btn btn-ghost" onclick="nextStep(2)">&larr; Atrás</button>
          <button class="btn btn-primary" onclick="confirmBooking()">Confirmar reserva</button>
        </div>
      </div>

      <!-- Paso 4: Confirmación / Voucher -->
      <div class="booking-step" id="bstep4">
        <div style="text-align:center;margin-bottom:24px;">
          <div style="font-size:3rem;margin-bottom:8px;">✓</div>
          <h4 style="font-size:1.2rem;color:#172B3A;margin-bottom:4px;">¡Reserva confirmada!</h4>
          <p style="font-size:0.875rem;color:#68737D;">Su voucher de confirmación ha sido enviado al correo registrado.</p>
        </div>
        <div class="voucher" id="bookingVoucher"></div>
        <div class="step-nav" style="justify-content:center;margin-top:20px;">
          <button class="btn btn-outline" onclick="closeVehicleModal()">Cerrar</button>
          <button class="btn btn-primary" onclick="showSection('catalog')">Ver más vehículos</button>
        </div>
      </div>
    </div>
  `;
}

function nextStep(step) {
  // Validar paso 1
  if (step === 2) {
    const pickup = document.getElementById('bPickup')?.value;
    const ret    = document.getElementById('bReturn')?.value;
    if (!pickup || !ret) { showToast('Seleccione las fechas de recogida y devolución.'); return; }
    if (new Date(ret) <= new Date(pickup)) { showToast('La devolución debe ser posterior a la recogida.'); return; }
  }

  // Ocultar pasos actuales
  document.querySelectorAll('.booking-step').forEach(s => s.classList.remove('active'));
  document.getElementById(`bstep${step}`).classList.add('active');
  bookingStep = step;

  // Actualizar indicador visual
  for (let i = 1; i <= 4; i++) {
    const dot  = document.getElementById(`sd${i}`);
    const line = document.getElementById(`sl${i}`);
    if (dot) {
      dot.classList.toggle('active', i === step);
      dot.classList.toggle('done', i < step);
    }
    if (line) line.classList.toggle('done', i < step);
  }
}

function confirmBooking() {
  const firstName = document.getElementById('bFirstName')?.value;
  const lastName  = document.getElementById('bLastName')?.value;
  const email     = document.getElementById('bEmail')?.value;
  const license   = document.getElementById('bLicense')?.value;
  const accepted  = document.getElementById('bAcceptTerms')?.checked;

  if (!firstName || !lastName || !email || !license) {
    showToast('Por favor complete todos los campos obligatorios.'); return;
  }
  if (!accepted) {
    showToast('Debe aceptar los Términos y Condiciones para continuar.'); return;
  }

  const v      = VEHICLES.find(x => x.id === currentVehicleId);
  const pickup = document.getElementById('bPickup')?.value;
  const ret    = document.getElementById('bReturn')?.value;
  const days   = dateDiff(pickup, ret);
  const code   = 'AR-2026-' + Math.floor(10000 + Math.random() * 90000);

  const voucher = document.getElementById('bookingVoucher');
  if (voucher && v) {
    voucher.innerHTML = `
      <div class="voucher-label">Código de confirmación</div>
      <div class="voucher-code">${code}</div>
      <div class="voucher-detail">
        <strong>${v.year} ${v.brand} ${v.model}</strong><br/>
        Conductor: ${firstName} ${lastName}<br/>
        Recogida: ${formatDateDisplay(pickup)} → Devolución: ${formatDateDisplay(ret)} (${days} día${days !== 1 ? 's' : ''})<br/>
        Total estimado: <strong>$${calcTotal(v, days)} USD</strong> (IVA incluido)
      </div>
    `;
  }

  nextStep(4);
}

/* ══════════════════════════════
   CÁLCULO DE PRECIOS
══════════════════════════════ */
function calcTotal(vehicle, days) {
  const covRate = getSelectedCoverageRate();
  const base    = vehicle.dailyRate * days;
  const cov     = covRate * days;
  const tax     = Math.round((base + cov) * 0.13 * 100) / 100;
  const airportFee = 15;
  const dropOff = isDifferentBranch() ? 55 : 0;
  return (base + cov + tax + airportFee + dropOff).toFixed(2);
}

function getSelectedCoverageRate() {
  const sel = document.querySelector('input[name="bCoverage"]:checked');
  const rates = { CDW: 12, FULL: 22, PREMIUM: 30, TPL: 8 };
  return rates[sel?.value] || 22;
}

function isDifferentBranch() {
  const el = document.getElementById('bReturnBranch');
  return el && el.value !== 'Misma sucursal de recogida';
}

function updatePriceBreakdown(vehicle) {
  const container = document.getElementById('priceBreakdown');
  if (!container) return;

  const v     = vehicle || VEHICLES.find(x => x.id === currentVehicleId) || VEHICLES[0];
  const pickup = document.getElementById('bPickup')?.value;
  const ret    = document.getElementById('bReturn')?.value;

  if (!pickup || !ret || new Date(ret) <= new Date(pickup)) {
    container.innerHTML = '';
    return;
  }

  const days   = dateDiff(pickup, ret);
  const covRate = getSelectedCoverageRate();
  const base   = v.dailyRate * days;
  const cov    = covRate * days;
  const tax    = Math.round((base + cov) * 0.13 * 100) / 100;
  const airport = 15;
  const dropOff = isDifferentBranch() ? 55 : 0;
  const total   = base + cov + tax + airport + dropOff;

  container.innerHTML = `
    <div class="price-breakdown">
      <div class="price-line">
        <span>Tarifa base (${days} día${days !== 1 ? 's' : ''} × $${v.dailyRate})</span>
        <span>$${base.toFixed(2)}</span>
      </div>
      <div class="price-line">
        <span>Cobertura (${days} día${days !== 1 ? 's' : ''} × $${covRate})</span>
        <span>$${cov.toFixed(2)}</span>
      </div>
      <div class="price-line">
        <span>IVA 13%</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="price-line">
        <span>Cargo aeroportuario</span>
        <span>$${airport.toFixed(2)}</span>
      </div>
      ${dropOff > 0 ? `<div class="price-line"><span>Cargo devolución sucursal diferente</span><span>$${dropOff.toFixed(2)}</span></div>` : ''}
      <div class="price-line price-total">
        <span>Total estimado</span>
        <span class="price-total-val">$${total.toFixed(2)} USD</span>
      </div>
    </div>
  `;
}

/* ══════════════════════════════
   MODAL CORPORATIVO
══════════════════════════════ */
function openContactModal() {
  document.getElementById('contactModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeContactModal() {
  document.getElementById('contactModal').classList.remove('open');
  document.body.style.overflow = '';
}
function submitCorporateForm(e) {
  e.preventDefault();
  document.getElementById('corpSuccess').classList.remove('hidden');
  setTimeout(() => {
    closeContactModal();
    document.getElementById('corpSuccess').classList.add('hidden');
  }, 2500);
}

/* ══════════════════════════════
   FORMULARIO DE CONTACTO
══════════════════════════════ */
function submitContactForm(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  if (success) {
    success.classList.remove('hidden');
    e.target.reset();
    setTimeout(() => success.classList.add('hidden'), 5000);
  }
}

/* ══════════════════════════════
   CIERRE MODAL AL HACER CLICK AFUERA
══════════════════════════════ */
function closeModal(event) {
  if (event.target.classList.contains('modal-overlay')) {
    event.target.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ══════════════════════════════
   TOAST
══════════════════════════════ */
function showToast(message, duration = 3500) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ══════════════════════════════
   UTILIDADES DE FECHA
══════════════════════════════ */
function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function formatDateDisplay(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  return `${parseInt(d)} ${months[parseInt(m)-1]} ${y}`;
}

function dateDiff(from, to) {
  const d1 = new Date(from);
  const d2 = new Date(to);
  return Math.max(1, Math.round((d2 - d1) / (1000 * 60 * 60 * 24)));
}

/* ══════════════════════════════
   NAVBAR: EFECTO AL HACER SCROLL
══════════════════════════════ */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.boxShadow = window.scrollY > 20
    ? '0 2px 16px rgba(0,0,0,.25)'
    : 'none';
}, { passive: true });

/* ══════════════════════════════
   INICIALIZACIÓN
══════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  // Mostrar sección home por defecto
  showSection('home');

  // Renderizar flota en home
  renderHomeFleet();

  // Precargar catálogo
  renderCatalog(VEHICLES);

  // Fechas mínimas en widgets del hero
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 4);

  const pickupEl = document.getElementById('bwPickup');
  const returnEl = document.getElementById('bwReturn');
  if (pickupEl) {
    pickupEl.min = formatDate(tomorrow);
    pickupEl.value = formatDate(tomorrow);
  }
  if (returnEl) {
    returnEl.min = formatDate(nextWeek);
    returnEl.value = formatDate(nextWeek);
  }
});
