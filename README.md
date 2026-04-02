# ChatClonUtn

Este proyecto es una aplicación de chat funcional desarrollada con **Angular 17+**. Simula una interfaz de mensajería moderna con gestión de contactos, envío de mensajes en tiempo real y persistencia de datos.

## 🛠️ Instrucciones de Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/LeandroQuiroga7/chat-clon-UTN]
2. **Instalar dependencias:**
Ejecuta el siguiente comando para descargar los paquetes de Node.js necesarios:

   ```bash
   npm install
3. **Iniciar el servidor de desarrollo:**
Lanza la aplicación con el comando estándar de Angular CLI:

   ```bash
   ng serve
4. **Acceder a la aplicación:**
Abre tu navegador y navega a: http://localhost:4200

---

📂 Estructura del Proyecto
La aplicación se organiza siguiendo las mejores prácticas de Angular, separando responsabilidades:

**/src/app/components:**

- ChatList: Gestiona el panel lateral, el buscador y la lista de conversaciones disponibles.

- ChatWindow: Gestiona la visualización del chat activo, el historial de burbujas y el campo de entrada de texto.

**/src/app/services:**

- ChatService: Centraliza el estado de la aplicación mediante Angular Signals. Maneja la lógica de envío de mensajes, respuestas automáticas y la persistencia de datos.

**/src/app/models:** 

- Contiene las interfaces TypeScript (Chat, Message) para garantizar la consistencia de los datos.

---

🛣️ Rutas (Navigation)
El proyecto utiliza el sistema de rutas dinámicas de Angular:

(Raíz): Muestra la lista de contactos y un estado vacío en el área de conversación.

chats/:id': Carga dinámicamente la ventana de conversación filtrando por el ID proporcionado en la URL.

---

🧪 Cómo Probar la Aplicación

Para verificar el funcionamiento completo, se recomiendan los siguientes pasos:

1. Mensajería: Selecciona un contacto, envía un mensaje y observa la respuesta automática del bot. 

2. Persistencia (LocalStorage): Escribe mensajes o agrega nuevos chats y recarga la página (F5). Los datos se mantendrán almacenados en el navegador.

3. Buscador: Utiliza la barra de búsqueda lateral para filtrar contactos por nombre en tiempo real.

4. Responsive Design: Achica la ventana del navegador o activa el "Modo Dispositivo" (móvil). La interfaz ocultará la lista lateral automáticamente al entrar en un chat para optimizar el espacio.