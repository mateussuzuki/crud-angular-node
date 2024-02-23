const dbData = require('../dbConfig')


async function getAllCarsBrand() {
  const [rows] = await dbData.query(
    `SELECT * FROM carsBrand`)
  return rows
}

async function addBrand(data) {
  try {
    const carBrand =
      `INSERT INTO carsBrand (brand) 
      VALUES (?)`

    const rowsBrand = await dbData.query(
      carBrand, [data.brand]
      );

    return {
      rowsBrand
    }

  } catch (error) {
    throw Error(error)
  }
}

async function editBrand(id, edit) {
  try {
    const carBrand = await dbData.query(
      `UPDATE carsBrand 
      SET brand = ? 
      WHERE id = ?`,
      [edit.brand, id]
    )
  } catch(error) {

  }
}

async function deleteBrand(del) {
  try {
    const carBrand = await dbData.query(
      `DELETE FROM carsBrand 
      WHERE id = ?`, [del]
    )   

    return carBrand

  } catch(error) {
    throw error
  }
} 


module.exports = {
  addBrand,
  deleteBrand,
  getAllCarsBrand,
  editBrand
  
};