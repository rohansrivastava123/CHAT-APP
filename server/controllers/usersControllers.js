const User = require("../model/userModel")
const bcrypt = require("bcrypt")

module.exports.register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body
    const usernameCheck = await User.findOne({ username })
    if (usernameCheck) {
      return res.json({ msg: "Username already used", status: false })
    }
    const emailCheck = await User.findOne({ email })
    if (emailCheck)
      return res.json({ msg: "Email are already Used", status: false })
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    })
    delete user.password
    return res.json({ status: true, user })
  } catch (err) {
    next(err.message)
  }
};

//for login we are writing it now


module.exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) {
      return res.json({ msg: "User doesnot Exist !", status: false })
    }
    const ispasswordvalid = await bcrypt.compare(password,user.password)
    if (!ispasswordvalid)
      return res.json({ msg: "Incorrect password!", status: false })
    delete user.password;
    return res.json({ status: true, user })
  } catch (err) {
    next(err.message)
  }
}
