import React, { forwardRef, useImperativeHandle } from 'react'

const UseImepartiveHandle = forwardRef((props,ref) => {
    const showAlert = () => {
        alert("Hello from Child Component!");
    };

    useImperativeHandle(ref, () => ({
        showAlert, // Expose this function to the parent
    }));

    return <h2>Child Component</h2>;
})

export default UseImepartiveHandle
