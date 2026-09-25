# Actividad 2: Librería Utilería JS

**Nombre del estudiante:** Bautista Centeno Francisco Elias  
**Materia:** Programación Web  
**Profesor(a):** Martínez Nieto Adelina

## Descripción del Proyecto

Este proyecto resuelve el problema de la **validación y formateo de datos en el cliente** sin recurrir a frameworks pesados ni librerías externas. Proporciona una colección de funciones ligeras en JavaScript vanilla (`utileria.js`) diseñadas para validar entradas de formularios en tiempo real, calcular edades y dar formato profesional a datos de texto y números de teléfono.

### Estructura del Repositorio

/Actividad2
├── README.md
├── index.html
├── login.html
├── /css
│   └── estilo.css
├── /js
│   ├── utileria.js
│   ├── main.js
│   └── login.js
└── /img

### Funciones obligatorias 
1. validarCorreo(correo)
Valida si una cadena cumple con el formato estándar de correo electrónico (usuario@dominio.com).
2. soloLetras(texto)
Comprueba que el texto contenga únicamente letras mayúsculas, minúsculas, vocales acentuadas (á, é, í, ó, ú), eñes y espacios.
validarLongitud(numero, maxLongitud)
Verifica que la longitud de un número o cadena de texto no sobrepase el límite máximo indicado.
4. calcularEdad(fechaNacimiento)
Calcula la edad en años enteros a partir de una fecha especificada en formato YYYY-MM-DD.
5. esMayorDeEdad(fechaNacimiento)
Determina si una persona tiene 18 años o más basándose en su fecha de nacimiento.
6. validarPassword(password)
Evalúa si la contraseña cumple con la política de seguridad: mínimo 8 caracteres, al menos 1 letra mayúscula, 1 minúscula, 1 número y 1 carácter especial (@$!%*?&._-#).
### Sección Libre
7. formatearTelefono(telefono)
Toma una cadena o número de 10 dígitos y le aplica el formato telefónico estándar (XXX) XXX-XXXX.
8. capitalizarTexto(texto)
Convierte la primera letra de cada palabra a mayúscula y fuerza el resto en minúsculas (formato Nombre Propio).

### Video
