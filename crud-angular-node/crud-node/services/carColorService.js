const dbData = require('../dbConfig')

async function getAllCarsColor() {
  const [rows] = await dbData.query(
    `SELECT * FROM carsColor
    ORDER BY carsColor.id`)
  return rows
}

async function addColor(data) {

  const carColor = 
  `INSERT INTO carsColor(color)
    VALUE (?)`

  const [rowsColor] = await dbData.query(
    carColor, [data.color]
    );
  return rowsColor
}

async function editColor(id, edit) {
  try {
    const [editColor] = await dbData.query(
      `UPDATE carsColor
      SET color = ? 
      WHERE id = ?`,
      [edit.color, id]

    )

    return editColor

  } catch (error) {

  }
}

async function deleteColor(del) {
  try {
    const [checkRows] = await dbData.query(
      `SELECT COUNT(*) AS count FROM carsModel WHERE idColor = ?`, [del]
    );

    const [deleteRows] = await dbData.query(
      `DELETE FROM carsColor WHERE id = ?`, [del]
    );
  
    return deleteRows;

  } catch (error) {
    throw error
  }
} 




module.exports = {
  getAllCarsColor,
  addColor,
  editColor,
  deleteColor
  
};