const mongoose = require('mongoose')
const schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
var bookSchema = new schema({
    bookName: {
        type: String,
    },
    bookPrice: {
        type: String,
    },
    standard: {
        type: String,
    },
    edition: {
        type: String
    },
    Likes: {
        type: String
    },
    autherId: {
        type: String
    },
    status: {
        type: String,
        default: "ACTIVE",
        enum: ["ACTIVE", "BLOCK", "DELETE"]
    },
    profilePic: [{
        type: String,
        default: Date.now()
    }],
    likeBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]


}, { timestamps: true })
bookSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Book', bookSchema);


