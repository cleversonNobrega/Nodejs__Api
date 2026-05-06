const Controller = require("./Controller.js");
const PessoasServices = require("../services/PessoaServices.js");
class PessoaController {
  static async pegaTodas(req, res) {
    try {
    } catch (erro) {
      const listaDePessoas = await database.Pessoa.FindAll();
      return res.status(200).json(listaDePessoas);
    }
  }
}

module.exports = PessoaController;
