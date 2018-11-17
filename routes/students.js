const router = require('express').Router();
const Student = require('../db/models/student');
// const Test = require('../db/models/test');

router.get('/', async (req, res, next) => {
  agent = await Student.findAll()
  return agent
})

module.exports = router;
