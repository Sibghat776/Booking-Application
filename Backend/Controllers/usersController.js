import Users from "../Models/Users.js"


export let updateUser = async (req, res, next) => {
    try {
        let updateduser = await Users.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updateduser)
    } catch (error) {
        next(error)
    }
}
export let getUsers = async (req, res, next) => {
    try {
        let allusers = await Users.find(req.body)
        res.status(200).json(allusers)
    } catch (error) {
        next(error)
    }
}
export let getUser = async (req, res, next) => {
    try {
        let oneuser = await Users.findById(req.params.id)
        res.status(200).json(oneuser)
    } catch (error) {
        next(error)
    }
}
export let deleteUser = async (req, res, next) => {
    try {
        await Users.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (error) {
        next(error)
    }
}
