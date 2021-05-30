const bcrypt=require("bcryptjs")
securePassword=async(password)=>{
    // hashing the password 
    const passWordHash= await bcrypt.hash(password,10)
    console.log(passWordHash)
    const passWordCompare=await bcrypt.compare("arsh@123",passWordHash)
    console.log(passWordCompare)
}
securePassword("arsh@123")