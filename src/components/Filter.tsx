import { FC, useState } from 'react';
import TextField from './UI/TextField';
import NumericField from './UI/NumericField';
import Button from './UI/Button';
import { FilterData } from '../types/filterData';

interface IFilter {
    onFilter: (data: FilterData) => void;
    onReset: () => void;
}

const Filter: FC<IFilter> = ({ onFilter, onReset }) => {
    const [filterData, setFilterData] = useState<FilterData>({
        price: null,
        product: null,
        brand: null,
    });
    const [isActiveButton, setIsActiveButton] = useState(false);
    const [isFiltered, setIsFiltered] = useState(false);

    const checkFields = (data: FilterData) => {
        if (Object.values(data).some((v) => v)) {
            return true;
        }
        return false;
    };

    const handleChangeFields = (data: { [n: string]: string | number }) => {
        setFilterData((prev) => {
            setIsActiveButton(checkFields({ ...prev, ...data }));
            return { ...prev, ...data };
        });
    };

    const handleConfirm = () => {
        if (isActiveButton) {
            onFilter(filterData);
            setIsFiltered(true);
        }
    };

    const handleReset = () => {
        if (isFiltered) {
            setFilterData({
                price: null,
                product: null,
                brand: null,
            });
            onReset();
            setIsActiveButton(false);
            setIsFiltered(false);
        }
    };

    return (
        <div className='mb-3 px-1'>
            <h3 className=' mb-1 text-lg'>Фильтрация</h3>
            <div className='flex gap-4 mb-2'>
                {/* Product */}
                <TextField
                    placeholder='Введите название'
                    label='По названию'
                    onChange={handleChangeFields}
                    value={filterData.product}
                    name='product'
                />
                {/* Price */}
                <NumericField
                    placeholder='Введите точную цену'
                    label='По цене'
                    onChange={handleChangeFields}
                    value={filterData.price}
                    name='price'
                />
                {/* Brand */}
                <TextField
                    placeholder='Введите бренд'
                    label='По бренду'
                    onChange={handleChangeFields}
                    value={filterData.brand}
                    name='brand'
                />
                <div className='flex flex-col gap-2'>
                    <Button
                        type='blue'
                        onClick={handleConfirm}
                        disabled={!isActiveButton}
                    >
                        Применить
                    </Button>
                    <Button type='gray' onClick={handleReset} disabled={!isFiltered}>
                        Сброс
                    </Button>
                </div>
            </div>
            <div className='bg-gray-200 h-0.5 w-full'></div>
        </div>
    );
};

export default Filter;
