# teconecta
######--> ROLES <--######
Actualemente en la cuenta existen 2 roles que se detallan a continuacion

ADMIN: Administrador supremo tiene acceso a todo
ADMINREG: Administrador regular tiene los permisos de grupo cultural


######--> CUENTAS DE PRUEBA <--######
Se han creado 2 cuentas de prueba para el modo desarrollador estas se usaran para medir los roles y los accesos a cada seccion del proyecto.

ADMIN:
  "username": "FEITEC",
  "password": "feitecpass"
ADMINREG:
  "username": "ASODEC",
  "password": "asodecpass"



######--> TABLA DE ACCESOS <--######
+------------------------+------+-------+----------+
| endpoints              | user | ADMIN | ADMINREG |
+------------------------+------+-------+----------+
|Login                   | user | ADMIN | ADMINREG |
+------------------------+------+-------+----------+
|       /users/login     | 404  | OK    | OK       |
+------------------------+------+-------+----------+
|Activity                | user | ADMIN | ADMINREG |
+------------------------+------+-------+----------+
|     /activities/count  | OK   | OK    | OK       |
|PUT:/activities/{id}    | OK   | OK    | OK       |*SE PUEDE BORRAR!!* -- rempleazar por completo una actividad -- no se usa
|PATCH:/activities/{id}  | 404  | OK    | OK       |
|GET:/activities/{id}    | OK   | OK    | OK       |**MODIFICAR -- PONER FILTROS**
|DELETE:/activities/{id} | 404  | OK    | OK       |*SE PUEDE BORRAR!!*--***NO SE DEBEN BORRAR***
|POST:/activities        | 404  | 404   | OK       |
|PATCH:/activities       | 404  | OK    | 404      |*SE PUEDE BORRAR!!* --Actualizar todas las actividades -- no se usa
|GET:/activities         | OK   | OK    | OK       |
+------------------------+------+-------+----------+
|Assistence              | user | ADMIN | ADMINREG |
+------------------------+------+-------+----------+
|     /assistances/count | 404  | OK    | OK       |
|PUT:/assistances/{id}   | OK   | OK    | OK       |*SE PUEDE BORRAR!!*
|PATCH:/assistances/{id} | 404  | OK    | OK       |*SE PUEDE BORRAR!!*
|GET:/assistances/{id}   | OK   | OK    | OK       |**MODIFICAR -- POR ID DE ACTIVIDAD**
|DELETE:/assistances/{id}| 404  | 404   | 404      |*SE PUEDE BORRAR!!*
|POST:/assistances       | OK   | 404   | 404      |
|PATCH:/assistances      | 404  | 404   | 404      |*SE PUEDE BORRAR!!*
|GET:/assistances        | 404  | OK    | OK       |*SE PUEDE BORRAR!!*
+------------------------+------+-------+----------+
|User                    | user | ADMIN | ADMINREG |
+------------------------+------+-------+----------+
|     /account/count     | OK   | OK    | OK       |
|PUT:/account/{id}       | OK   | OK    | OK       |*SE PUEDE BORRAR!!*
|PATCH:/account/{id}     | 404  | OK    | OK       |
|GET:/account/{id}       | OK   | OK    | OK       |
|DELETE:/account/{id}    | 404  | OK    | OK       |*SE PUEDE BORRAR!!*
|POST:/account           | 404  | OK    | 404      |
|PATCH:/account          | 404  | OK    | 404      |*SE PUEDE BORRAR!!*
|GET:/account            | OK   | OK    | OK       |
+------------------------+------+-------+----------+




------>Login<------

URL: http://localhost:3000/users/login

Example:

{
"username": "<email>",
"password": "<password>"
}

Answer:

{
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkZFSVRFQyIsImlhdCI6MTU3NjcyNDQyM30.L3h5hmlRmZHg8lDDALgKOAUihUMnMgUhKmvZjrbIcKc",
  "id": "FEITEC",
  "roles": [
    "ADMIN"
  ]
}






