# MYTHOS

> **Descubre mundos. Hazlos tuyos.**

Mythos es una demo funcional de una plataforma donde las historias viven: descubrir, comprar, leer, coleccionar, compartir y crear.

La primera versión está construida con **HTML + CSS + JavaScript vanilla**, sin backend ni build step. El objetivo no es simular un CRUD, sino enseñar el **product feel** de la visión de Mythos.

## Ejecutar localmente

Puedes abrir `index.html` directamente o usar:

```bash
python -m http.server 8080
```

Después abre `http://localhost:8080`.

## Publicación

El repositorio incluye GitHub Actions para publicar automáticamente en GitHub Pages cada vez que cambia `main`.

En GitHub: **Settings → Pages → Source → GitHub Actions**.

## Estructura

```text
.
├── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml
├── data/
│   ├── works.js          # Catálogo visual y metadata
│   ├── people.js         # Usuarios, creadores, reviews y logros
│   └── community.js      # Actividad y notificaciones
├── css/
│   ├── tokens.css        # Variables de diseño
│   ├── base.css          # Tipografía y fundamentos
│   ├── components.css    # Navegación y componentes reutilizables
│   ├── pages.css         # Patrones de páginas
│   └── responsive.css    # Tablet y móvil
└── js/
    ├── store.js          # Persistencia localStorage
    └── app.js            # Routing, vistas y flujos de demo
```

## Flujos principales

### Lector

`Descubrir → Obra → Preview → Comprar → Biblioteca → Reader → Progreso → Terminar → Reseña → Seguir creador → Comunidad → Perfil`

### Creador

`Modo Creador → Studio → Métricas → Mis obras → Crear obra → Información → Precio → Publicar → Obra publicada`

### Descubrimiento

`Búsqueda → filtros por intención → ficha de obra → lista de deseos → biblioteca`

### Identidad

`Biblioteca + reseñas + colecciones + actividad + logros + XP → perfil personal`

## Mock data

La demo contiene un catálogo amplio de obras, varios creadores, usuarios, reseñas, colecciones, actividad, notificaciones y logros. Las portadas utilizan imágenes editoriales remotas para que la primera versión tenga un aspecto más humano y menos generado.

## Estado persistente

Se conserva en `localStorage`:

- biblioteca
- compras
- lista de deseos
- progreso de lectura
- reseñas
- follows
- colecciones
- notificaciones
- obras creadas
- tema claro/oscuro

## Próximo paso hacia producto real

La arquitectura deja separada la información mock de la interfaz. Para pasar a producción habría que sustituir `store.js` por servicios API y añadir autenticación, base de datos, almacenamiento de archivos, pagos, moderación y un lector real.

## Visión

Mythos quiere ser el lugar donde las historias viven: una mezcla de biblioteca personal, descubrimiento, comunidad y plataforma para creadores.

**Imagine. Create. Share. Repeat.**
