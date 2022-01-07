//modules imported
import Express from 'express'

//app created
const app = Express()
//Port defined
const PORT = 3000

//App initiated
app.listen(PORT, () =>{
    console.log(`Server started at http://localhost:${PORT}`)
})