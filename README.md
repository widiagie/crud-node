# crud-node
----------
## Chapter 1
**Membuat RESTful API menggunakan Node JS**

Alat dan bahan yang perlu kita siapin juga nihh, yaitu :
- Install node.js
- Postman
- Visual Studio Code

Lalu kita buka terminal yang ada di VSCode nya, terus kita ketik “npm init”

    npm init

**Install 3 package utama yaitu :**
1. express

    Package ini simplenya adalah frameworknya node js yang bakal kita gunain untuk mempermudah routing kita nanti

2. mysql

    Package ini simplenya berfungsi untuk ngejalanin query-query SQL lewat fungsi yang bakal kita buat nanti

3. body-parser

    Package ini berfungsi untuk parsing setiap request yang kita kirim lewat HTTP, mau itu lewat x-www-form-urlencoded, raw json, dan form data.

**Cara installnya, kalian tinggal ketik kode ini di terminal :**

    npm install express mysql body-parser

**Buat table dengan nama “bootcamp” dengan isian field**

    CREATE TABLE `bootcamp` (
        `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
        `name` varchar(100) NOT NULL,
        `description` varchar(255) NOT NULL,
        `website` varchar(100) NOT NULL,
        `phone` varchar(20) NOT NULL,
        `email` varchar(50) NOT NULL,
        `address` varchar(100) NOT NULL
    );