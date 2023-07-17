// index.js
const express = require('express')
const connectToMongoDB = require('./src/db/connect');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');

const authUserRouter = require('./src/routes/authenticateUserRoute');
const employeesRouter = require('./src/routes/employeeRoutes');
const loginRouter = require('./src/routes/Login');
const AuthOTPRouter = require('./src/routes/OTPSendToAuthenticatedUser');
const validationRouter = require('./src/routes/validationRoutes');
const taskRouter = require('./src/routes/taskRoutes');
const skillRouter = require('./src/routes/skillsRoutes');
const statusRouter = require('./src/routes/statusRoutes');
const rolesRouter = require('./src/routes/rolesRoutes');
const permissionRouter = require('./src/routes/permissionRoutes');
const usersRouter = require('./src/routes/userRoutes');

const app = express()
const PORT = 7000

app.listen(PORT, () => {
    console.log(`API listening on PORT ${PORT} `)
})

app.route('/test-route', () => {
    console.log('LISTENING')
})

// Connect to MongoDB
// connectToMongoDB();

// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb', extended: false }));
// app.use(cookieParser());
// app.use(cors());
// app.use(bodyParser.json());

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

// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });



// Export the Express API
module.exports = app