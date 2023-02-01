# Atomic

Mi nombre es Franco Panfilo y este fue mi primer proyecto en React.

## Proyecto

La app consiste en un e-comerce, en el mismo se puede navegar entre las categorias con la ayuda de useParams y react-routes (las mismas fueron previamente instaladas).
A su vez , tanto en el menu principal como en cualquier categoria seleccionada se podra observar una lista de items. Esta lista , ademas de poder ser filtrada por categorias se puede filtrar por precio. Esta ultima funcionalidad no era obligatoria pero a mi entender hace mucho mas linda la pagina y brinda muy buenas funcionalidades.

Los items son importados desde una base de datos en firebase, el nombre de la coleccion es Productos y se ven alrededor de 60 items, cada uno con distintas caracteristicas.

En esta lista de items podemos seleccionar cualquiera de ellos para verlo al detalle, otra vez se usa useParams para identificar a que item se le hizo el "click". En el detalle de cada producto tendremos una descripcion detallada que no se podia ver en el item list, ademas de ver la foto del producto mas grande. Si el producto es del interes del usuario , este puede seleccionar una cantidad y guardarlo en su carrito.

Este carrito inicialmente esta vacio, sin embargo a medida que se van agregando items , estos se guardan , con sus respectivas cantidades y precios. El icono del carrito esta en la parte superior derecha, mientras el carrito este vacio este no sera clickeable , pero cuando se agregan productos este se vuelve un hipevinculo con la etiqueta "<Link/>" que os dirigira a una pestaña donde podremos ver nuestros productos y seguir con la compra.

Los valores del carrito se pueden modificar desde varios componentes , muy separados como para enviar las funciones y propiedades entre todos ellos manuelmante si que quede muy desprolijo, entonces hice uso de hook useContext, envolviendo toda la app en la etiqueta "<MiCarritoDatos/>", este componente tiene la funcion de proveer de variables y funciones que involucrean al carrito a aquellos componentes que las necesiten. useContext tambien se uso para establecer los filtros en la lista de items, con un funcionamiento similar.

En la pestaña del carrito se pueden ver los articulos seleccionas , con sus respectivas cantidades y precio. En la parte dercha un formulario que debe ser rellenado correctamente. Una vez ese formulario se complete se mostrara en el mismo lugar una factura , indicando que precio total , con un boton para confirmar la compra. Si la compra se confirma se subira esta compra a la coleccion "Ventas" en firebase , en la misma se podra observar los productos comprados y los datos del comprador , asi como una referencia de compra que se mostrara tambien en pantalla para que el usuario pueda buscar su pedido.

### Dependencias

1. "react-bootstrap" Para personalizar de forma mas sencilla los estilos.
2. "react-toastify" Se uso para informar cuando hay un error , por ejemplo tratar de agregar un item al carrito que ya esta ahi.
3. "react-phone-number-input" Me parece un input excelente para ingresar un numero de telefono.
