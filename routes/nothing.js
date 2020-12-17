const express = require("express");

const router = express.Router();

/**
 * Does nothing
 * 
 * @name GET /api/nothing
 * @throws {400} - never throws this
 */
router.get("/", [], async (req, res) => {
    res.status(200).json({}).end();
})