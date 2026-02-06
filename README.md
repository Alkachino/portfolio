# 💼 Adrian Oviedo - Portfolio Personal

Portfolio web profesional desarrollado para mostrar mis habilidades como Ingeniero en Computación especializado en desarrollo backend con Python, Django, y arquitecturas de IA Generativa (RAG).

![Portfolio Preview](assets/proyectos/chatbot-gm.png)

## 🌟 Características

- **Diseño Moderno y Responsive**: Interfaz completamente adaptable a dispositivos móviles, tablets y desktop
- **Tema Claro/Oscuro**: Sistema de temas con persistencia en localStorage para mejorar la experiencia del usuario
- **Animaciones Fluidas**: Efectos de scroll reveal, parallax, y micro-animaciones implementadas con Intersection Observer API
- **Optimizado para SEO**: Meta tags, estructura semántica HTML5, y mejores prácticas de accesibilidad
- **Lightbox de Imágenes**: Visualización ampliada de proyectos con navegación por teclado (ESC para cerrar)
- **Performance Optimizado**: Carga rápida con lazy loading y transiciones CSS optimizadas

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Variables CSS para sistema de diseño consistente
  - Grid y Flexbox para layouts responsivos
  - Animaciones y transiciones personalizadas
  - Glassmorphism y efectos modernos
- **JavaScript Vanilla**: 
  - Intersection Observer API para animaciones al scroll
  - Gestión de temas con localStorage
  - Event handling optimizado
  - Efectos de ripple en botones

## 📂 Estructura del Proyecto

```
portfolio/
│
├── index.html          # Página principal del portfolio
├── styles.css          # Estilos globales y componentes
├── script.js           # Lógica de interacción y animaciones
├── README.md           # Documentación del proyecto
│
└── assets/            # Recursos multimedia
    ├── adrian-profile.jpg
    ├── certificaciones/   # Logos de instituciones
    ├── herramientas/      # Iconos de tecnologías
    └── proyectos/         # Screenshots de proyectos
```

## 🎨 Sistema de Diseño

### Paleta de Colores

**Modo Oscuro (Default)**
- Background Principal: `#020617`
- Background Secundario: `#0F172A`
- Acento Principal: `#38BDF8`
- Texto Primario: `#F1F5F9`

**Modo Claro**
- Background Principal: `#F1F5F9`
- Background Secundario: `#FFFFFF`
- Acento Principal: `#0284C7`
- Texto Primario: `#0F172A`

### Tipografía

- **Familia**: [Inter](https://fonts.google.com/specimen/Inter) - Google Fonts
- **Pesos**: 300, 400, 500, 600, 700, 800

## 🚀 Instalación y Uso

### Opción 1: Visualización Local Simple

1. Clona el repositorio:
```bash
git clone https://github.com/Alkachino/portfolio.git
cd portfolio
```

2. Abre `index.html` directamente en tu navegador

### Opción 2: Servidor de Desarrollo (Recomendado)

Con Python:
```bash
# Python 3
python -m http.server 8000

# Visita http://localhost:8000
```

Con Node.js (usando `live-server`):
```bash
npm install -g live-server
live-server
```

## 📱 Secciones del Portfolio

1. **Hero Section**: Presentación impactante con CTA buttons
2. **Sobre Mí**: Biografía profesional y enfoque en IA aplicada
3. **Herramientas**: Categorización de habilidades técnicas:
   - Full Stack Development
   - Data & AI Solutions
   - DevOps & Tools
4. **Certificaciones**: Lista de cursos y formación continua
5. **Proyectos Destacados**: Showcase del Chatbot GM con arquitectura RAG
6. **Contacto**: Enlaces a redes sociales y email profesional

## 🎯 Optimizaciones Implementadas

- ✅ Lazy loading de secciones con Intersection Observer
- ✅ Throttling de eventos de scroll para mejor performance
- ✅ Transiciones CSS hardware-accelerated (`transform`, `opacity`)
- ✅ Prefetch de recursos críticos
- ✅ Minificación de assets (CSS/JS en producción)
- ✅ Semantic HTML para mejor accesibilidad

## 🌐 Deploy

Este portfolio está diseñado para ser deployado en:

- **GitHub Pages** (Recomendado para portfolios estáticos)
- **Netlify** (Deploy automático con CI/CD)
- **Vercel** (Excelente para proyectos frontend)

### Deploy en GitHub Pages

```bash
# Asegúrate de estar en la rama main
git checkout main

# Habilita GitHub Pages en Settings > Pages
# Selecciona la rama main y carpeta raíz (/)
```

## 📧 Contacto

- **Email**: [aoviedo.eng@proton.me](mailto:aoviedo.eng@proton.me)
- **LinkedIn**: [adrian-oviedo-moreno](https://linkedin.com/in/adrian-oviedo-moreno)
- **GitHub**: [@Alkachino](https://github.com/Alkachino)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

**Desarrollado con 💙 por Adrian Oviedo**

*Ingeniero en Computación apasionado por la Inteligencia Artificial aplicada*
