"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = (req, res) => {
    const { payload } = req.body;
    res.sendStatus(200).send(payload);
};
exports.update = (req, res) => {
    const {} = req.body;
};
//# sourceMappingURL=commentController.js.map