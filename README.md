# Trabajo Final para Tecnicatura Universitaria en Programación

---

## <img width="40" height="40" src="https://img.icons8.com/stickers/40/user-group-man-woman.png" alt="group man woman"/> Integrantes y Roles

| Integrante | Rol |
| ---------- | --- |
| [**Calle, Sonia**](https://github.com/SoCalle) | Analista Funcional (realiza la documentación Funcional del proyecto) / Scrum Master / Tester QA (documentar casos de prueba durante el desarrollo) / FrontEnd - BackEnd Developer / Base de Datos |
| [**Costa, María Eugenia**](https://github.com/eugenia1984) | Team Lead / Diseñadora UX/UI (realiza la documentación de Diseño y presentación) / Documenta el desarrollo en el README del proyecto en GitHub y en la Wiki / FrontEnd - BackEnd Developer / Base de Datos |
| [**Alsina, Maximiliano**](https://github.com/MalsinaG) | Product Owner / Realizara el video final de presentación / FrontEnd - BackEnd Developer / Base de Datos |
| [**Matias Alancay**](https://github.com/matias9486) | FrontEnd - BackEnd Developer / Base de Datos |

---

## <img width="40" height="40" src="https://img.icons8.com/color/40/dynamic-links.png" alt="links"/> Links

- [Brief](https://docs.google.com/document/d/1LPc0LTbNF5unnrfiF8R59yl9BBKEm1BsEWLsPGhDPJI/edit?usp=sharing)

- [Documentación funcional](https://docs.google.com/document/d/1YNPMAWqXpl7aj9xLWDiIT1L7vwaxbv-jqRyhpXVV4Hc/edit?usp=sharing)

- [Mapa del sitio](https://docs.google.com/document/d/1Ec3KNFZzIzSQiBec-16NTbqHis8xm4VU2E9OXlZHgHQ/edit?usp=sharing)

- [Presentación](https://www.canva.com/design/DAFuEnIx6ZQ/WqMlVRlpdpPYe6gUj71rOw/edit?utm_content=DAFuEnIx6ZQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

- Video (en construcción)

---

## <img width="40" height="40" src="https://img.icons8.com/emoji/40/laptop-emoji.png" alt="laptop-emoji"/> Tecnologías

- <img width="30" height="30" src="https://img.icons8.com/color/30/html-5--v1.png" alt="html-5--v1"/> HTML5

- <img width="30" height="30" src="https://img.icons8.com/color/30/css3.png" alt="css3"/> CSS 3

- [<img width="30" height="30" src="https://img.icons8.com/color/30/typescript.png" alt="typescript"/> **TypeScript**](https://www.typescriptlang.org/)

- [<img width="30" height="30" src="https://img.icons8.com/color/30/material-ui.png" alt="material-ui"/> **Material UI**](https://mui.com/material-ui/): @emotion/react - @emotion/styled - @mui/material - @mui/icons-material - @mui/x-data-grid

- [<img width="30" height="30" src="https://img.icons8.com/ultraviolet/30/react--v1.png" alt="react--v1"/> **React**](https://react.dev/) y **react-dom**

- [<img width="30" height="30" src="https://img.icons8.com/fluency-systems-regular/30/nextjs.png" alt="nextjs"/> **NEXTjs**](https://nextjs.org/)   

- [**react-slideshow-image**](https://www.npmjs.com/package/react-slideshow-image), para los sliders de productos en la página de detalle del producto

- [**react-hook-form**](https://react-hook-form.com/), para el manejo de los formularios

- [**SWR**](https://swr.vercel.app/) (**stale-while-revalidate**), bibilioteca React Hooks para la obtención de datos, el componente obtendrá sonstante y automáticamente el último flujo de datos. Y la interfaz de usuario será siempre rápida y reactiva.

- **js-cookie**, para procesar las cookies en el Front End

-  [<img src="https://github.com/devicons/devicon/blob/master/icons/yarn/yarn-original.svg" alt="yarn" width="30" height="30"  /> **Yarn**](https://yarnpkg.com/)

- <img width="30" height="30" src="https://img.icons8.com/color/30/git.png" alt="git"/> Git y <img width="30" height="30" src="https://img.icons8.com/ios-filled/30/github.png" alt="github"/> GitHub

- [<img width="30" height="30" src="https://img.icons8.com/color/30/mongodb.png" alt="mongodb"/> **MongoDB**](https://www.mongodb.com/) y [<img width="30" height="30" src="https://img.icons8.com/color/30/mongoose.png" alt="mongoose"/> **Mongoose**](https://mongoosejs.com/) , para la base de datos

- [**jsonwebtoken**](https://jwt.io/)

- [**bcryptjs**](https://www.npmjs.com/package/bcrypt)

- [<img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/30/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png" alt="postman"/> **Postman**](https://www.postman.com/), para ver las pediciones REST FULL API

- [<img width="30" height="30" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/30/external-docker-a-set-of-coupled-software-as-a-service-logo-color-tal-revivo.png" alt="docker"/> **Docker**](https://www.docker.com/)

  
---

## <img width="30" height="30" src="https://img.icons8.com/color/30/console.png" alt="console"/> ¿Cómo ver el proyecto en local?

Este proyecto está creado con [**Next.js**](https://nextjs.org/) con el comando: [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


---

## Primeros pasos

1. Antes que nada debes tener insatalado:

- **Node** de versión 16 en adelante

- **Yarn**

2. Bajarte el código del repositorio, creando una carpeta en tu local, y luego: 

```BASH
git clone https://github.com/CodeSystem2022/E-Commerce-ERROR4004-BIS.git .
```

Una vez creado entra dentro de la carpeta del proyecto.

3. Instalar las **dependencias** (**node_modules**) con:
```BASH
yarn install
```

4. Correr el **servidor** en local, con:

```bash
yarn dev
```

5. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador localmente, para ver la aplicación.

6. Para correr localmente, se necesita la base de datos, con:

```bash
docker-compose up -d
```

El ```-d```, significa detached

A tener en cuenta para las configuraciones de Docker y Base de datos:

-El **service** es ``ohlalalshoesdb``, en el archivo `.env`: `MONGO_URL=mongodb://localhost:27017/ohlalalshoesdb`.

-El nombre del **contenedor** es ``holalashoes-database``, este nombre irá en el archivo **docker-compose.yaml** y es el nombre que veréen Docker 

-El nombre del **volumen** es `mongo`.

7. Configurar las **variables de entorno**

Copiar el archivo ```.env.template``` y renombrarlo a ```.env```

8. MongoDB URL Local:

```MONGO_URL=mongodb://localhost:27017/ohlalalshoesdb```

9. Reconstruir los módulos de node y levantar Next

```bash
yarn install
yarn dev
```

10. Llenar la base de datos con información de pruebas

Llamar a: ```http://localhost:3000/api/seed```

11. Con <img width="20" height="20" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/20/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="postman"/> **Postman** podemos hacer las peticiones REST FUL API, creandonos:

GET: `localhost:3000/api/seed` para confirmar que tenemos bien la base de datos

### <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="postman"/> Endpoints para ver todos los productos:

- **Todos los productos**:

GET: `localhost:3000/api/products` para ver todos los productos

- **Productos por genero**:

GET: `localhost:3000/api/products?gender=men` para ver los productos por genero masculino, los demás géneros posibles son: `women`, `kid` y `unisex`


- **Un producto por su slug**:

GET: `localhost:3000/api/products/{slug}` slug es la parte que llega dinamica acorde al producto a mostrar un producto por el slug

- **Un producto por tag o por el titulo**:

GET: `localhost:3000/api/search/{string}`

### <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="postman"/> Endpoints de usuarios

- **Para ver todos los usuarios**:

POST: `localhost:3000/api/user/login`

Y se debe emviar el body:

```
email: string,
password: string
```

Para recibir de response:

```
{
  "token": string,
  "user": {
    "email": string,
    "role": "string",
    "name": string
  }
}
```

---

## <img width="30" height="30" src="https://img.icons8.com/external-flaticons-flat-flat-icons/30/external-scrum-agile-flaticons-flat-flat-icons-7.png" alt="agile"/> ¿Cómo nos organizamos?

- Utilizamos las metodologías **ágile** y el marco de trabajo **Scrum**

- Dividimos todo el proyecto en **3 Sprints** de **una semana** cada uno.

## Sprint 1 - Semana 1 (20Oct - 26Oct):

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/> Creación del **repositorio** en GitHub

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/> Creación del **proyecto** con NEXTjs

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/> Creación del **Navbar**, con: logo, links (Men, Women, Unisex, Kids), la lupa para buscar, el carro de compras y el Menú lateral, que tendrá: lupa de búsqueda, Profile, My orders, Men, Women, Kids, Unisex, Login, Exit y si es administrador el panel de adminsitrador con: Products, Orders, Users.

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/> Creación de la HomePage con las tarjetas de los productos, que contienen la imagen del producto, el nombre y el precio

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/> **Página con el detalle del producto**, que tiene: slider con las imagenes del producto, titulo, precio, boton de - y + para modificar la cantidad de productos, botones con los talles disponibles, botón para agregar al carro de compra y la descripción        

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/> **Página del carro de compras** (`/cart`), donde muestra la imagen del producto, el título, la talla, el precio, se pueden agregar o quitar productos. Y también se ve el resumen del pedido, con la suma total a abonar. Y también la **Página de carro de compras vacío** (`` /cart/empty), la cual tiene un ícono del carro de compras, el mensaje y un boton para volver.

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/> **Página del la dirección de envío de la compra**(`/checkout/address`), con el título, varios campos apra completar la dirección de envío y el botón de confirmación.

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/>**Página del resumen de la compra**(`/checkout/summary`), donde se ve en tarjetas el detalle con imagen, titulo, precio, talla y total de ítems de cada producto. Y se ve el resumend e la compra con la dirección de envío (que permite editar)  y el total a pagar(también editable para modificar la cantidad de items desde el carro de compra) con el botón para confirmar la compra.

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/> **Página de pago**(`/orders/{id}`) con un badge con informe si el pago esta ok o no. Debe tener tarjetas con los articulos a comprar y el resumen de la dirección de envío y el total a  pagar.

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/>**Página de historial de ordenes**(`/orders/history`), donde se ve en una tabla el historial de las ordenes, con los id, el nombre completo, si está pago o no y un link para ir al detalle de la orden.

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/>**Página de iniciar sesión** donde se ingresa con correo electrónico y contraseña. Y hay un link por si no es un usuario registrado se pueda registrar.

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/>**Página de crear cuenta** con nombre completo, correo electrónico y contraseña. Si ya tiene cuenta puede ir a la página de iniciar sesión.

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/> Crear los **REST FULL API** para tener los endpoints de busqueda de **productos**: GET:`/api/products`, GET:`api/products?gender=men` para buscar por genero (men, women, kid, unisex), GET:`/api/products/{slug}` para buscar el producto por el slug y `/api/search/{string}` donde string es una palabra ya sea del titulo o de las tags

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/>Crear la **pantalla de carga** par que el usuario sepa que se están buscando los productos  

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/>Crear las **páginas por genero**: hombre, mujer, niños y unisex, para que al hacer click en las opciones del navbar tengamos los productos por género

## Sprint 2 - Semana 2 (27Oct - 2Nov):

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/> Completamos las paginas de registro y login, teniamos solo la maquetacòn, ahora agregamos las validaciones con **React-hook-form** y guardamos los usuarios en la base de datos.

## Sprint 3 - Semana 3 (3Nov - 10Nov):

<img width="20" height="20" src="https://img.icons8.com/emoji/48/check-mark-button-emoji.png" alt="check mark"/>

---

## <img width="30" height="30" src="https://img.icons8.com/color/48/merge-git.png" alt="merge-git"/> Workflow de Git y GitHub

- La rama principal es: **main**

- En base a la rama main se crean las nuevas ramas para ir trabajando en las tareas. Una vez completada la tarea, dicha rama es unida a main y eliminada.

-> ¿Cómo nombramos las ramas?

``feat/#<nro-issue>-<tarea>``, donde el **nro de issue** corresponde al issue creado y a la historia d eusuario en la que se trabaja y **tarea** es un nombre descriptivo de la tarea a realizar.

Si es una tarea solo de estilos en vez de `feat` utilizamos `style`, si es solo de documentación utilizamos `doc` y si es para arreglar un gub `bugfix`

---

## Estructura del proyecto

```
>.next
> components
  > cart
  > laytouts
  > products
  > ui
> context
> database
> hooks
> interfaces
> models
> node_modules
> pages
  > admin
  > api
  > auth
  > cart
  > category
  > checkout
  > orders
  > product
> public
  > logo
  > products
> styles
  globals.css
> theme
> utils
.env.template
.eslintrc.json
.gitignore
docker-compose.yaml
next-env.d.ts
next.config.js
package.json
README.md
tsconfig.json
yarn.lock
```

---

## <img width="30" height="30" src="https://img.icons8.com/3d-fluency/30/book.png" alt="book"/> Aprender más

Para aprender más de **Next.js**, te compartimos los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - aprende sobre Next.js y API.

- [Learn Next.js](https://nextjs.org/learn) - un tutotial interactivo de Next.js.

Poder ver el repositorio: [the Next.js GitHub repository](https://github.com/vercel/next.js/) - el feedback y la contribución son bienvenidos.

---

## <img width="30" height="30" src="https://img.icons8.com/office/30/monitor.png" alt="monitor"/> Para deployar en Vercel

La forma más sencilla de deployar tu proyecto de Next.js es usando [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), los creadores de Nextjs.

Mirá: [Next.js deployment documentation](https://nextjs.org/docs/deployment) para más detalles.
