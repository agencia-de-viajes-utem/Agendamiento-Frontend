# React Paquete Envío App

Una sencilla aplicación React para enviar información sobre paquetes utilizando una API.

## Características

- Formulario para ingresar detalles del paquete (origen, destino, fechas, personas).
- Envío de datos del formulario a través de una solicitud POST a una API.
- Visualización de la respuesta de la API.

## Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/tu-repo.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y agrega la URL de la API:

   ```
   VITE_API_URL=https://tu-api-url.com
   ```

4. Ejecuta la aplicación:

   ```bash
   npm start
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

- `src/App.js`: Componente principal que contiene la lógica del formulario y la solicitud a la API.
- `src/App.css`: Estilos para el componente principal.
- `public/index.html`: Archivo HTML principal.

## Dependencias

- `react`: Biblioteca principal de React.
- `react-dom`: Integración de React con el DOM.
- `react-scripts`: Scripts de inicio y construcción para proyectos React.

## Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).