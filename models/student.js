const mongoose = require('mongoose');

const databaseURL = 'mongodb://localhost:27017/studentsdb';

const options = { useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false };

mongoose.connect(databaseURL, options);

const studentSchema = new mongoose.Schema({
    name: { type: String, required: [true, "No name provided"] },
    id: { type: String, required: [true, "No ID number provided"] },
    img: { type: String, required: true }
  }
);

const studentModel = mongoose.model('students', studentSchema);

exports.getAll = function(sort, next){
  //next is the callback which controller needed to be executed
  studentModel.find({}).sort( sort ).exec(function(err, result) {
    if(err) throw err;
    var studentObjects = [];
  
    result.forEach(function(doc) {
      studentObjects.push(doc.toObject());
   });
  
   next(studentObjects);
  });
}

exports.create = function(obj, next){
  const student = new studentModel(obj);

  student.save(function(err, student) {
   next(err, student); 
  });
};

exports.search = function(query, next){
  studentModel.find(query, function(err, student) {
   next(err,student);
  });
};

exports.editId = function(query, update, options,next){
  studentModel.findOneAndUpdate(query, update, options, function(err, user){
    next(user);
  });
};