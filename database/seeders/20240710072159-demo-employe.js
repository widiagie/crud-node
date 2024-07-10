'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const employes = [];
    const ENUM_VAL = ['Engineer','HRD','Analist','Manager','Sales']
    // Fungsi untuk mendapatkan elemen acak dari array
    function getRandomElement(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      return arr[randomIndex];
    }
    for (let i = 1; i < 100; i++) {
      employes.push({
        employe_name: `My Name is Employe-X-${i}`,
        employe_role:  getRandomElement(ENUM_VAL), // Memilih nilai acak dari ENUM_VAL
        employe_phone_number: `0877887700${i}`,
        employe_address: `Employe Address Street XX-${i}`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Employes', employes, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Employes', null, {
      truncate: true
    });
  }
};