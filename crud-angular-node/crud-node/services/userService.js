const dbData = require('../dbConfig')

async function getAllUsers() {
  const [rows] = await dbData.query('SELECT * FROM usersdata');
  return rows;
}

async function getUserById(userId) {
  const [rows] = await dbData.query(
    `SELECT * FROM users 
    WHERE id = ${userId}`);
  return rows[0];
}

async function register(data) {
  try {

    const [user] = await dbData.query(
      `SELECT * FROM users 
      WHERE login = ?`, [data.login])

    if (user.length > 0) {
      return false
    }

    const insertQuery = 
    `INSERT INTO users (login, pass) 
    VALUES ('${data.login}','${data.password}')`

    const [rows] = await dbData.query(insertQuery)

    return true
  } catch (error) {
    throw Error(error);
  }
}

async function addUser(data) {
  try {
    const [user] = await dbData.query(
      `SELECT * FROM usersdata 
      WHERE username = ? OR email = ?`, [data.name, data.email])

    if (user.length > 0) {
      return false
    }

    const insertQuery = 
    `INSERT INTO usersdata (username, email) 
    VALUES (?, ?)`

    const [rows] = await dbData.query(insertQuery, [data.name, data.email])

    return true

  } catch(error) {
    throw Error(error)
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
  deleteData,
  addUser
};