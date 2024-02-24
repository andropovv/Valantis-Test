import { FC } from 'react';
import ProductItem from './ProductItem';
import { Product } from '../types/products';
import Loader from './Loader';

interface IProductList {
    isLoading: boolean;
    products: Product[];
}

const ProductsList: FC<IProductList> = ({ isLoading, products }) => {
    return (
        <div className='flex flex-wrap gap-1 my-0 mx-auto mb-3'>
            {!isLoading && products?.length ? (
                products.map((p) => (
                    <ProductItem
                        key={p.id}
                        product={p.product}
                        brand={p.brand}
                        price={p.price}
                    />
                ))
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default ProductsList;
