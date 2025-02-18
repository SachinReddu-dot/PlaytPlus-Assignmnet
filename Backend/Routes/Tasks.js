const router = require('express').Router()
const Tasks = require('../Models/Tasks');
const taskModel = require('../Models/Tasks')
const userModel = require('../Models/Users')
const authRoute = require('../Routes/AuthRoute')


router.post("/create-task", async(req, res)=>{
    try {
        let { title, duedate, priority, desc } = req.body;
        let { id } = req.headers;
        const newTask = await taskModel.create({
            title,
            duedate,
            priority,
            desc,
        })
        const user = await userModel.findByIdAndUpdate(id, { $push:{tasks: newTask._id}});
        res.status(200).json({message: "task created"})
        res.send(newTask)
    } catch (err) {
        console.log(err);
        res.status(400).send("Internal server Error")
    }
})

router.get("/get-tasks", async(req, res)=>{
    try {
        let { id } = req.headers;
        const userData = await userModel.findById(id).populate({path: 'tasks'})
        res.status(200).json({data: userData})
    } catch (err) {
        console.log(err.message)
    }
})

router.delete("/delete-task/:id", async(req, res)=>{
    try {
        let { id } = req.params;
        const userId = req.headers.id;

        await taskModel.findByIdAndDelete(id)
        await userModel.findByIdAndUpdate(userId ,{$push:{tasks: id}});
        res.status(400).json({data: userData})
    } catch (err) {
        console.log(err.message)
    }
})

router.put("/update-task/:id", async(req, res)=>{
    try {
        let { id } = req.params;
        const {title, desc, duedate, priority} = req.body;

        await taskModel.findByIdAndUpdate(id ,{title: title, desc: desc, duedate: duedate, priority: priority});
        res.status(400).json({data: userData})
    } catch (err) {
        console.log(err.message)
    }
})

module.exports = router;