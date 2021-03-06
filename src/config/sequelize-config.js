const env = process.env.NODE_ENV || 'development';
const Sequelize = require('sequelize');
const config = require('./config.json')[env];
let sequelize;
if (config.use_env_variable && config.use_env_variable in process.env) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

module.exports = {
    'sequelize': sequelize,
    'datatype': Sequelize.DataTypes
};