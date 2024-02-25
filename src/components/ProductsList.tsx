import { FC } from 'react';
import ProductItem from './ProductItem';
import { Product } from '../types/products';
import Loader from './UI/Loader';

interface IProductList {
    isLoading: boolean;
    products: Product[];
}

const ProductsList: FC<IProductList> = ({ isLoading, products }) => {
    return (
        <div className='grid grid-cols-autofill gap-2 mb-3'>
            {!isLoading && products?.length ? (
                products.map((p) => (
                    <ProductItem
                        key={p.id}
                        product={p.product}
                        brand={p.brand}
                        price={p.price}
                    />
                ))
            ) : isLoading ? (
                <div className='flex justify-center w-[100vw] mt-[30vh]'>
                    <Loader />
                </div>
            ) : (
                <div>Товары не найдены</div>
            )}
        </div>
    );
};

export default ProductsList;
