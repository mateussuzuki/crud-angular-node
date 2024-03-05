const dbData = require('../dbConfig')

async function getAllCars() {
  const [rows] = await dbData.query(
    `SELECT carsModel.id, carsModel.name, carsBrand.brand, carsColor.color 
  FROM carsModel
  INNER JOIN carsBrand 
  ON carsModel.idBrand = carsBrand.id
  INNER JOIN carsColor
  ON carsModel.idColor = carsColor.id`);
  return rows
}

async function getAllCarsPagination(pag = 1, pagSize = 10) {

  const offset = (pag * pagSize) - pagSize

  const [rows] = await dbData.query(
    `SELECT carsModel.id, carsModel.name, carsBrand.brand, carsColor.color 
    FROM carsModel
    INNER JOIN carsBrand 
    ON carsModel.idBrand = carsBrand.id
    INNER JOIN carsColor
    ON carsModel.idColor = carsColor.id
    ORDER BY carsModel.id
    LIMIT ${pagSize} 
    OFFSET ${offset}`);
  return rows

}

async function getAllCarsAmount() {
  try {
    const [rows] = await dbData.query(
      `SELECT COUNT(1) as amount
       FROM carsModel`
      )
      return rows[0].amount
  } catch(error) {
    throw Error(error)
  }
}

async function addCar(data) {
  try {

    const carModel =
      `INSERT INTO carsModel (name, idBrand, idColor) 
    VALUES (?, ?, ?)`

    const rowsModel = await dbData.query(
      carModel, [data.name, data.brand, data.color]);

    return {
      rowsModel
    }

  } catch (error) {
    throw Error(error)
  }
}

async function editCar(id, edit) {
  try {
    const [car] = await dbData.query(
      `UPDATE carsModel
      SET name = ?, idBrand = ?, idColor = ? 
      WHERE id = ?`,
      [edit.name, edit.brand, edit.color, id]
    )
    return car

  } catch (error) {
    throw Error(error)
  }
}


async function deleteCar(del) {
  try {
    const [car] = await dbData.query(
      `DELETE FROM carsModel
      WHERE id = ?`, [del])
    return car

  } catch (error) {
    throw Error(error)
  }
}

module.exports = {
  getAllCars,
  addCar,
  editCar,
  deleteCar,
  getAllCarsPagination,
  getAllCarsAmount
};