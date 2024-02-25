import { ChangeEvent, FC } from 'react';

interface ITextField {
    value: string | null | undefined;
    onChange: (data: { [n: string]: string }) => void;
    label: string;
    name: string;
    placeholder?: string;
}

const TextField: FC<ITextField> = ({ value, onChange, label, name, placeholder }) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({ [name]: event.target.value });
    };

    return (
        <div className='flex flex-col'>
            <label className='text-gray-400 m-1 cursor-pointer' htmlFor={name}>
                {label}
            </label>
            <input
                onChange={(e) => handleChange(e)}
                value={value || ''}
                type='text'
                id={name}
                placeholder={placeholder}
                className='border rounded-sm py-1 px-2'
            />
        </div>
    );
};

export default TextField;
