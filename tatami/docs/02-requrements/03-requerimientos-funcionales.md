# 🥋 Tatami App – Requerimientos Funcionales (RF)

## 1. Introducción
Este documento define los requerimientos funcionales del sistema Tatami App.
Los requerimientos describen qué debe hacer el sistema desde el punto de vista del usuario, sin entrar en detalles técnicos de implementación.

---

## 2. Usuarios y Roles

### RF-01: Crear usuario administrador
El sistema debe permitir la creación de usuarios con rol Administrador, quienes tendrán control total sobre la configuración del gimnasio.

### RF-02: Crear usuario staff/coach
El sistema debe permitir la creación de usuarios con rol Staff/Coach, con permisos limitados a clases, asistencia y pagos.

### RF-03: Crear y gestionar alumnos
El sistema debe permitir crear, editar y consultar perfiles de alumnos.

---

## 3. Clases y Horarios

### RF-04: Crear clases recurrentes
El administrador podrá crear clases recurrentes indicando:
- Nombre
- Disciplina
- Días y horarios
- Capacidad máxima

### RF-05: Consultar calendario de clases
El sistema debe mostrar un calendario de clases adaptado a cada rol.

---

## 4. Reservas

### RF-06: Reservar clases con cupo limitado
El alumno podrá reservar una clase siempre que:
- Exista cupo disponible
- No tenga penalización activa

---

## 5. Asistencia

### RF-07: Marcar asistencia
El coach podrá marcar asistencia desde el celular para cada clase.

### RF-08: Generar checks por inasistencia
El sistema debe generar automáticamente un “check” cuando un alumno no asiste a una clase reservada.

---

## 6. Penalizaciones

### RF-09: Aplicar penalización automática
Al acumular 3 checks en un mismo mes, el sistema aplicará una penalización automática que bloquea temporalmente las reservas del alumno.

---

## 7. Pagos y Planes

### RF-10: Ver y elegir planes
El alumno podrá ver los planes disponibles y seleccionar uno.

### RF-11: Registrar pagos
El admin o staff podrá registrar pagos y marcarlos como:
- Pendiente
- Aceptado

---

## 8. Historial de Entrenamiento

### RF-12: Ver calendario de entrenamiento
El alumno podrá visualizar su historial de entrenamiento en un formato tipo calendario de GitHub.

---

## 9. Récord de Peleas

### RF-13: Registrar peleas
El sistema permitirá registrar peleas individuales para alumnos competidores.

### RF-14: Consultar récord
El sistema mostrará el récord del alumno en formato Victorias–Derrotas–Empates.
