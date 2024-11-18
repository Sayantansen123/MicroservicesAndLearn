const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI) //connection established with mongodb server
        console.log("DB CONNECTED SUCCESFULLY")
    } catch (error) {
        console.log("DB can't be connected", error)
    }
}

connectDB()

//user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
}, { timestamps: true })

const User = mongoose.model('User', userSchema)

//sending data to the user model
async function runQueryExamples() {
    try {

        //creating a user
        const newUser = await User.create({
            name: "sayantan4sen",
            email: "sayan1234@gmail.com",
            age: 16,
            isActive: true,
            tags: ["super", "action", "stunt"],
        })

        await newUser.save()
        console.log("User created", newUser)

        //search all users
        // const allUser = await User.find({})
        // console.log(allUser)

        //get user by specific detail
        //const userIsActive = await User.find({isActive : true})
        //console.log(userIsActive)

        //get specific field
        // const selectAllFields = await User.find().select("name email -_id")//id parameter is default
        // console.log(selectAllFields)

        //give limited user
        // const limitedUser = await User.find().limit(2).skip(1); //give 2 users and skip the first user 
        // console.log(limitedUser)

        //sort users
        // const sortedUser = await User.find().sort({age:1})
        // console.log(sortedUser)

        //count document
        // const userCount = await User.countDocuments({isActive:true})
        // console.log(userCount)

        //delete document
        // const deleteDocument = await User.findByIdAndDelete("<Give id>");
        // console.log(deleteDocument)

        //update a document
        const updateUser = await User.findByIdAndUpdate(newUser._id, {
            $set: { age: 100, name: "sayantanss" },
            $push: { tags: "updated" },

        }, {
            new: true
        })

        console.log(updateUser)


    } catch (error) {
        console.log("error", error)
    } finally {
        await mongoose.connection.close()
    }
}

runQueryExamples()