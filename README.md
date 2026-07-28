# Pagos de la película

Dashboard estático para llevar el control de los pagos de la noche de cine. Está
hecho con HTML, CSS y JavaScript, sin dependencias ni proceso de compilación.

## Datos actuales

- 12 personas en el grupo.
- La entrada cuesta RD$450 por persona.
- Jorge debe RD$300 adicionales por comida: pagó RD$750 en total.
- Víctor debe RD$300 adicionales por comida: pagó RD$750 en total.
- Emil debe RD$325 adicionales por comida: pagó RD$775 en total.
- Gerson Kelly pagó RD$450 por su entrada.
- Erny Perez compró su propia entrada y no debe nada al grupo.
- Luis pagó RD$450.
- Brianna, Camila, Daniel, Jason, José Gabriel y Marcos pagaron RD$450 cada uno.
- Cobrado: RD$5,875 de RD$5,875.
- Pendiente: RD$0.

Los pagos recibidos de Jorge, Luis, Brianna, Camila, Daniel, Emil, Jason, José
Gabriel, Víctor y Marcos están registrados como transferencias bancarias.

La pestaña **Inicio** se abre por defecto y resume el estado de las 12 personas.
El seguimiento detallado está en su propia pestaña.

## Factura y entradas

La pestaña **Factura y entradas** contiene el detalle de la orden #14288218:
película, función, asientos, artículos, impuestos, cargos y total. Al final de
la página hay un resumen QR descargable e imprimible con los datos de la orden.

El QR del sitio es un resumen digital generado a partir de la factura. Para
entrar a la sala se debe presentar el código original emitido por Caribbean
Cinemas.

## Actualizar un pago

Edita el arreglo `payments` al principio de [`app.js`](app.js):

```js
{
  name: "Nombre",
  owed: 450,
  paid: 450,
  method: "Transferencia bancaria", // También admite "Efectivo" o null
  note: "Entrada de la película",
}
```

Los totales, el progreso, los estados y los filtros se calculan
automáticamente.

## Ver localmente

Abre `index.html` directamente o ejecuta:

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Publicación

El workflow de GitHub Actions publica el contenido de la rama `master` en
GitHub Pages. En la configuración del repositorio, la fuente de Pages debe ser
**GitHub Actions**.
