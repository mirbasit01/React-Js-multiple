import React, { useId } from 'react';

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId();
    return (
        <div style={{ width: '100%' }}>
            {label && <label htmlFor={id} style={{ display: 'block' }}>{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    backgroundColor: 'white',
                    color: 'black',
                    outline: 'none',
                    transition: 'background-color 0.2s',
                    border: '1px solid #e5e7eb',
                    width: '100%',
                    ...props.style
                }}
                onFocus={(e) => e.target.style.backgroundColor = '#f9fafb'}
                onBlur={(e) => e.target.style.backgroundColor = 'white'}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default React.forwardRef(Select);