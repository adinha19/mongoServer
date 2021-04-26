import mongoose from 'mongoose';

const CourseSchema = mongoose.Schema({
    name: String,
    points: Number

});

export default mongoose.model('Course', CourseSchema);
