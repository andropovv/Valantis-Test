import { useEffect, useState } from 'react';
import { filter, getIds, getItems } from './api/products';
import { Product } from './types/products';
import ProductsList from './components/ProductsList';
import Pagination from './components/Pagination';
import Filter from './components/Filter';
import { removeDuplicatesById } from './utils/removeDublicatesById';
import { FilterData } from './types/filterData';
import removeNullProperties from './utils/removeNullProperties';
import Footer from './components/Footer';

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(0);

    const getProductList = async (offset: number = 0, limit: number = 50) => {
        setIsLoading(true);
        const ids: string[] = await getIds(offset, limit);
        const items: Product[] = await getItems(ids);

        setProducts(removeDuplicatesById(items));
        setIsLoading(false);
    };

    const handleChangePage = async (page: number) => {
        setIsLoading(true);
        setCurrentPage(page);
        const ids: string[] = await getIds(page * 50, 50);
        const items: Product[] = await getItems(ids);
        setProducts(removeDuplicatesById(items));
        setIsLoading(false);
    };

    const handleFilterData = async (filterData: FilterData) => {
        setIsLoading(true);
        const reqData = removeNullProperties(filterData);
        const ids: string[] = await filter(reqData);
        const items: Product[] = await getItems(ids);

        setProducts(removeDuplicatesById(items));
        setIsLoading(false);
    };

    useEffect(() => {
        getProductList();
    }, []);

    return (
        <div className='App pt-4  flex flex-col min-h-[100vh]'>
            <div className='flex flex-grow flex-shrink-0 flex-col px-10 mb-10'>
                <Filter onFilter={handleFilterData} onReset={getProductList} />
                <ProductsList isLoading={isLoading} products={products} />
                {!isLoading && products.length && (
                    <Pagination page={currentPage} onPagination={handleChangePage} />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;
