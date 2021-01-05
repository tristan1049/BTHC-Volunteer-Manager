import express from "express";

const router = express.Router();

import { Users } from "../models/Users";

/**
 * Creates a user in the database
 * 
 * @name POST/api/user/create
 * @param {user} - user data object
 * @throws {400} - If error occurs
 */
router.post("/create", async (req, res) => {
    try {
        const success = Users.database_create_user(req.body.user);
        res.status(200).json(success).end();
    } catch (err) {
        res.status(400).json({ error: err }).end();
    }
})

/**
 * @name GET/api/user/:id?
 * @returns {user_data} - User data
 * @throws {400} - If error occurs
 */
router.get("/:id?", async (req, res) => {
    try {
        const user_data = Users.database_get_user_data(req.params.id);
        res.status(200).json(user_data).end();
    } catch (err) {
        res.status(400).json({ error: err }).end();
    }
})

module.exports = router;