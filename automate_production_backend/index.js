import express from "express"
import cors from "cors"
import "./config/config.js"
import { stats } from "./stats.js"

const PORT = process.env.PORT || 6868

const app = express()

app.use(cors())
app.use(express.json())

app.get("/chocolatefarm/stats", (_, res) => {
	res.json(stats)
})

app.post("/chocolatefarm/chocolate", (req, res) => {
	const count = req.body.count
	stats.chocolate += count
	res.json(stats)
})

app.get("/chocolatefarm/sell", (req, res) => {
	stats.money += stats.chocolate * 10
	stats.chocolate = 0
	res.json(stats)
})

app.get("/choco", (_, res) => {
	res.end()
})

app.listen(PORT, () => console.log("Server läuft auf " + PORT))
