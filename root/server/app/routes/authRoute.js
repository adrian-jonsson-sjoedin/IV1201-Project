/**
 * @module authRoute
 * This module exports a function which sets up a series of API routes
 * for the database resource 'authorization'.
 * @param {Object} app - An instance of the Express application
 */
module.exports = app => {
    const auth = require('../controllers/auth.js')
  
    var router = require("express").Router();

    router.get('/applicant', auth.verifyApplicant, auth.approve)
    router.get('/recruiter', auth.verifyRecruiter, auth.approve)
  
    app.use('/api/auth', router);
  };