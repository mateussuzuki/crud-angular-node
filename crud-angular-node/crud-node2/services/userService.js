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
    
    const [rows] = await dbData.query(
      `INSERT INTO users (login, pass) 
      VALUES ('${newData.login}','${newData.pass}')`
    )
    return true
  } catch (error) {

    return false
  }
}

async function changeData(userId, data) {
  try {

    console.log(userId, data);
    const stringQuery = 
    `UPDATE users 
    SET login = "${data.login}", pass = "${data.pass}"
    WHERE id = ${userId}`

    console.log(stringQuery);

    dbdata.query(
      stringQuery
      // `UPDATE users 
      // SET login = "${data.login}", pass = "${data.pass}"
      // WHERE id = ${userId}` 
    )

    return true

  } catch (error) { 

    return false

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