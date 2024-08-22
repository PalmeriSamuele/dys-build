import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ChangeFontOption from './ChangeFontOption';
import CustomRange from './CustomRange';

const TextOptions = ({ value, setValue, spaceLetters, setSpaceLetters, setFontClass, fontClass, setTheme, theme }) => {

    const dysThemeCard = 'border border-black p-1 rounded flex justify-center items-center';

    return (
        <div className='flex flex-col gap-4 p-4'>
            <div className='flex flex-col gap-2'>
                <p className='text-sm font-[500]'>Text size</p>
                <div className='w-full flex gap-2 items-center'>
                    {value}
                    <CustomRange value={value} setValue={setValue} min={6} max={50} step={1} />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-sm'>Space between letters</p>
                <div className='w-full flex gap-2 items-center'>
                    {spaceLetters}
                    <CustomRange value={spaceLetters} setValue={setSpaceLetters} min={0} max={10} step={1} />
                </div>
            </div>
            <ChangeFontOption fontClass={fontClass} setFontClass={setFontClass} />
            <div className='flex flex-col gap-2'>
                <p className='text-sm'>Themes</p>
                <div className='grid grid-cols-3 gap-2'>
                    <button onClick={() => setTheme('bg-white text-black')} className={dysThemeCard}>{theme === 'bg-white text-black' ? <FontAwesomeIcon icon={faCheck} /> : 'Aa'}</button>
                    <button onClick={() => setTheme('bg-black text-white')} className={dysThemeCard + ' bg-black text-white'}>{theme === 'bg-black text-white' ? <FontAwesomeIcon icon={faCheck} className='text-white' /> : 'Aa'}</button>
                    <button onClick={() => setTheme('bg-gray-100')} className={dysThemeCard + ' bg-gray-100'}>{theme === 'bg-gray-100' ? <FontAwesomeIcon icon={faCheck} /> : 'Aa'}</button>
                    <button onClick={() => setTheme('bg-green-400')} className={dysThemeCard + ' bg-green-400'}>{theme === 'bg-green-400' ? <FontAwesomeIcon icon={faCheck} /> : 'Aa'}</button>
                    <button onClick={() => setTheme('bg-blue-300')} className={dysThemeCard + ' bg-blue-300'}>{theme === 'bg-blue-300' ? <FontAwesomeIcon icon={faCheck} /> : 'Aa'}</button>
                    <button onClick={() => setTheme('bg-yellow-300')} className={dysThemeCard + ' bg-yellow-300'}>{theme === 'bg-yellow-300' ? <FontAwesomeIcon icon={faCheck} /> : 'Aa'}</button>
                </div>
            </div>
        </div >)
}
export default TextOptions