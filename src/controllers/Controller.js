const PessoaController = require("./PessoaController");

class Controller {
  constructor(entidadeServices) {
    this.entidadeServices = entidadeServices;
  }

  async pegaTodos(req, res) {
    try {
      const listaDeRegistro = await this.entidadeServices.pegadosOsRegistros();
      return res.status(200).json(listaDeRe);
    } catch (error) {}
  }
}

module.exports = PessoaController;
