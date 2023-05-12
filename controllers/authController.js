const User = require("../models/User")
const bcrypt = require("bcrypt")

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            status: "success",
            user
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            error
        })
    }

}

exports.loginUser = async (req, res) => {
    try {
        const {
            email,
            password
        } = req.body;

        const user = await User.findOne({
            email
        });

        if (user) {
            const same = await bcrypt.compare(password, user.password);

            if (same) {
                // USER SESSION
                req.session.userID= user._id
                res.status(200).redirect("/");
                return;
            }
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            error,
        });
    }
};


// exports.loginUser = async (req, res) => {
//     try {
//         const {email,password}= req.body
//         await User.findOne({email},(err,user)=>{
//             if(user){
//                 bcrypt.compare(password, user.password , (err,same)=>{
//                     if(same){
//                         // User session
//                         res.status(200).send("You ara Login")
//                     }
//                 })
//             }
//         })

//     } catch (error) {
//         res.status(400).json({
//             status: "fail",
//             error
//         })
//     }

// }