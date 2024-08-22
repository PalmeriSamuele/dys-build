import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import doubleArrowIcon from '../icons/doubleArrow.svg';
import powerIcon from '../icons/powerOff.svg';
import DysCommunityForm from './DysCommunityForm';
import DysOptions from './DysOptions';
import TextOptions from './TextOptions';
import Tooltip from './TooltipComponent';

const Widget = ({ highlightedText, setHighlightedText }) => {
    const [isOpen, setIsOpen] = useState(!!highlightedText ?? false);
    const [isWidgetOff, setIsWidgetOff] = useState(false);
    const [selectedOption, setSelectedOption] = useState('dys-options');
    const [value, setValue] = useState(16);
    const [spaceLetters, setSpaceLetters] = useState(0);
    const [fontClass, setFontClass] = useState('font-calibri');
    const [theme, setTheme] = useState('bg-white text-black');

    const handleOpenWidget = () => !isWidgetOff && setIsOpen(prev => !prev);
    const handleWidgetOff = () => setIsWidgetOff(prev => !prev);

    const handleTextSettingsClick = () => setSelectedOption("text-options")

    const minWidgetClassName = `${isWidgetOff ? 'bg-white border-gold' : 'bg-gold'}`


    useEffect(() => {
        if (!isWidgetOff && !!highlightedText)
            setIsOpen(!!highlightedText);
    }, [highlightedText])



    return (
        <div className='indyspensable-container flex'>
            <section id="indyspensable-min-widget" className="indyspensable-min-widget">
                <button onClick={handleWidgetOff} className={`indyspensable-min-widget-off ${minWidgetClassName}`} >
                    <img src={powerIcon} className="indyspensable-min-icon" alt="Power off icon" />
                </button>
                <Tooltip content="Open DYS menu">
                    <button onClick={handleOpenWidget} id="open-widget" className={`indyspensable-min-widget-open ${minWidgetClassName}`}>
                        <img src={doubleArrowIcon} className={`indyspensable-min-icon ${isOpen && 'rotate-180'}`} alt="Open widget icon" />

                        <div className="indyspensable-min-widget-text">Indyspensable</div>
                    </button>
                </Tooltip>
            </section>
            {isOpen &&
                <section className='flex'>
                    {!!highlightedText &&
                        <div className={`indyspensable-preview-box flex flex-col ${theme} border overflow-scroll`}>
                            <button onClick={() => setHighlightedText("")} className='absolute top-0 right-0 p-3'>
                                <FontAwesomeIcon icon={faClose} />
                            </button>

                            <span className={`${fontClass} text-[${value}px] tracking-[${spaceLetters}px] mt-5`}>{highlightedText}</span>
                        </div>}
                    <div id="indyspensable-widget" className="indyspensable-widget shadow-md">
                        <div className='flex flex-col'>
                            <div className='relative'>
                                <div className="flex">
                                    <button className={selectedOption === 'dys-options' ? 'indyspensable-menu-item border-b border-black text-red' : 'indyspensable-menu-item'} onClick={() => setSelectedOption('dys-options')} >DYS Options</button>
                                    <button className={selectedOption === 'text-options' ? 'indyspensable-menu-item border-b border-black' : 'indyspensable-menu-item'} onClick={() => setSelectedOption("text-options")} >Text Options</button>
                                    <button className={selectedOption === 'dys-community' ? 'indyspensable-menu-item border-b border-black' : 'indyspensable-menu-item'} onClick={() => setSelectedOption("dys-community")} >DYS Community</button>
                                </div>
                                <div>
                                    {selectedOption === 'dys-options' && (
                                        <DysOptions highlightedText={highlightedText} handleTextSettingsClick={handleTextSettingsClick} />
                                    )}
                                </div>
                                <div>
                                    {selectedOption === 'text-options' && (
                                        <TextOptions value={value} setValue={setValue} spaceLetters={spaceLetters} setSpaceLetters={setSpaceLetters} setFontClass={setFontClass} fontClass={fontClass} theme={theme} setTheme={setTheme} />
                                    )}
                                </div>
                                <div>
                                    {selectedOption === 'dys-community' && (
                                        <DysCommunityForm />)}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
        </div>
    );
}

export default Widget;
