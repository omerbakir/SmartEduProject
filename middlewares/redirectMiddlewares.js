module.exports = (req, res, next) => {
    const userID = req.session.userID;

    if (userID) {
        return res.redirect("/")
    }
    next()
    //   User.findById(userID)
    //     .then((user) => {
    //       if (!user) {
    //         return res.redirect('/login');
    //       }
    //       next();
    //     })
    //     .catch((err) => {
    //       return res.redirect('/login');
    //     });
};