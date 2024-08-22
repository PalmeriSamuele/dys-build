import React from 'react';

const ChangeFontOption = ({ fontClass, setFontClass }) => {

    // Handler to update the state with the selected font class
    const handleFontChange = (event) => {
        setFontClass(event.target.value);
    };

    return (
        <div className='flex flex-col gap-2'>
            <p className='text-sm'>Font</p>
            <div className="flex flex-col">
                <label>
                    <input
                        type="radio"
                        value="font-calibri"
                        checked={fontClass === 'font-calibri'}
                        onChange={handleFontChange}
                        className="mr-2"
                    />
                    <span className='font-calibri'>Calibri</span>
                </label>

                <label>
                    <input
                        type="radio"
                        value="font-sitka"
                        checked={fontClass === 'font-sitka'}
                        onChange={handleFontChange}
                        className="mr-2"
                    />
                    <span className='font-sitka'>Stika</span>
                </label>

                <label>
                    <input
                        type="radio"
                        value="font-comicsans"
                        checked={fontClass === 'font-comicsans'}
                        onChange={handleFontChange}
                        className="mr-2"
                    />
                    <span className='font-comicsans'>Comic Sans</span>
                </label>
            </div>
        </div >
    );
}

export default ChangeFontOption;
