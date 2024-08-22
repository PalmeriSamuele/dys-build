import React from 'react';
import improveTextIcon from '../icons/improveText.svg';
import listIcon from '../icons/list.svg';
import settingsIcon from '../icons/settingsIcon.svg';
import TextToSpeech from './TextToSpeech';
import Tooltip from './TooltipComponent';


const DysOptions = ({ highlightedText, handleTextSettingsClick }) =>
    <>
        <p className="indyspensable-dys-option-text text-base">Choose your DYS option</p>
        <div className="indyspensable-dys-option-container">
            <div className="flex flex-col gap-10">
                <Tooltip content="This option read out loud the section selected.">
                    <TextToSpeech text={highlightedText} />
                </Tooltip>
                <Tooltip content="This option rewrite the section selected in a comprehensive way.">

                    <div className="indyspensable-option-item-card">
                        <div className="indyspensable-dys-option-item">
                            <img src={improveTextIcon} className="indyspensable-icon" alt="Simplified text icon" />
                        </div>
                        Simplified text
                    </div>
                </Tooltip>
            </div>
            <div className="flex flex-col gap-10">
                <Tooltip content="This option create a quick summary of the section selected">
                    <div className="indyspensable-option-item-card">
                        <div className="indyspensable-dys-option-item">
                            <img src={listIcon} className="indyspensable-icon" alt="Summarize icon" />
                        </div>
                        Summarize
                    </div>
                </Tooltip>
                <Tooltip content="This option let you modify the format of the text.">
                    <button onClick={handleTextSettingsClick} className="indyspensable-option-item-card">
                        <div className="indyspensable-dys-option-item">
                            <img src={settingsIcon} className="indyspensable-icon" alt="Text settings icon" />
                        </div>
                        Text settings
                    </button>
                </Tooltip>
            </div>
        </div>
    </>


export default DysOptions