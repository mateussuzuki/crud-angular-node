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


async function getAllCarsColor() {
  const [rows] = await dbData.query(
    `SELECT * FROM carsColor
    ORDER BY carsColor.id`)
  return rows
}

// async function deleteColor(del) {
//   const [rows] = await dbData.query(
//     `DELETE FROM carsColor
//     WHERE id = ?`, [del])
//   return rows
// }

async function deleteColor(del) {
  try {
    const [checkRows] = await dbData.query(
      `SELECT COUNT(*) AS count FROM carsModel WHERE idColor = ?`, [del]
    );
  
    const isColorInUse = checkRows[0].count > 0;
  
    if (isColorInUse) {
      throw new Error('Erro ao deletar essa cor, pois ela está sendo usada em algum carro');
    }
  
    const [deleteRows] = await dbData.query(
      `DELETE FROM carsColor WHERE id = ?`, [del]
    );
  
    return deleteRows;

  } catch (error) {
    throw error
  }
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
  getAllCarsBrand,
  editCar,
  deleteColor
  
};