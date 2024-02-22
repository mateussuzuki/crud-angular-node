const dbData = require('../dbConfig')



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


module.exports = {
  addBrand
  
};