# api-peliculas

Aplicación desarrollada en Next.js con la intención de armar una pequeña API.

Los datos fueron traídos al front, pero se pueden consultar desde PostMan:

GET "/api/peliculas"

POST "/api/peliculas"

Con el siguiente formato:

{
  "id": 4,

  "nombre": "SpiderMan",

  "ranking": 5
}
DELETE

Funciona colocando sólo el ID en el cuerpo del mensaje.

{
  "id": 4
}
RUTAS DINÁMICAS

No está implementado en el front pero se puede hacer la consulta en Postman.

GET

"/api/peliculas/[id]"

Por ejemplo: /api/peliculas/2
