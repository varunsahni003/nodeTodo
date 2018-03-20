var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true // Removes extra space
    },
    // completed: {
    //     type: Boolean,
    //     default: false
    // },
    // completedAt: {
    //     type: Number,
    //     default: null
    // }
});
// var user = new User({
//     email: 'varunsahni003@gmail.com'
// });
// user.save().then((doc) => {
//     console.log('Saved user', doc);
// }, (error) => {
//     console.log("Unable to save user");
// });
module.exports = {
    User: User
};