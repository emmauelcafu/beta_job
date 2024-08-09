const { formsPublicController } = require("../controller/formsPublicController");

const formsPublicHandler = (req, res) => {
    try {
        // Llamar a formsPublicController correctamente
        const formulario = formsPublicController();
        res.status(200).json(formulario);
    } catch (error) {
        console.log("Error en formsPublic:", error);
    }
}

module.exports = {
    formsPublicHandler
}
