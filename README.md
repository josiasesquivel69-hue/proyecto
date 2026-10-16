# AutoRent Global — Sitio Web Estático

Plataforma web de alquiler y gestión de vehículos construida en **HTML, CSS y JavaScript puro**.  
Sin dependencias, sin instalación, sin compilación.

**Autor:** Anderson Joel Araya Meoño

---

## Estructura del proyecto

```
autorent-static/
├── index.html      # Estructura completa de la página
├── style.css       # Diseño visual y sistema de componentes
├── script.js       # Interacciones, datos y lógica de navegación
├── images/         # Carpeta para imágenes locales (opcional)
└── README.md       # Este archivo
```

---

## Ver el proyecto localmente

1. Descarga o clona el repositorio.
2. Abre el archivo `index.html` directamente en tu navegador.  
   No necesitas ningún servidor ni comando adicional.

```bash
# Opcional: con un servidor HTTP simple de Python
python -m http.server 8080
# Luego abre http://localhost:8080
```

---

## Publicar en GitHub Pages

1. Sube los archivos a un repositorio en GitHub.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Haz clic en **Save**.
5. Tu sitio estará disponible en `https://tu-usuario.github.io/nombre-del-repositorio/`.

---

## Secciones incluidas

| Sección | Descripción |
|---|---|
| **Inicio** | Hero con widget de búsqueda de disponibilidad |
| **Catálogo** | 12 vehículos con filtros por categoría, sucursal, transmisión y combustible |
| **Servicios** | 8 servicios operativos y proceso paso a paso |
| **Contacto** | Formulario de consulta y 3 sucursales con datos reales |

## Funcionalidades interactivas

- Navegación entre secciones sin recarga de página
- Filtros de catálogo en tiempo real (categoría, sucursal, transmisión, combustible, búsqueda de texto)
- Modal de detalle de vehículo
- Flujo de reserva en 4 pasos con cálculo de precio (IVA 13%, cargo aeroportuario, devolución en sucursal diferente)
- Voucher de confirmación generado visualmente
- Modal de plan corporativo
- Formulario de contacto con confirmación visual
- Menú hamburguesa responsivo para móviles
- Toast de notificaciones para errores de validación

## Tecnologías

- HTML5 semántico
- CSS3 (variables, Grid, Flexbox, responsive sin frameworks)
- JavaScript ES6+ (Vanilla, sin dependencias)
- Google Fonts: DM Sans + Source Sans 3

## Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Azul marino | `#172B3A` | Fondo navbar, títulos, botones secundarios |
| Grafito | `#252A2E` | Footer, texto principal |
| Naranja | `#E87532` | Acento principal, CTA, botón primario |
| Verde | `#27845A` | Disponibilidad, éxito |
| Ámbar | `#B7791F` | Advertencias |
| Rojo | `#C63D3D` | Errores, bloqueos |
