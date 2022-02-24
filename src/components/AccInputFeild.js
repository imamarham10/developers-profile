import React from 'react';
import './AccInputFeild.css';

const AccInputFeild = ({ value, setValue, image, error, isRequired, label }) => {
    return (
        <>
            <div className = "icon-content">
                <img src={image} className="icon-image" alt={label} />
                <div>{label}{isRequired && <span>*</span>}</div>
            </div>
            <div>
                <input className = "input-feild" type ='text' value = {value} onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className="error-content">
                {error}
            </div>
        </>

    );
}

export default AccInputFeild;