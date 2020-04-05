const router = require('express').Router();

// only needs controller
const studentController = require('../controllers/studentController');

// Students route
router.get('/', studentController.getAllStudents);
  
// Inserts a student in the database
router.post('/add',studentController.create);
  
//   // Finds the students matching the name query from the database and returns the array
router.post('/search', studentController.search);
  
//   // Updates a student to a set id number
router.post('/:id/edit', studentController.editId);
  

module.exports = router;
//rawr