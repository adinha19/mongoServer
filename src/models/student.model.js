import mongoose from 'mongoose';

const StudentSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    yearOfBirth: Number,
    address: String

});

export default mongoose.model('Student', StudentSchema);
