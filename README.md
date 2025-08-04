# Dr. Jael Joshie Frank Núñez - Personal Website

Una página web personal moderna y responsiva para GitHub Pages, diseñada para mostrar el perfil profesional como médico, psiquiatra e investigador en tecnología de salud mental.

## 🌟 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos (móvil, tablet, desktop)
- **Modo Oscuro/Claro**: Alterna entre temas con un solo clic
- **Animaciones Suaves**: Efectos de transición y animaciones CSS modernas
- **Accesibilidad**: Cumple con estándares WCAG para accesibilidad web
- **SEO Optimizado**: Meta tags y estructura semántica para mejor posicionamiento
- **Carga Rápida**: CSS y JavaScript optimizados para rendimiento

## 🚀 Demo en Vivo

[Ver sitio web](https://jaelfrank.github.io/joshie-frank-personal-page/)

## 🛠 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Variables CSS para theming
  - Grid y Flexbox para layout
  - Animaciones y transiciones
  - Media queries para responsividad
- **JavaScript ES6+**:
  - Módulos y funciones modernas
  - Intersection Observer API
  - Local Storage para preferencias
  - Event listeners optimizados

## 📁 Estructura del Proyecto

```
joshie-frank-personal-page/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   └── main.js            # JavaScript principal
├── assets/
│   └── profile-placeholder.md  # Instrucciones para foto de perfil
├── .github/
│   └── copilot-instructions.md # Instrucciones para GitHub Copilot
└── README.md              # Este archivo
```

## 🎨 Personalización

### Colores y Tema
Los colores principales se definen en las variables CSS en `css/styles.css`:

```css
:root {
    --primary-bg: #1a202c;
    --secondary-bg: #2D3748;
    --accent-color: #9F7AEA;
    --text-primary: #FFFFFF;
    /* ... más variables */
}
```

### Contenido
Edita `index.html` para actualizar:
- Información personal
- Proyectos destacados
- Enlaces de redes sociales
- Áreas de especialización

### Foto de Perfil
1. Añade tu foto en la carpeta `assets/`
2. Actualiza la ruta en `index.html`:
```html
<img src="assets/tu-foto.jpg" alt="Foto de perfil">
```

## 📱 Características Responsivas

- **Desktop**: Layout completo con todas las características
- **Tablet**: Adaptación de grid y espaciado
- **Mobile**: Layout vertical optimizado para pantallas pequeñas

## ⚡ Rendimiento

- **Lazy Loading**: Imágenes se cargan bajo demanda
- **CSS Optimizado**: Uso de variables CSS y selectores eficientes
- **JavaScript Modular**: Código organizado y optimizado
- **Fuentes Web**: Google Fonts con preconnect para carga rápida

## 🔧 Configuración para GitHub Pages

1. **Fork o clona** este repositorio
2. **Personaliza** el contenido en `index.html`
3. **Actualiza** enlaces y información de contacto
4. **Habilita GitHub Pages** en la configuración del repositorio:
   - Ve a Settings → Pages
   - Selecciona "Deploy from a branch"
   - Elige "main" branch y "/ (root)"
5. **Accede** a tu sitio en `https://tu-usuario.github.io/joshie-frank-personal-page/`

## 🌙 Modo Oscuro/Claro

El sitio incluye un toggle para alternar entre modo oscuro y claro:
- **Atajo de teclado**: `Ctrl/Cmd + K`
- **Botón**: Esquina superior derecha
- **Persistencia**: La preferencia se guarda en localStorage

## 📞 Contacto y Redes Sociales

Actualiza los enlaces en la sección de contacto con tus perfiles reales:

```html
<a href="https://www.linkedin.com/in/tu-perfil/" target="_blank">
    <i class="fab fa-linkedin"></i>
    <span>LinkedIn</span>
</a>
```

## 🤝 Contribuciones

Si encuentras algún error o tienes sugerencias de mejora:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🎯 Roadmap

- [ ] Agregar sección de blog/artículos
- [ ] Integrar con CMS headless
- [ ] Añadir formulario de contacto
- [ ] Implementar PWA (Progressive Web App)
- [ ] Agregar animaciones más avanzadas
- [ ] Sistema de comentarios
- [ ] Integración con Google Analytics

## 📊 Analytics y SEO

El sitio está preparado para analytics y SEO:
- Meta tags OpenGraph
- Estructura semántica HTML5
- JSON-LD structured data (próximamente)
- Sitemap.xml (próximamente)

---

**Desarrollado con ❤️ para la comunidad médica y tecnológica**

*Dr. Jael Joshie Frank Núñez - Arquitecto de la Mente*
