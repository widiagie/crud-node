# crud-node-auth

**Mari kita ngoding**

1. Ketik perintah berikut untuk inisiasi projek kita

        $ npm init

2. Install package sequelize dengan perintah berikut

        $ npm install -g npx
        $ npm install sequelize sequelize-cli mysql2

3. Buat file dengan nama .sequelizerc lalu isi dengan code seperti ini

        const path = require('path');
        module.exports = {
          'config': path.resolve('config', 'migrationConfig.js'),
          'models-path': path.resolve('database', 'models'),
          'seeders-path': path.resolve('database', 'seeders'),
          'migrations-path': path.resolve('database', 'migrations')
        };

4. Kelompokan folder models, seeders, migrations di dalam folder database dengan perintah berikut

        $ npx sequelize-cli init

5. Ubah file migrationConfig.js dan membuat sebuah file index.js di dalam folder config dengan code berikut

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

6. Command untuk generate model dan migration melalui cli dokumentasi dengan mengetikan perintah berikut di terminal

        $ npx sequelize-cli

        $ npx sequelize-cli model:generate --name Users --attributes username:string,fullname:string,email:string,password:string

        $ npx sequelize-cli model:generate --name Employe --attributes employe_name:string,employe_role:enum,employe_phone_number:string,employe_address:string

    [Dokumen link](https://sequelize.org/v5/manual/data-types.html)

7. Migrasi model atau tabel yang sudah kita generate tadi dengan perintah berikut

        $ npx sequelize-cli db:migrate

    **Contoh tabel sudah terbuat akan ada dua tabel yaitu Sequelizemeta dan Users yang sudah kita definisikan tadi ketika generate model**

8. Membuat seeder

        $ npx sequelize-cli seed:generate --name demo-user

        $ npx sequelize-cli seed:generate --name demo-employe

9. Install dahulu package password hash karena disini , digunakan untuk hasing password

        $ npm install password-hash

10. Edit file seeder yang telah dibuat diatas

        'use strict';
        const passwordHash = require('password-hash');
        module.exports = {
          up: async (queryInterface, Sequelize) => {
            const users = [];
            for (let i = 0; i < 100; i++) {
              users.push({
                username: `user${i}`,
                fullname:  `user${i}`,
                email: `user${i}@gmail.com`,
                password: passwordHash.generate(`user${i}`),
                createdAt: new Date(),
                updatedAt: new Date()
              });
            }
            return queryInterface.bulkInsert('Users', users, {});
          },
          down: async (queryInterface, Sequelize) => {
            return queryInterface.bulkDelete('Users', null, {
              truncate: true
            });
          }
        };

11. Lalu jalankan perintah npx sequelize-cli db:seed:all

        $ npx sequelize-cli db:seed:all

12. Jika ingin mengosongkan kembali tabel users kita ketikan perintah berikut

        $ npx sequelize-cli db:seed:undo:all

13. Install beberpa package untuk membuat crud restfull

        $ npm install cors dotenv helmet nodemon

14. Buat file environment dengan nama file .env di folder root projek (untuk port bebas asal no bentrok)

        # file.env
        TZ=Asia/Jakarta
        APP_PORT=7777

15. Setelah itu buat file dengan nama server.js di folder root projek

        const express = require('express')
        const app = express()
        const routes = require('./routes')
        require("dotenv").config()

        app.use(express.urlencoded({extended: true})); 
        app.use(express.json());
        app.use(routes);

        const server = app.listen(process.env.APP_PORT, () => console.log(`Api Running in Port ${process.env.APP_PORT}`))

        process.on('SIGTERM', () => {
          console.info('SIGTERM signal received.');
          console.log('Closing http server.');
          server.close(() => {
            console.log('Http server closed.');
            process.exit(0);
          });
        });