import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
    { label, type = 'text', className = '', ...props },
    ref
) {
    const id = useId();
    return (
        <div style={{ width: '100%' }}>
            {label && (
                <label
                    style={{ display: 'inline-block', marginBottom: '0.25rem', paddingLeft: '0.25rem' }}
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                style={{
                    padding: '0.75rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'white',
                    color: 'black',
                    outline: 'none',
                    transition: 'background-color 0.2s',
                    border: '1px solid #e5e7eb',
                    width: '100%',
                    ...className && { className }
                }}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    );
});

export default Input;