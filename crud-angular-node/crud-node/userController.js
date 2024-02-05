const connection = require ('./connection');

const getAllUsers = async () => {
  const query = await connection.execute('SELECT * FROM users')
  console.log(query);
  return query
};

const getUser = async (id) => {
  const query = await connection.execute(
    `SELECT * FROM users
     WHERE users.id = ${id}`)
  return query
}


module.exports = {
  getAllUsers,
  getUser
}