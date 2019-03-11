const mongoose = require('mongoose');
const schema = mongoose.Schema;
let staticUser = new schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    Type: {
        type: String
    },
    status: {
        type: String,
        default: "ACTIVE"
    }
}, { timestamps: true })
module.exports = mongoose.model('staticUser', staticUser);
mongoose.model('staticUser', staticUser).find((error, result) => {
    if (result.length == 0) {
        let obj={
            'title': "Terms and Conditions",
            'description':"mobiloitte",
            'Type': 'Requirement',
        }
        mongoose.model('staticUser', staticUser).create(obj, (error1, result1) => {
            if (error)
                console.log("error"+ error1)
            else{
                console.log("term & condition  saved succesfully.", result1);
            }
        })
    }
});
mongoose.model('staticUser', staticUser).find((error, result) => {
    if (result.length == 0) {
        let obj1 = {
            'title': "About Us",
            'description':"all about the site",
            'Type': 'ABOUT_US'
        }
        mongoose.model('staticUser',  staticUser).create(obj1, (error, success) => {
            if (error)
                console.log("Error is" + error)
            else
                console.log("Static about_us content saved succesfully.", success);
        })

    }
});
mongoose.model('staticUser', staticUser).find((error, result) => {
    if (result.length == 0) {
        let obj2= {
            'title': "Privacy Policy",
            'description':"'description':",
            'Type': 'PRIVACY'
        }
        mongoose.model('staticUser',  staticUser).create(obj2, (error, success) => {
            if (error)
                console.log("Error is" + error)
            else
                console.log("Static about_us content saved succesfully.", success);
        })

    }
});

