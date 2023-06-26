const express = require("express");
// const {
//   getById,
//   add,
//   deleteById,
//   updateById,
// } = require("../../controllers/contacts");

const router = express.Router();
const ctrl = require("../../controllers/contacts");
const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", ctrl.updateById);

module.exports = router;
