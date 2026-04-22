# 🧮 Calculadora Web

Una calculadora simple hecha con HTML, CSS y JavaScript puro.

---

## ¿Qué hace?

Permite hacer las 4 operaciones básicas:

- Suma `+`
- Resta `-`
- Multiplicación `x`
- División `/`

---

## ¿Cómo se usa?

1. Presiona los botones de número para escribir el **primer número**
2. Presiona un botón de operación (`+`, `-`, `x`, `/`)
3. Presiona los botones de número para escribir el **segundo número**
4. Presiona `=` para ver el resultado
5. Presiona `DELETE` para borrar todo y empezar de nuevo

> También puedes escribir directamente en los campos de texto y el resultado se calcula solo.

---

## Archivos del proyecto

```
📁 proyecto
├── index.html    → estructura de la calculadora
├── style.css     → colores, tamaños y diseño visual
└── script.js     → toda la lógica y funcionalidad
```

---

## ¿Cómo funciona por dentro?

### HTML
Define los botones y los campos de texto (inputs) donde aparecen los números y el resultado.

### CSS
Le da estilo a la calculadora: fondo oscuro, botones redondeados, y colores amarillos para los botones especiales (`=` y `DELETE`).

### JavaScript
Es el cerebro de la calculadora. Se encarga de:

- Escuchar cuando el usuario hace click en un botón
- Guardar los números y la operación elegida
- Calcular el resultado cuando se presiona `=`
- Mostrar el resultado en pantalla
- Limpiar todo cuando se presiona `DELETE`

---

## Casos especiales

| Situación | Qué pasa |
|---|---|
| Dividir entre 0 | Muestra `ERROR` |
| Presionar `=` sin llenar todo | No hace nada |

---

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript (sin librerías externas)

---

## Cómo abrir el proyecto

No necesita instalación. Solo abre el archivo `index.html` en cualquier navegador.
