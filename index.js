const customExpress = require('./config/customExpress')

const app = customExpress()


app.listen(3008, () => console.log('servidor rodando'))

