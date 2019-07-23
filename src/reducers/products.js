const initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://imgs.viettelstore.vn/images/Product/ProductImage/medium/650532688.jpeg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2,
        name: 'Iphone 8 Plus',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/20/636808956101668511_iphone8-plus-64-vang-1.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
    },
    {
        id: 3,
        name: 'Iphone X',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114111/iphone-x-256gb-h2-400x460.png',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 5
    },

];
const products = (state = initialState, action) => {
    switch (action.type) {
        


        default:
            return state
    }
}

export default products;