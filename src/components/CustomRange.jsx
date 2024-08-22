import React from "react";
import { Range } from "react-range";

const CustomRange = ({ value, setValue, min, max, step }) => {

    return (
        <Range
            label="Select your value"
            step={step}
            min={min}
            max={max}
            values={[value]}
            onChange={(values) => setValue(values[0])}
            renderTrack={({ props, children }) => (
                <div
                    {...props}
                    style={{
                        ...props.style,
                        height: "3px",
                        width: "100%",
                        backgroundColor: "#ecb867",
                    }}
                >
                    {children}
                </div>
            )}
            renderThumb={({ props }) => (
                <div
                    {...props}
                    key={props.key}
                    style={{
                        ...props.style,
                        height: "15px",
                        width: "15px",
                        backgroundColor: "#ecb867",
                        borderRadius: "50%"
                    }}
                />
            )}
        />
    );
};

export default CustomRange