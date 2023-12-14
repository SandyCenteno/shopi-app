/**
 * suma de precios de los productos del carrito
 * @param {array} products 
 * @returns {number} total de precios
 */

export const totalPrice = (products) => {
    return products.reduce( (sum, product) => sum + product.price, 0)
}