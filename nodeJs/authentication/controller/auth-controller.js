//register controller
const registerUser = async(req,res)=>{
    try {
        
    }catch (error) {
        console.log("Error while registering user",error)
        res.status(500).send({
            success :false,
            message:"Something went wrong"
        })
    }
}


//login controller

const loginUser = async(req,res)=>{
    try {
        
    }catch (error) {
        console.log("Error while login user",error)
        res.status(500).send({
            success :false,
            message:"Something went wrong"
        })
    }
}