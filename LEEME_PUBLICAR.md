# Next Growth Step — web institucional estilo azul

Sitio **estático**, preparado para GitHub Pages. No necesita Python, Streamlit, APIs, archivos de Censo, bases de datos ni pagos de alojamiento en un repositorio público GitHub Free.

## 1) Ver la página en tu computadora (Windows)

1. Descargá `Next_Growth_Step_WEB_AZUL.zip`.
2. Clic derecho en el archivo ZIP → **Extraer todo**.
3. Abrí la carpeta extraída. Entrá donde están `index.html` y la carpeta `assets`.
4. Hacé doble clic en **index.html**: se abre la web en Chrome o en tu navegador predeterminado.
5. Comprobá que se vean las fotos, la navegación y las tarjetas. Si faltan fotos, no separaste `index.html` de la carpeta `assets`.

## 2) Publicar gratis en GitHub Pages

1. Ingresá en https://github.com/ e iniciá sesión con la cuenta existente.
2. Entrá en https://github.com/new.
3. En **Repository name**, poné `next-growth-step` (u otro nombre disponible).
4. Elegí **Public** (el sitio y el código quedan visibles al público). No marques las opciones de generar README, licencia o `.gitignore`.
5. Hacé clic en **Create repository**.
6. En la pantalla del repositorio, entrá en **uploading an existing file** o **Add file → Upload files**.
7. Abrí en Windows la carpeta extraída y arrastrá **`index.html`, toda la carpeta `assets` y `LEEME_PUBLICAR.md`**. Deben quedar en la raíz; NO subas el ZIP como archivo único.
8. Al pie de la página, donde dice **Commit changes**, escribí `Primera versión web Next Growth Step` y confirmá.
9. Abrí **Settings** del repositorio → sección **Pages**.
10. En **Build and deployment**, configurá **Source: Deploy from a branch**; **Branch: main**; **Folder: /(root)**. Presioná **Save**.
11. Volvé a **Settings → Pages** y buscá el enlace publicado. Si el repositorio se llama `next-growth-step`, va a tener la forma `https://TU-USUARIO.github.io/next-growth-step/`.
12. Abrí ese enlace en el celular y en la computadora. Probá los botones del menú.

**Importante:** este sitio NO se publica en Streamlit; es otra página distinta y no modifica `rosweb`.

## 3) Si aparece un problema

- **404**: asegurate de que en GitHub se vea `index.html` en la raíz y que Pages use `main` / `(root)`.
- **Sin estilos o imágenes**: revisá que exista `assets/styles.css`, `assets/main.js` y `assets/img/*` en GitHub; no cambies nombres ni rutas.
- **No aparece el menú desde el celular**: revisá que `assets/main.js` se haya subido.
- **Cambios no reflejados**: recargá con Ctrl+F5, y comprobá que el commit esté en `main`.

## 4) Actualizar el sitio más adelante

Modificá el HTML/CSS o pedime cambios. Subí los archivos nuevos al mismo repositorio y confirmá con **Commit changes**. GitHub Pages actualiza el mismo enlace.

## 5) Antes de presentarlo públicamente

- El contenido es **institucional y conceptual**. No hay simulador en esta web.
- Los precios de los planes aparecen como **propuesta ilustrativa**, no como planes contratables.
- No tiene un formulario de contacto operativo ni procesa datos personales. Podés agregar un medio de contacto institucional cuando lo definas.
- Las imágenes del panel de datos son **ilustrativas**, no capturas de un ROS en funcionamiento.
