class ContractController {

  index(req, res) {
    res.json(({
      message: 'Send from contact controller!'
    }));
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editaar registro
  }

  delete() {
    // Excluir registro
  }
}

// Singleton
export default new ContractController();
