const config = require('./dbconfig');//Instanciamos el archivo dbconfig
const sql = require('mssql');//Instanciar el paquere de mssql

async function getCategoria()
{
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request().query("SELECT * FROM TM_CATEGORIA")
        return categorias.recordset;
    } catch (error) {
        console.error(error)
    }
}
async function getCategoria_x_id(cat_id)
{
    try {
        let pool = await sql.connect(config);
        let categorias = await pool.request()
        .input('input_parameter',sql.Int,cat_id)
        .query("SELECT * FROM TM_CATEGORIA Where CAT_ID = @input_parameter")
        return categorias.recordset;
    } catch (error) {
        console.error(error)
    }
}

async function insertCategoria(categoria)
{
    try {
        let pool = await sql.connect(config);
        let insertcate = await pool.request()
        .input('cat_id',sql.Int,categoria.cat_id)
        .input('cat_nombre',sql.VarChar,categoria.cat_nombre)
        .input('cat_obs',sql.VarChar,categoria.cat_obs)
        .execute("SP_I_CATEGORIA_01");
        return insertcate.recordset;
    } catch (error) {
        console.error(error)
    }
}

async function updateCategoria(categoria)
{
    try {
        let pool = await sql.connect(config);
        let updatecate = await pool.request()
        .input('cat_id',sql.Int,categoria.cat_id)
        .input('cat_nombre',sql.VarChar,categoria.cat_nombre)
        .input('cat_obs',sql.VarChar,categoria.cat_obs)
        .execute("SP_U_CATEGORIA_01");
        return updatecate.recordset;
    } catch (error) {
        console.error(error)
    }
}

async function deleteCategoria(cat_id)
{
    try {
        let pool = await sql.connect(config);
        let deletecate = await pool.request()
        .input('cat_id',sql.Int,cat_id)
        .execute("SP_D_CATEGORIA_01");
        return deletecate.recordset;
    } catch (error) {
        console.error(error)
    }
}


module.exports = 
{
    getCategoria : getCategoria,
    getCategoria_x_id : getCategoria_x_id,
    insertCategoria : insertCategoria,
    updateCategoria : updateCategoria,
    deleteCategoria : deleteCategoria
}