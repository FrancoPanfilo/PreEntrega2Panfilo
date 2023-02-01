# Atomic

Mi nombre es Franco Panfilo y este fue mi primer proyecto en React.

## Proyecto

La app consiste en una tienda de tecnología, en el mismo se puede navegar entre las categorías con la ayuda de useParams y react-routes (las mismas fueron previamente instaladas).
A su vez , tanto en el menú principal como en cualquier categoría seleccionada se pueden observar una lista de ítems. Esta lista , además de poder ser filtrada por categorías se puede filtrar por precio. Esta última funcionalidad no era obligatoria, pero a mi entender hace mucho más linda la página y brinda muy buenas funcionalidades.

Los ítems son importados desde una base de datos en Firebase, el nombre de la colección es Productos y se ven alrededor de 60 ítems, cada uno con distintas características.

En esta lista de ítems podemos seleccionar cualquiera de ellos para verlo al detalle, otra vez se usa useParams para identificar a que ítem se le hizo el "click". En el detalle de cada producto tendremos una descripción detallada que no se podía ver en el ítemlist, además de ver la foto del producto más grande. Si el producto es del interés del usuario , este puede seleccionar una cantidad y guardarlo en su carrito.

Este carrito inicialmente esta vacío, sin embargo a medida que se van agregando ítems , estos se guardan , con sus respectivas cantidades y precios. El icono del carrito está en la parte superior derecha, mientras el carrito este vacio este no será cliqueadle , pero cuando se agregan productos este se vuelve un hipervínculo con la etiqueta "Link" que os dirigirá a una pestaña donde podremos ver nuestros productos y seguir con la compra.

Los valores del carrito se pueden modificar desde varios componentes , muy separados como para enviar las funciones y propiedades entre todos ellos manualmente sin que quede muy desprolijo, entonces hice uso de hook useContext, envolviendo toda la app en la etiqueta "MiCarritoDatos", este componente tiene la función de proveer de variables y funciones que involucran al carrito a aquellos componentes que las necesiten. useContext también se usó para establecer los filtros en la lista de ítems, con un funcionamiento similar.

En la pestaña del carrito se pueden ver los artículos seleccionas , con sus respectivas cantidades y precio. En la parte derecha un formulario que debe ser rellenado correctamente. Una vez ese formulario se complete se mostrará en el mismo lugar una factura , indicando que precio total , con un botón para confirmar la compra. Si la compra se confirma se subirá esta compra a la colección "Ventas" en Firebase , en la misma se podrá observar los productos comprados y los datos del comprador , así como una referencia de compra que se mostrara también en pantalla para que el usuario pueda buscar su pedido.

### Dependencias

1. "react-bootstrap" Para personalizar de forma mas sencilla los estilos.
2. "react-toastify" Se uso para informar cuando hay un error , por ejemplo tratar de agregar un item al carrito que ya esta ahi.
3. "react-phone-number-input" Me parece un input excelente para ingresar un numero de telefono.
