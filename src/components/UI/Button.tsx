import { FC, ReactNode } from 'react';

interface IButton {
    children: ReactNode;
    onClick: () => void;
    type: 'blue' | 'gray';
    disabled: boolean;
}

const Button: FC<IButton> = ({ children, disabled, onClick, type }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={`px-2 py-1 rounded-sm text-sm ${
                type === 'blue' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } ${disabled && 'opacity-60'}`}
        >
            {children}
        </button>
    );
};

export default Button;
