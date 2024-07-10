# crud-node-auth

**Mari kita ngoding**

* 1. Ketik perintah berikut untuk inisiasi projek kita

  $ npm init

* 2. Install package sequelize dengan perintah berikut

  $ npm install -g npx
  $ npm install sequelize sequelize-cli mysql2

* 3. Buat file dengan nama .sequelizerc lalu isi dengan code seperti ini

  const path = require('path');
  module.exports = {
    'config': path.resolve('config', 'migrationConfig.js'),
    'models-path': path.resolve('database', 'models'),
    'seeders-path': path.resolve('database', 'seeders'),
    'migrations-path': path.resolve('database', 'migrations')
  };

* 4. Kelompokan folder models, seeders, migrations di dalam folder database dengan perintah berikut

  $ npx sequelize-cli init

* 5. Ubah file migrationConfig.js dan membuat sebuah file index.js di dalam folder config dengan code berikut

  // migrationConfig.js
    const config = require('./index') 
    const cfg = {}
    cfg[config.environment] = config.sequelize
    module.exports = cfg

  // index.js
    const conf = {};
    conf.environment = 'development';
    conf.sequelize = {};
    conf.sequelize.username = ''; //database username
    conf.sequelize.password = ''; //database password kosongkan jika tidak pakai password
    conf.sequelize.database = ''; //isi dengan nama database
    conf.sequelize.host = '127.0.0.1';
    conf.sequelize.dialect = 'mysql';
    conf.sequelize.port = 3306;
    conf.sequelize.define = {
    charset: 'utf8mb4',
    dialectOptions: {
    collate: 'utf8mb4_unicode_ci'
    }
    }
    conf.ROUND_SALT = 8;
    module.exports = conf;