

// menuLogic.js
import { useState, useEffect } from 'react';

export const useMenuLogic = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [timer, setTimer] = useState(null);

    const handleMouseEnter = () => {
        if (!isOpen) {
            const delayTimer = setTimeout(() => {
                setIsOpen(true);
            }, 300); // 300ms delay for opening on hover (desktop)
            setTimer(delayTimer);
        }
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
        if (timer) {
            clearTimeout(timer);
        }
    };

    const toggleOpen = () => {
        setIsOpen((prev) => !prev); // Toggle state for click (mobile)
        if (timer) {
            clearTimeout(timer);
        }
    };

    useEffect(() => {
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    return {
        isOpen,
        handleMouseEnter,
        handleMouseLeave,
        toggleOpen,
    };
};

