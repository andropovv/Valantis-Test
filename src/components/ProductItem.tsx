import React, { FC } from 'react';

interface IProductItem {
    brand: string | null;
    price: number;
    product: string;
}

const ProductItem: FC<IProductItem> = ({ brand, price, product }) => {
    return (
        <div
            className='flex w-40 h-32 rounded-sm flex-col shadow-md m-1 p-2 justify-between border
        '
        >
            <div className='text-sm'>
                {product.length > 40 ? product.slice(0, 40) + '...' : product}
            </div>
            <div className='flex justify-between flex-wrap mt-2'>
                <p className='text-gray-400 text-sm'>{price}</p>
                <p className='text-gray-400 text-sm italic'>{brand}</p>
            </div>
        </div>
    );
};

export default ProductItem;
