## one-to-many (uno a muchos)

Tabla 1: `Department` (Departamento)

+ `department_id` (ID del departamento, clave primaria)
+ `name` (Nombre del departamento)

Tabla 2: `Employee` (Empleado)

+ `employee_id` (ID del empleado, clave primaria)
+ `name` (Nombre del empleado)
+ `department_id` (ID del departamento al que pertenece el empleado, clave foránea que hace referencia a `department_id` en la tabla `Department`)

    En este ejemplo, la relación es "one-to-many" porque un departamento puede tener muchos empleados, pero un empleado solo puede pertenecer a un departamento. La columna `department_id` en la tabla `Employee` establece esta relación, ya que cada registro en la tabla `Employee` hace referencia a un único registro en la tabla `Department`.

**Representación visual**

*Tabla: Department*

| department_id | name      |
| ------------- | --------- |
| 1             | Ventas    |
| 2             | Marketing |
| 3             | Finanzas  |

*Tabla: Employee*

| employee_id | name   | department_id |
| ----------- | ------ | ------------- |
| 101         | Juan   | 1             |
| 102         | María  | 1             |
| 103         | Carlos | 2             |
| 104         | Laura  | 3             |
| 105         | Pablo  | 1             |

    El departamento "Ventas" (con `department_id` 1) tiene tres empleados (Juan, María y Pablo), mientras que los departamentos "Marketing" y "Finanzas" tienen un empleado cada uno (Carlos y Laura, respectivamente). Cada empleado está asociado a un solo departamento a través de la columna `department_id`.
