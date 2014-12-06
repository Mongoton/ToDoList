var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

mongoose.model( 'Todo', Todo );
//mongoose.connect( 'mongodb://localhost/express-todo' );
mongoose.connect( 'mongodb://heroku_app32231064:hmiem6skl6pugs0sou2lbmm24q@ds061200.mongolab.com:61200/heroku_app32231064');