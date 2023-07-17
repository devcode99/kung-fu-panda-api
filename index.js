// index.js
const express = require('express')
// const connectToMongoDB = require('./tmpFolder/db/connect');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const authUserRouter = require('./tmpFolder/routes/authenticateUserRoute');
// const employeesRouter = require('./tmpFolder/routes/employeeRoutes');
// const loginRouter = require('./tmpFolder/routes/Login');
// const AuthOTPRouter = require('./tmpFolder/routes/OTPSendToAuthenticatedUser');
// const validationRouter = require('./tmpFolder/routes/validationRoutes');
// const taskRouter = require('./tmpFolder/routes/taskRoutes');
// const skillRouter = require('./tmpFolder/routes/skillsRoutes');
// const statusRouter = require('./tmpFolder/routes/statusRoutes');
// const rolesRouter = require('./tmpFolder/routes/rolesRoutes');
// const permissionRouter = require('./tmpFolder/routes/permissionRoutes');
// const usersRouter = require('./tmpFolder/routes/userRoutes');
// const migrationRouter = require('./tmpFolder/routes/migrationRoutes')

const app = express()
const PORT = 7000

app.listen(PORT, () => {
    console.warn(`API listening on PORT ${PORT} `)
})

// Connect to MongoDB
// connectToMongoDB();

// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: false }));
// app.use(cookieParser());
// app.use(cors({
//     origin: '*'
// }));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('API STARTING')
})
// app.use('/', authUserRouter);
// app.use('/users', employeesRouter);
// app.use('/login', loginRouter);
// app.use('/auth', AuthOTPRouter);
// app.use('/validation', validationRouter);
// app.use('/tasks', taskRouter);
// app.use('/skills', skillRouter);
// app.use('/status', statusRouter);
// app.use('/roles', rolesRouter);
// app.use('/permissions', permissionRouter);
// app.use('/employees', usersRouter);
// app.use('/migrations', migrationRouter);
app.get('/test-route', (req, res) => {
    res.send('TEST ROUTE WORKING AS EXPECTED')
})

// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     console.warn(err, '------------------> Custom Error')
//     res.status(err.status || 500);
//     res.render('error');
// });




// Export the Express API
module.exports = app