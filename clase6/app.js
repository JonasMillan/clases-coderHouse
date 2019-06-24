const Sequelize = require('sequelize')

// connect 
const connection = new Sequelize('coderHouse', 'root', '', {
    host:'localhost',
    dialect: 'mysql'
})
// test connect
connection
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

  //Modelo
const User = connection.define('user', {
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  age: {
    type: Sequelize.INTEGER
  }
});

// User
// .sync()
// .then(() => {
//     return User.create({ 
//         firstName: 'pepe',
//         lastName: 'pepasio',
//         age:42
//     })
// })
// .then(() => {
//   return User.create({ 
//       firstName: 'ana',
//       lastName: 'millan',
//       age:42
//   })
// })


// METODOS DE LOS MODELOS SON  OBJETOS TIPO PROMESAS 
// Find all users
User
.findAll()
.then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
});
  
  // Create a new user
  User.create({ firstName: "Jane", lastName: "Doe" })
  .then(jane => {
    console.log("Jane's auto-generated ID:", jane.id);
  });
  
  // // Delete everyone named "Jane"
  User.destroy({
    where: {
      firstName: "Jane"
    }
  }).then(() => {
    console.log("Done");
  });
  
  // // Change everyone without a last name to "Doe"
  User.update({ lastName: "Doe" }, {
    where: {
      lastName: null
    }
  }).then(() => {
    console.log("Done");
  });