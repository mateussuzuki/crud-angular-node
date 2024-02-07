const dbData = require('../dbConfig')

async function getAllUsers() {
  const [rows] = await dbData.query('SELECT * FROM users');
  return rows;
}

async function getUserById(userId) {
  const [rows] = await dbData.query(
    `SELECT * FROM users 
    WHERE id = ${userId}`);
  return rows[0];
}

async function register(newData) {
  try {
    const insertQuery = `INSERT INTO users (login, pass) VALUES ('${newData.login}','${newData.pass}')`
    console.log('insertQuery: ', insertQuery);
    const [rows] = await dbData.query(insertQuery)
    return true
  } catch (error) {
    throw Error(error);
  }
}

async function changeData(userId, data) {
  try {
    const stringQuery = 
    `UPDATE users 
     SET login = "${data.login}",
         pass = "${data.pass}"
     WHERE id = ${userId}`

    dbData.query(stringQuery)

    return true
  } catch (error) {
    throw Error(error);
  }
}

async function deleteData(userId) {
  await dbData.query(
    `DELETE FROM users 
    WHERE id = ${userId}`
  )
}

module.exports = {
  getAllUsers,
  getUserById,
  register,
  changeData,
  deleteData
};