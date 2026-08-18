# Nova Importados — tienda digital

Esta versión usa HTML + CSS + JavaScript y puede publicarse gratis con GitHub Pages.

## 1. Configurar WhatsApp

Abrí `app.js` y buscá:

const WHATSAPP_NUMBER = "549XXXXXXXXXX";

Reemplazá el contenido por el número del WhatsApp del negocio, sin +, espacios ni guiones.

Ejemplo:
const WHATSAPP_NUMBER = "5493511234567";

## 2. Configurar Instagram

En la misma parte de `app.js`, cambiá:
const INSTAGRAM_URL = "https://instagram.com/nova.importados";

## 3. Agregar tus productos

En `app.js` buscá `const products = [`.

Cada producto tiene:
- id
- name
- category
- price
- image
- description

Podés duplicar un producto y cambiar esos datos.

## 4. Publicar

La forma sencilla es crear un repositorio público en GitHub, subir `index.html`, `style.css` y `app.js`, y activar GitHub Pages desde Settings > Pages.

El sitio quedará con una dirección parecida a:
https://TUUSUARIO.github.io/nova-importados/

Después se puede conectar un dominio propio si querés.

## Importante

Las imágenes `placehold.co` son temporales. Reemplazalas por las fotos reales de tus perfumes.
