'use client'

import { useState } from 'react';

const NewTodoForm = () => {
    const [state, updateState] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission
            alert(`Entered: ${state}`);
        }
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    value={state}
                    onChange={(e) => updateState(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </form>
        </div>
    );
};

export default NewTodoForm;
