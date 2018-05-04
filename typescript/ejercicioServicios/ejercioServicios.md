# Gestor de servicios: 
### Interface servicio :  atributos (id:string, action: function (Array<Param> entrada,nameSalida:string) : Param (función tipada);
### Interface Param : atributos (string name, number: valor)
### Clase GestorDeServicios -
  + privado atributos Array<servicio> , 
  + función getService para acceder a un servicio (por index en principio para nota por id)
  + constructor con array de servicios
  + funciones para añadir servicios nuevos
  + funcion que devuelve el id de cada servicio concatenado con su index con forma = index - id return Array<string>
### Implemetar varios servicios (usar bucles for):

  + Sumar todos los valores del array;
  + Mediar todos los valores del array;
  + Escoger el valor más alto;
  + Escoger el valor más bajo;
	
