import { flip, offset, shift, useFloating } from '@floating-ui/react';
import React, { useCallback, useState } from 'react';

const Tooltip = ({ children, content }) => {
    const [visible, setVisible] = useState(false);

    // Floating UI logic
    const { x, y, strategy, refs } = useFloating({
        placement: 'bottom', // Default placement is below the reference element
        middleware: [
            offset(8),    // Distance between floating element and the reference element
            flip(),       // Flip the tooltip to the opposite side if it doesn't fit
            shift(),      // Ensure the tooltip stays within the viewport
        ],
    });

    // Show tooltip when mouse enters the reference element
    const handleMouseEnter = () => setVisible(true);

    // Hide tooltip when mouse leaves both reference and tooltip elements
    const handleMouseLeave = useCallback(() => {
        setVisible(false);
    }, []);

    // Ensure the tooltip hides when either element is not hovered
    const handleTooltipMouseEnter = () => setVisible(true);

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ display: 'inline-block' }}
        >
            {/* Reference element */}
            <div ref={refs.setReference}>
                {children}
            </div>

            {/* Tooltip element */}
            {visible && (
                <div
                    ref={refs.setFloating}
                    onMouseEnter={handleTooltipMouseEnter} // Keep tooltip open while hovering over tooltip
                    onMouseLeave={handleMouseLeave} // Hide tooltip when mouse leaves
                    style={{
                        position: strategy,
                        top: y ?? 0,
                        left: x ?? 0,
                        backgroundColor: '#f9f9f9', // Light background color
                        color: '#333', // Dark text color for contrast
                        padding: '8px', // Padding around the content
                        borderRadius: '4px', // Rounded corners
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow for better visibility
                        fontSize: '14px', // Slightly larger font size
                        zIndex: 1000,
                        whiteSpace: 'nowrap',  // Prevents the content from wrapping
                    }}
                    role="tooltip"
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
