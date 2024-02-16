const dbData = require('../dbConfig')

async function getAllCars() {
  const [rows] = await dbData.query(
    `SELECT carsModel.name, carsBrand.brand, carsColor.color 
    FROM carsModel 
    INNER JOIN carsBrand 
    ON carsModel.id = carsBrand.id 
    INNER JOIN carsColor 
    ON carsBrand.id = carsColor.id`);
  return rows
}

async function addCar(data) {
  try {
    // const [car] = await dbData.query(
    //   `SELECT * FROM cars 
    //   WHERE name = ?`, [data.name])

    // if (car.length > 0) {
    //   return false
    // }

    const carModel =
      `INSERT INTO carsModel (name) 
    VALUES (?)`

    const carBrand =
      `INSERT INTO carsBrand (brand) 
    VALUES (?)`

    const carColor =
      `INSERT INTO carsColor (color) 
    VALUES (?)`

    const rowsModel = await dbData.query(
      carModel, [data.name]);

    const rowsBrand = await dbData.query(
      carBrand, [data.brand]);

    const rowsColor = await dbData.query(
      carColor, [data.color]);

    return rowsModel, rowsBrand, rowsColor

  } catch (error) {
    throw Error(error)
  }
}

async function deleteCar(del) {
  try {
    const [car] = await dbData.query(
      `DELETE FROM cars 
      WHERE id = ?`, [del])
    return car

  } catch (error) {
    throw Error(error)
  }
}

async function getAllCarsColor() {
  const [rows] = await dbData.query(
    `SELECT * FROM carsColor`)
  return rows
}

async function getAllCarsBrand() {
  const [rows] = await dbData.query(
    `SELECT * FROM carsBrand`)
  return rows
}

module.exports = {
  getAllCars,
  addCar,
  deleteCar,
  getAllCarsColor,
  getAllCarsBrand
};