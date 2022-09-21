import userModal from "../modals/user.js"

export const postRegistration = async(req,res) => {
    const {userName,email,password} = req.body;
    const existing = await userModal.findOne({email:email});
    console.log(existing)
    if(existing){
        return res.status(403).json({message:"User already exist"});
    }
    const newUser = new userModal({userName,email,password});
    const data = await newUser.save();

    res.send(data);
}

export const postLogin = async(req,res) => {
    const {email,password} = req.body;
    const existing = await userModal.findOne({email:email,password:password});
    console.log(existing)
    if(existing){
        return res.status(200).json(existing);
    }else{
        return res.status(401).json({message:"Wrong credentials"});
    }
    
}