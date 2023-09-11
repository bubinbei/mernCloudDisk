import express from "express"
import mongusse from "mongoose"
import config from "config"
import authRouter from "./routes/authRouter.js"

const app = express()

const PORT = config.get('serverPort')

app.use(express.json())
app.use('/api/auth', authRouter )


const start = async () => {
  try {
    await mongusse.connect(config.get('dbUrl'))

    app.listen(PORT, () => {
      console.log('Server started on port ', PORT );
    })
  } catch (error) {
    
  }
}
start()
