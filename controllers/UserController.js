import * as UserModel from '../models/UserModel.js';

export const register = async (req, res) => {
    const {name, email, password} = req.body;

    try{
        const user = await UserModel.createUser(name, email, password);
        res.status(201).json({
            success:
            [{result: "A new account created!"}]
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error con"
        })
    }
}

export const login = async (req, res) =>{
    const {email, password} = req.body;

    try{
        const token = await UserModel.login(email, password);
        res.status(201).json({
            success:
            [{result: "login Succesful!", token}]
        })
    }catch(e){
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Internal Server Error con"
        })
    }

}