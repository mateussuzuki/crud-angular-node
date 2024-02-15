const dbData = require('../dbConfig')

async function getAllCars() {
  const [rows] = await dbData.query(
    'SELECT * FROM cars');
  return rows;
}

async function addCar(data) {
  try {
    const [car] = await dbData.query(
      `SELECT * FROM cars 
      WHERE name = ?`, [data.name])

    if (car.length > 0) {
      return false
    }

    const insertQuery = 
    `INSERT INTO cars (name) 
    VALUES (?)`

    const [rows] = await dbData.query(
      insertQuery, [data.name])

    return rows

  } catch(error) {
    throw Error(error)
  }
}

async function deleteCar(del) {
  try {
    const [car] = await dbData.query(
      `DELETE FROM cars 
      WHERE id = ?`, [del])
      return car

  } catch(error) {
    throw Error(error)
  }
}

module.exports = {
  getAllCars,
  addCar,
  deleteCar
};