import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userID, res) => {
    const token = jwt.sign({userID}, process.env.JWT_SECRET, {
        expiresIn: '15D'
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 8 * 24 * 60 *60 *1000,     //Time in Milliseconds
        httpOnly: true,                         //prevents XSS
        sameSite: "strict",                     // CSRF attacks
        secure: true
    })
}
export default generateTokenAndSetCookie;