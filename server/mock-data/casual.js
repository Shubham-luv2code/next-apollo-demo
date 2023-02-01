const casual = require("casual");

// Define custom generator
casual.define("user", function () {
  return {
    uuid: casual.uuid,
    fullName: casual.full_name,
    address: casual.address,
    city: casual.city,
    country: casual.country,
    email: casual.email,
    phoneNumber: casual.phone,
  };
});

// Generate random users

const getRandomUsers = Array.from({ length: 2000 }, (_) => casual.user);
module.exports = { getRandomUsers };
