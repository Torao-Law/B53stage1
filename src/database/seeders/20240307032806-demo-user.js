"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "jhondoedev@development.com",
          password: "luwakwhitekopitidakbikinkembung",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Putri Maharani Chan",
          email: "pu-anmahrani@development.com",
          password: "hehehe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
