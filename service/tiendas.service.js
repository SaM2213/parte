const faker = require("faker");
const boom = require("@hapi/boom");

class TiendasService {

  constructor() {
    this.tiendas = [];
    this.generarDatos();
  }

  generarDatos(){
    const size =10;
    for (let index = 0;index <size; index ++){
      this.tiendas.push({
        id:faker.datatype.uuid(), // faker datos id aleatorios
        nombreTienda: faker.commerce.department(), //nombre
        ciudad: faker.address.cityName(),
        direccion: faker.address.streetAddress(),
        esVisible : faker.datatype.boolean() //borrar
      });
    }
  }

  create(tienda){
    const pre = tienda.precio;
    if (pre < 10) {         //Crear una condicion de tienda para verificar error
      throw boom.notFound("El monto es demasiado bajo");
    } else {
      tienda.id = faker.datatype.uuid();
        this.tiendas.push(tienda);
    }
  }

  update(id,tienda){
    const posicion = this.tiendas.findIndex(item =>item.id == id);
    if (posicion === -1) {
      throw boom.notFound("Tienda no encontrada");
    }
    this.tiendas[posicion] =tienda;
    return this.tiendas[posicion];
  }

  async updateParcial(id,tiendaParcial){
    const posicion = this.tiendas.findIndex(item =>item.id == id);
    if (posicion === -1) {
      throw boom.notFound("tienda no encontrada");
    }
    const tienda = this.tiendas[posicion];
    this.tiendas[posicion] ={
      ...tienda,
      ...tiendaParcial
    };
    return this.tiendas[posicion];
  }

  delete(id){
    const posicion = this.tiendas.findIndex(item =>item.id == id);
    if (posicion === -1) {
      throw boom.notFound("Tienda no encontrada");
    }
    this.tiendas.splice(posicion,1);
    return {
      mensaje : "operacion realizada",
      id
    };
  }

  findAll(){
    return new Promise((resolve,reject)=>{
    setTimeout(() =>{
      resolve (this.tiendas);
    },
      1000)
   });
  }

  findBy(id){
    const tienda = this.tiendas.find(item =>item.id === id);
    if (!tienda){
      throw boom.notFound("Tienda no encontrada");
    }
    if (!tienda.esVisible){
      throw boom.forbidden("Tienda no accesible");
    }
    return tienda;
  }

}


module.exports = TiendasService;
