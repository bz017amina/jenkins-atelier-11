const express = require('express');
const app = express();

app.get('/add/:a/:b', (req, res) => {
    const sum = parseInt(req.params.a) + parseInt(req.params.b);
    res.status(200).json({ resultat: sum });
});

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => console.log('Serveur sur port 3000'));
}