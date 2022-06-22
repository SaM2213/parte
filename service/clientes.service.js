const faker = require("faker");
const boom = require("@hapi/boom");

class ClientesService {

  constructor() {
    this.clientes = [];
    this.generarDatos();
  }

  generarDatos(){
    const size =10;
    for (let index = 0;index <size; index ++){
      this.clientes.push({
        id:faker.datatype.uuid(),
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        numero:faker.random.number(),

        esVisible : faker.datatype.boolean()
      });
    }
  }

  create(cliente){
    //const error = this.actualiza();
    cliente.id = faker.datatype.uuid();
    this.clientes.push(cliente);
  }

  update(id,cliente){
    const posicion = this.clientes.findIndex(item =>item.id == id);
    if (posicion === -1) {
      throw boom.notFound("Cliente no encontra");
    }
    this.clientes[posicion] =cliente;
    return this.clientes[posicion];
  }

  async updateParcial(id,clienteParcial){
    const posicion = this.clientes.findIndex(item =>item.id == id);
    if (posicion === -1) {
      throw boom.notFound("Cliente no encontradoooo");
    }
    const cliente = this.clientes[posicion];
    this.clientes[posicion] ={
      ...cliente,
      ...clienteParcial
    };
    return this.clientes[posicion];
  }

  delete(id){
    const posicion = this.clientes.findIndex(item =>item.id == id);
    if (posicion === -1) {
      throw boom.notFound("cliente no encontra");
    }
    this.clientes.splice(posicion,1);
    return {
      mensaje : "operacion realizada",
      id
    };
  }

  findAll(){
    return new Promise((resolve,reject)=>{
    setTimeout(() =>{
      resolve (this.clientes);
    },
      1000)
   });
  }

  findBy(id){
    const cliente = this.clientes.find(item =>item.id === id);
    if (!cliente){
      throw boom.notFound("Cliente no encontrado");
    }
    if (!cliente.esVisible){
      throw boom.forbidden("Cliente no accesible");
    }
    return cliente;
  }

}




module.exports = ClientesService;
