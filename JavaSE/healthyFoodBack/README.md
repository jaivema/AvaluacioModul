# Linux Lab#SE04-1: healthyFood Restaurant

#### **Prepare the work environment**

1. Create a Maven/Gradle Java SE Project.
   
   - Create from wizard the Maven Java SE Project and then work with git version control, local and remote (GitHub.com).

2. Adding the needed dependencies:
   
   - Lombok
   
   - Junit5
   
   - Java Fake

3. Create three Java classes to define the Model. Java SE Classes:
   
   - Model classes: Table, Order and Menu
   
   - Managers and Controller: use a fake DataBase like ArrayList or HashMaps

4. With Junit dependency create unitary test to test objects and operations, and then integration tests.

5. From here you should add new features once all the test are passed.
   
   - Operations, you could think in a Manager Class o similar
   
   - New fields/attributes and new classes
   
   - New compositions and inherence: expand your model
   
   - Use Factory design pattern to create new object

Project Overview

- Technology Stack:
  
  - Front-End: React
  
  - Back-End: Spring Boot

- System Design:
  
  - The UML diagram, designed as part of Lab#SE04-1, lays the groundwork for essential entities such as Orders, Tables, and Menus.

### Integration with Spring Boot with API Rest

    This Java Maven SE backe-end seamlessly integrates with the React front-end via API Rest, creating a efficient restaurant management.

    The UML design acts as a guide, ensuring a cohesive flow between the front-end and back-end components.

#### General approach

    Welcome to our Java SE project, where we code a culinary app from a quaint little van restaurant to a thriving establishment with over 100 employees. Our approach is simple yet ambitious: **start small, dream big**.

- In the initial phase, our focus is on building the core structure of our restaurant management system. At the heart of our project, we will design a **Unified Modeling Language (UML) that includes essential classes such as Orders, Tables, and Menus.** These classes will form the backbone of our application, facilitating efficient management of customer orders, table assignments, and menu items.
- To orchestrate the flow of our restaurant operations, we introduce a **Controller class that acts as the central hub for handling user interactions and managing the overall system logic**.
- To simulate a real-world database without the complexities of a full-fledged database system, **we implement a DataBase class utilizing HashMaps.** This enables us to store and retrieve crucial information seamlessly, ensuring the smooth functioning of our restaurant.
- For user interaction, we incorporate an **Input/Output (I/O) class that leverages the Command Line Interface (CLI)**. This ensures a user-friendly and interactive experience, allowing customers and restaurant staff to engage effortlessly with the application.
- To guarantee the reliability and functionality of our codebase, we integrate **JUnit for testing**. This not only validates the correctness of our code but also ensures that any future modifications maintain the integrity of our system. Additionally, we incorporate **Java Faker to generate realistic test data**, saving time and effort in the testing phase.
- Simplifying development and enhancing code readability, we include **Lombok** as a dependency. Lombok streamlines the creation of boilerplate code, enabling us to focus on the core functionality of our application.
- Lastly, to manage project dependencies and facilitate easy builds, we structure our project as a **Maven project**. Maven simplifies the build process, making it more efficient and maintaining a clean and organized codebase.

>     As we embark on this Java SE project, our journey begins with simplicity, but the vision is grand.
> 
>     We aim **to transform a humble van restaurant with one person and five tables into a bustling establishment with over 100 employees**, embracing scalability and innovation every step of the way.
> 
>     Get ready to witness the evolution of our restaurant management system from a small-scale dream to a thriving reality.

#### Core classes and dependencies

    The `pom.xml` file in a Java SE Maven project is crucial as it serves as the Project Object Model configuration.

>     Dependencies enhance project maintainability, collaboration, and adherence to best practices, making them indispensable components for Java developers leveraging Maven for efficient project management and streamlined workflows.

    It defines project **metadata, dependencies, plugins, and build configurations, ensuring consistent builds**. Dependencies are vital as they specify external libraries required for the project, facilitating easy management and version control. Maven leverages these elements to automate project builds, simplifying development, testing, and deployment.

Lombok pluguin.

    Find and install [Lombok]([IntelliJ IDEA](https://projectlombok.org/setup/intellij)) pluguin and include it into project as a provided dependency:

`pom.xml`

```xml
<dependencies>
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.30</version>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

    In your Java code model classes.java

```java
import lombok.Data;

@Data

// define your class
```

> [Lombok project](https://projectlombok.org/)

    The `@Data` annotation is a Lombok annotation that generates getters and setters for the fields of a class, as well as equals, hashCode, and toString methods based on the fields.

    The `@AllArgsConstructor` annotation is a Lombok annotation that generates a constructor with all of the class’s fields as arguments.

    The `@NoArgsConstructor` annotation is a Lombok annotation that generates a no-argument constructor for a class.

    `@Data` All together now: A shortcut for @ToString, @EqualsAndHashCode, @Getter on all fields, @Setter on all non-final fields, and @RequiredArgsConstructor.

Faker pluguin

    This library generates fake data. It's useful when you're developing a new project and need some pretty data for showcase.

+ Check [MVNrepository]([Maven Repository: com.github.javafaker » javafaker » 1.0.2](https://mvnrepository.com/artifact/com.github.javafaker/javafaker/1.0.2))

Find and install Faker pluguin and include it into project as a provided dependency

`pom.xml`

```xml
<dependencies>
  <dependency>
      <groupId>com.github.javafaker</groupId>
      <artifactId>javafaker</artifactId>
      <version>1.0.2</version>
  </dependency>
</dependencies>
```

Example Java Usage:

```java
import com.github.javafaker.Faker;

(--)

Faker faker = new Faker();

String name = faker.name().fullName(); // Miss Samanta Schmidt
String firstName = faker.name().firstName(); // Emory
String lastName = faker.name().lastName(); // Barton

String streetAddress = faker.address().streetAddress(); // 60018 Sawayn Brooks Suite 449
```

[Getting Started Faker]([Getting Started With Faker.js: A Developer's Guide](https://www.testim.io/blog/getting-started-with-faker-js/))

JUnit 5

    To configure support for JUnit Jupiter based tests, configure test scoped dependencies on the[ JUnit Jupiter API and the JUnit Jupiter TestEngine]([JUnit 5 User Guide](https://junit.org/junit5/docs/current/user-guide/#running-tests-build-maven-engines-configure)) implementation similar to the following.

Check [MVNReporitoy]([Maven Repository: org.junit.jupiter » junit-jupiter-engine](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-engine))

`pom.xml`

```xml
<dependency>
  <groupId>org.junit.jupiter</groupId>
  <artifactId>junit-jupiter-engine</artifactId>
  <version>5.9.1</version>
  <scope>test</scope>
</dependency>
```

[User Guide Junit5](https://junit.org/junit5/docs/current/user-guide/#running-tests-build-maven-engines-configure)

---

#### Fake DataBase: HashMaps

To start and test our UML we are goint to use HashMaps as a fake database

```java
HashMap<String, Order> orders
 = new HashMap<String, Order>();
```

In Java, you use a HashMap to store items in **key/value pairs**. You can access items stored in a `HashMap` using the item’s key, which is unique for each item.

Here’s what each part of the code means:

- `HashMap<String, Order>`: This declares a new `HashMap` with keys of type `String` and values of type `Order`. In other words, it’s a mapping from strings to `Order` objects.

- `orders`: This is the name of the variable that will reference the `HashMap`. You can choose any valid identifier as the variable name.

- `= new HashMap<String, Order>();`: This part of the code creates a new instance of `HashMap` and assigns it to the variable `orders`. The `new` keyword is used to allocate memory for the `HashMap`, and the `<>` syntax specifies the types of keys and values for the `HashMap`. In this case, keys are of type `String`, and values are of type `Order`.

References:

[Java HashMap](https://www.w3schools.com/java/java_hashmap.asp)

[HashMap (Java Platform SE 8 )](https://docs.oracle.com/javase/8/docs/api/java/util/HashMap.html)

[Java HashMap (With Examples)](https://www.programiz.com/java-programming/hashmap)

[What is a Java Hashmap?](https://www.freecodecamp.org/news/what-is-a-java-hashmap/)