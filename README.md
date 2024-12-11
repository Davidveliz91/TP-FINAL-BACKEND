# API RESTful - Classic Japanese Cars

## Descripción

Esta es una API RESTful que permite gestionar una base de datos de autos japoneses clásicos. La API está construida utilizando **Express** y se conecta a una base de datos **MongoDB**. Además, implementa autenticación de usuarios mediante **JWT** y validación de datos para las operaciones básicas de CRUD (Crear, Leer, Actualizar, Eliminar).

## Características

- **CRUD completo** para gestionar autos japoneses clásicos:
  - Crear un auto
  - Leer los autos existentes
  - Actualizar un auto
  - Eliminar un auto
- **Autenticación de usuarios** mediante **JWT**.
- **Validación de datos** en todas las solicitudes para asegurar la integridad de la información.
- Conexión a base de datos **MongoDB**.

## Tecnologías

- **Node.js** (para el servidor)
- **Express** (framework para Node.js)
- **MongoDB** (base de datos NoSQL)
- **JWT (JSON Web Token)** para la autenticación de usuarios
- **Mongoose** (ODM para MongoDB)

## Endpoints

### 1. **Autenticación**

#### POST `/api/auth/login`

Inicia sesión con credenciales de usuario.

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}