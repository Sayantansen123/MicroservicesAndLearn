const User = require("../models/User")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

//register controller
const registerUser = async (req, res) => {
    try {
        //extract user information from our request body
        const { username, email, password, role } = req.body;

        //check if the user is already exists in our database
        const checkExistingUser = await User.findOne({
            $or: [{ username }, { email }],
        });
        if (checkExistingUser) {
            return res.status(400).json({
                success: false,
                message:
                    "User is already exists either with same username or same email. Please try with a different username or email",
            });
        }

        //hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newlyCreatedUser = new User({
            username,
            email,
            password: hashedPassword,
            role: role || "user",
        });

        await newlyCreatedUser.save();

        if (newlyCreatedUser) {
            res.status(201).json({
                success: true,
                message: "User registered successfully!",
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Unable to register user! please try again.",
            });
        }



    } catch (error) {
        console.log("Error while registering user", error)
        res.status(500).send({
            success: false,
            message: "Something went wrong"
        })
    }
}


//login controller

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        //find the user exist

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "User not found",
            });
        }

        //if the password is correct or not
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials!",
            });
        }

        //create user token
        const accessToken = jwt.sign({
            userId: user._id,
            username: user.username,
            role: user.role,
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: "15m"
        })

        res.status(200).send({
            success: true,
            message:"logged in succesfully",
            accessToken

        })



    } catch (error) {
        console.log("Error while login user", error)
        res.status(500).send({
            success: false,
            message: "Something went wrong"
        })
    }
}

module.exports = { loginUser, registerUser }