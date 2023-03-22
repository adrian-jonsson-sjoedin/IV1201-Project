const jwt = require('jsonwebtoken');
require('dotenv').config();
const database = require("../models");
const Person = database.person;
const sequelizeOperation = database.Sequelize.Op;

exports.verify = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.TOKEN_HASH, (err, username) => {
        if(err) return res.sendStatus(403)
        req.username = username
        next()
    })
}

exports.verifyRecruiter = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) {return res.sendStatus(401)}

    jwt.verify(token, process.env.TOKEN_HASH, async (err, username) => {
        if(err) {return res.sendStatus(403)}
        try {
            const user = await Person.findOne({
                where: {
                    username: username
                }
            })
            if(user.role_id !== 1) {return res.sendStatus(403)}
        }
        catch (err) {
            return res.sendStatus(500)
        }
        next()
    })
}

exports.verifyApplicant = async (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) {return res.sendStatus(401)}

    jwt.verify(token, process.env.TOKEN_HASH, async (err, username) => {
        if(err) {return res.sendStatus(403)}
        try {
            const user = await Person.findOne({
                where: {
                    username: username
                }
            })
            if(user.role_id !== 2) {return res.sendStatus(403)}
        }
        catch (err) {
            return res.sendStatus(500)
        }
        next()
    })
}

exports.approve = async (req, res) => {
    res.sendStatus(200)
}

