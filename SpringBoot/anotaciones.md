# Las @anotaciones en Srping Boot

## 1. Aplicación

* `@SpringBootApplication`: Esta anotación se utiliza para habilitar la configuración predeterminada de una aplicación Spring Boot.
  
  * Básicamente, la `@SpringBootApplication`anotación es una combinación de las siguientes tres anotaciones Spring `@Configuration`: `@EnableAutoConfiguration`y `@ComponentScan`.

## 2. Clase

* `@Component`: Esta anotación se utiliza para detectar automáticamente las clases de componentes sin necesidad de escribir ningún código explícito. Spring Framework escanea clases con `@component`, las inicializa e inyecta las dependencias requeridas.
* `@RestController`: Esta anotación se utiliza para definir una clase como controlador de servicio web RESTful.
* `@Controller`: esta anotación se utiliza para definir una clase como controlador de servicios web
* `@Repository`: Esta anotación se usa para definir una clase como **repositorio JPA, que se puede usar para realizar operaciones CRUD en una base de datos.**
* `@Service`: Esta anotación se utiliza para definir una clase como **clase de servicio que define la lógica empresarial.**

## 3. Inyección de dependencia (IoC)

* `@Autowired`: Esta anotación se utiliza para conectar automáticamente un bean desde el contexto de la aplicación Spring a un campo o método de clase. Cuando usamos esta anotación, Spring Boot es responsable de crear la instancia de esa variable, **básicamente administra todo el ciclo de vida del objeto** .

## 4. APP

* `@Entity`: Esta anotación se usa para definir una clase como una **entidad JPA** , que se puede usar para interactuar con una base de datos.

## 5. Mapeo y parámetros

* `@RequestMapping`: esta anotación se utiliza para asignar solicitudes HTTP a métodos específicos en una clase de controlador.

* `@RequestParam`: Esta anotación se utiliza para vincular parámetros de solicitud a un parámetro de método en el controlador.  

* `@PathVariable`: Estas anotaciones vinculan el marcador de posición del URI al parámetro del método y se pueden usar cuando el URI se crea dinámicamente o el valor del URI en sí actúa como parámetro.

## Uso de anotaciones

En esta tabla, exploraremos algunas de las anotaciones más utilizadas en Spring Boot. Estas anotaciones se pueden utilizar para asignar solicitudes HTTP a métodos de controlador, extraer datos de la solicitud, vincular datos a atributos del modelo y manejar excepciones. Comprender estas anotaciones es esencial para crear aplicaciones Spring Boot que sean confiables, escalables y mantenibles.

Tabla de anotaciones de arranque de Spring boot:
| Anotación | Descripción |
| :--- | --- :|
| `@Controller` | Indica que una clase sirve como controlador Spring Boot. |
| `@RequestMapping` | Asigna solicitudes HTTP a métodos de controlador. |
| `@GetMapping` | Asigna solicitudes HTTP GET a métodos de controlador. |
| `@PostMapping` | Asigna solicitudes HTTP POST a métodos de controlador. |
| `@PutMapping` | Asigna solicitudes HTTP PUT a métodos de controlador. |
| `@DeleteMapping` | Asigna solicitudes HTTP DELETE a métodos de controlador. |
| `@PathVariable` | Extrae una variable de la ruta URL. |
| `@RequestParam` | Extrae una variable de la cadena de consulta o del cuerpo de la solicitud. |
| `@ModelAttribute` | Vincula un parámetro de método a un atributo de modelo. |
| `@SessionAttribute` | Vincula un parámetro de método a un atributo de sesión. |
| `@InitBinder` | Inicializa un enlazador de datos web para un método de controlador específico. |
| `@ExceptionHandler` | Maneja las excepciones lanzadas por un método de controlador. |
| `@ResponseStatus` | Establece el código de estado HTTP para un método de controlador. |
| `@ResponseBody` | Indica que un método de controlador devuelve un cuerpo de respuesta en lugar de una vista. |
| `@ControllerAdvice` | Proporciona manejo de excepciones global para los controladores. |