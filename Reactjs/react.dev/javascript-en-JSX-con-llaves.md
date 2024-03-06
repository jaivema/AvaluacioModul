### Dónde usar llaves (curly braces)

Solo puedes usar llaves de dos maneras dentro de JSX:

1. **Como texto** directamente dentro de una etiqueta JSX: 
   - `<h1>{name}'s To Do List</h1>`funciona, pero `<{tag}>Gregorio Y. Zara's To Do List</{tag}>` no lo hará.
2. **Como atributos** inmediatamente después del signo `=`: 
   - `src={avatar}`leerá la variable `avatar`, pero `src="{avatar}"`pasará la cadena `"{avatar}"`.

## Usando “double curlies”: CSS y otros objetos en JSX

Además de cadenas, números y otras expresiones de JavaScript, incluso puedes pasar objetos en JSX. Los objetos también se indican con llaves, como `{ name: "Hedy Lamarr", inventions: 5 }`. Por lo tanto, para pasar un objeto JS en JSX, debe envolver el objeto entre otro par de llaves: `person={{ name: "Hedy Lamarr", inventions: 5 }}`.

Es posible que vea esto con estilos CSS en línea en JSX. React no requiere que uses estilos en línea (las clases CSS funcionan muy bien en la mayoría de los casos). Pero cuando necesitas un estilo en línea, pasas un objeto al `style`atributo:

```javascript
export default function TodoList() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```