const pool = require('../../utils/db.connection');

const QUERIES = [
    'SELECT * FROM category',
    'SELECT * FROM category WHERE id = ?',
    'INSET INTO category SET ?',
    'UPDATE category SET ? WEHRE id = ?',
    'DELETE FROM category WHERE id = ?'
];

const findAll = async () => (await pool.query(QUERIES[0]))[0];

const findById = async id => (await pool.query(QUERIES[1], [id]))[0];

const categoryRepo = {
    findAll,
    findById
}

module.exports = categoryRepo;