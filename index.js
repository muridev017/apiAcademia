const customExpress = require('./config/customExpress')

const app = customExpress()


app.listen(3006, () => console.log('servidor rodando'))

