import React, { useEffect, useState } from 'react';
import { getIds, getItems } from './api/products';
import { Product } from './types/products';
import ProductsList from './components/ProductsList';
import Pagination from './components/Pagination';
import Filter from './components/Filter';

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(0);

    useEffect(() => {
        async function getProductList(offset: number = 0, limit: number = 50) {
            setIsLoading(true);
            const ids: string[] = await getIds(offset, limit);
            const uniqIds = Array.from(new Set(ids));
            const items: Product[] = await getItems(uniqIds);

            setProducts(items);
            setIsLoading(false);
        }

        getProductList();
    }, []);

    const handleChangePage = async (page: number) => {
        setIsLoading(true);
        setCurrentPage(page);
        const ids: string[] = await getIds(page * 50, 50);

        const uniqIds = Array.from(new Set(ids));
        const items: Product[] = await getItems(uniqIds);
        setProducts(items);
        setIsLoading(false);
    };

    return (
        <div className='App pt-4 p-10 flex flex-col'>
            <Filter />
            <ProductsList isLoading={isLoading} products={products} />
            {!isLoading && (
                <Pagination page={currentPage} onPagination={handleChangePage} />
            )}
        </div>
    );
}

export default App;
