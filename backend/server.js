import express from "express";
import cors from "cors"

const PORT = 8080;

const app = express();

// JSON middleware
app.use(express.json())
app.use(cors())


const users = [
    {name: "john", email: "john@email.com", password: "john123"}, {
    name: "jane",
    email: "jane@email.com",
    password: "jane123",
}];

app.get("/", (req, res) => {
    res.send(users);
});

app.post("/register", (req, res) => {
    const {email} = req.body

    const existingUser = users.find(user => user.email === email)
    if (existingUser) {
        return res.status(400).send("Email already exists")
    }

    res.status(201).send("Created user")
    users.push(req.body)
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});

