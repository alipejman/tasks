const getProductsByCategoryId = async (categoryId) => {
    try {
        const products = await Product.findAll({
            where: {
                categoryId: categoryId
            }
        });
        return products;
    } catch (error) {
        console.error("Error fetching products:", error);
    }
};
