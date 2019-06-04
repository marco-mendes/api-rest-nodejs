exports.get = (req, res, next) => {
    res.status(200).send('Requisição GET recebida com sucesso!');
};


exports.getById = (req, res, next) => {
    res.status(200).send('Requisição GET recebida com sucesso!');
};



exports.post = (req, res, next) => {
    res.status(201).send('Requisição POST recebida com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição PUT recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição DELETE recebida com sucesso! ${id}`);
};