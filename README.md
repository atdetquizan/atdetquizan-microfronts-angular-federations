
# Proyecto de Microfrontends con Módulos Federados

Este proyecto implementa una arquitectura basada en **microfrontends** utilizando **Angular** y **Webpack Module Federation**. El objetivo es lograr el **desacoplamiento** de diferentes partes de la aplicación, permitiendo que cada módulo se desarrolle, despliegue y mantenga de forma independiente. 

## 🚀 Tecnologías Utilizadas

- **Angular**: Framework principal para desarrollar los microfrontends.
- **Webpack Module Federation**: Para integrar los distintos módulos federados en la aplicación principal (shell).
- **SCSS**: Para manejar los estilos de la aplicación.
- **Microfrontends**: Dividiendo la aplicación en módulos independientes para mejor escalabilidad.

## 📂 Estructura del Proyecto

La aplicación está organizada en múltiples módulos independientes, cada uno de los cuales es un microfrontend desacoplado que se integra en una **aplicación shell**.

### 1. **Desacoplamiento de Publicaciones (Feeds)**

El módulo de **Feed de Publicaciones** está completamente desacoplado de otras secciones de la aplicación. Este microfrontend maneja las publicaciones de los usuarios y puede ser desplegado de manera autónoma, permitiendo su actualización sin interferir en otros módulos.

### 2. **Componentes Compartidos**

Los **componentes compartidos** (como sidebar, informacion de usuarios, tabs, etc.) se han desacoplado en un módulo independiente, que puede ser reutilizado por diferentes microfrontends y otros proyectos. Esto asegura la **consistencia visual** y facilita la **reutilización de código**.

### 3. **Módulo de Perfil con Tabs**

La sección de **Perfil de Usuario** ha sido diseñada como un módulo separado y cuenta con un sistema de **pestañas (tabs)** que divide la sección de perfil en:

- **Publicaciones**: Muestra las publicaciones del usuario.
- **Reels**: Contenido de videos cortos.
- **Guardados**: Publicaciones que el usuario ha guardado.
- **Etiquetadas**: Publicaciones en las que el usuario ha sido etiquetado.

Estos módulo es **consumido desde por rutas desde la shell**, lo que permite su mantenimiento y actualización independiente sin afectar otras partes de la aplicación.

### 4. **Módulos Federados**

Gracias a **Webpack Module Federation**, los microfrontends pueden ser desarrollados y desplegados de manera independiente y luego integrados en la **aplicación shell** de manera dinámica en tiempo de ejecución.

## 🛠 Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   ```

2. Instala las dependencias en cada módulo (shell y los microfrontends):

   ```bash
   npm install
   ```

3. Inicia la aplicación shell y los microfrontends:

   - Inicia la aplicación shell:
     ```bash
     cd angular-shell
     npm run start
     ```
   
   - Inicia los microfrontends 1:
     ```bash
     cd angular-microfront-1
     npm run start
     ```

   - Inicia los microfrontends 2:
     ```bash
     cd angular-microfront-2
     npm run start
     ```

   - Inicia los microfrontends 2:
     ```bash
     cd angular-microfront-2
     npm run start
     ```

4. Abre tu navegador y navega a `http://localhost:4200` para ver la aplicación en funcionamiento.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias o mejoras, abre un issue o envía un pull request.