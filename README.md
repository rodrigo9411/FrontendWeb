# Proyecto Programacion Web
Frontend

### Lab 1
- En este lab se realizó el sketch del frontend utilizando html y css. 
- Mi proyecto será un listado de pokemon que me gustan junto con algunas de sus características.

### Lab 2 y 3
- En este lab se hizo el mismo diseño del frontend pero utilizando React.
- Se trabajó el diseño de la app, mostrando los objetos con una lista estática con los items. 
- Se utilizó localstorage junto a redux para manejar el estado de la aplicación.
- Se hicieron los métodos del CRUD integrado con los reductores.

### Lab 7
- Debido a dificultades que presentaba redux para la implementación, se decidió codificar de otra manera el frontend
- Conexión hacia el backend por medio de axios.

### Lab 8
- Se crearon dockerfile y .dockerignore.
- El docker-compose se añadió al proyecto para conectarse a contenedores de mongo y de redis.
- El frontend corre en el puerto 8000

### Lab 9
- Se subieron las imágenes a dockerhub
- Se deben correr las imágenes en aws y correr el proyecto desde las mismas

### Lab 10
- Se subio la imagen a ECR de amazon.
- Se creó un cluster con 1 instancia de ec2 el cual contiene la imagen del frontend y con el puerto 80 expuesto
- El frontend está configurado para utilizar la URL de el backend ya subido en amazon.
- Se utiliza un load balancer para que al momento de caer una instancia, pueda levantarse otra inmediatamente y así ofrecer continuidad.

