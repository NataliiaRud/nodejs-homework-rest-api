const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put("/:contactId", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.patch("/:id/favorite", isValidId, validateBody(schemas.updateStatusContact), ctrl.updateStatusContact)

module.exports = router;
