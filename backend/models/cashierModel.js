import pool from "../config/db.js";

export async function cashierMenu () {
    const [rows] = await pool.query(
        "SELECT * FROM cashierproduct"
    );
    return rows;
}
//kupal
export async function cashierProductById (id) {
    const [rows] = await pool.query(
        "SELECT * FROM cashierproduct WHERE product_id = ?",
        [id]
    );
    return rows;
}
// Pogi ko

export const addToCart = async (cashier) => {
    const [rows] = await pool.query(
        `INSERT INTO cart_items (product_id, quantity, unit_price)
         SELECT product_id, ?, price FROM cashierproduct WHERE product_id = ?`,
        [cashier.quantity, cashier.id]
    );
    return rows;
}

export const updateCartItem = async (cashier) => {
    const [rows] = await pool.query(
        `UPDATE cart_items
         SET quantity = ?
         WHERE product_id = ?`,
        [cashier.quantity, cashier.id]
    );
    return rows;
};

export async function cartItems() {
    const [rows] = await pool.query(
        `SELECT ci.product_id, cp.product, cp.price, cp.imageurl AS image, SUM(ci.quantity) AS quantity
         FROM cart_items AS ci
         JOIN cashierproduct AS cp ON cp.product_id = ci.product_id
         GROUP BY ci.product_id, cp.product, cp.price, cp.imageurl
         ORDER BY ci.product_id`
    );
    return rows;
}

export async function clearCart() {
        const [rows] = await pool.query(
            "DELETE FROM cart_items"
        );
        return rows;
    }