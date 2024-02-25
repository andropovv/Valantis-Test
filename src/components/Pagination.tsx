const Pagination = ({
    page,
    onPagination,
}: {
    page: number;
    onPagination: (page: number) => void;
}) => {
    const handlePrevPage = () => {
        if (page) {
            onPagination(page - 1);
        }
    };

    return (
        <div className='flex self-center gap-4'>
            <div
                className={page !== 0 ? 'cursor-pointer text-blue-400 italic' : ' '}
                onClick={handlePrevPage}
            >
                Предыдущая страница
            </div>
            <div className='text-gray-400'>{page}</div>
            <div
                className='cursor-pointer text-blue-400 italic'
                onClick={() => onPagination(page + 1)}
            >
                Следующая страница
            </div>
        </div>
    );
};

export default Pagination;
