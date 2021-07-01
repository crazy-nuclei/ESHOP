const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app = express();

app.get('/', (req, res) => {
    res.send('API running ...');
})

app.use(express.json({ extended: false }));


app.use('/api/products', require('./routes/product'));
app.use('/api/users', require('./routes/user'));

app.use(require('./middleware/error').notFound);

app.use(require('./middleware/error').errorHandler);

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})




