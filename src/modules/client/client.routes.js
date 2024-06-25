const express = require("express");
const clientService = require("./client.service");

const router = express.Router();

// GET /api/client
router.get("/api/client", async (req, res) => {
  // #swagger.tags = ['Cliente']
  try {
    const params = JSON.parse(req.headers["params"]);

    let paginated = await clientService.paginated(params);
    return res.status(200).send(paginated);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// GET /api/client/:id
router.get("/api/client/:id", async (req, res) => {
  // #swagger.tags = ['Cliente']
  try {
    const clientId = req.params.id;
    const client = await clientService.findOneById(clientId);
    return res.status(200).send(client);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// POST /api/client
router.post("/api/client", async (req, res) => {
  // #swagger.tags = ['Cliente']
  try {
    const newClient = req.body;
    const client = await clientService.save(newClient);
    return res.status(201).send(client);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// PUT /api/client/:id
router.put("/api/client/:id", async (req, res) => {
  // #swagger.tags = ['Cliente']
  try {
    const clientId = req.params.id;
    const updatedClient = req.body;
    const client = await clientService.update(clientId, updatedClient);
    return res.status(200).send(client);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// DELETE /api/client/:id
router.delete("/api/client/:id", async (req, res) => {
  // #swagger.tags = ['Cliente']
  try {
    const clientId = req.params.id;
    await clientService.remove(clientId);
    return res.status(200).send("Cliente eliminado correctamente.");
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;
