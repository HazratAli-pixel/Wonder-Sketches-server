const app = require("./app")
const config = require('./config/Config')


const port =config.app.port; 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})