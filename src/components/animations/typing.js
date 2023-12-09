import React, { useState, useEffect } from 'react';

const TypingAnimation = (props) => {
    const message = props.message.trim(); // Trim any leading/trailing spaces
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let textIndex = 0;
        let typingInterval;

        if (isTyping) {
            typingInterval = setInterval(() => {
                setCurrentText(prevText => {
                    if (textIndex < message.length) {
                        textIndex++;
                        return message.slice(0, textIndex);
                    } else {
                        clearInterval(typingInterval);
                        setIsTyping(false);
                        return prevText;
                    }
                });
            }, 110);
        }

        return () => clearInterval(typingInterval);
    }, [isTyping, message]);

    return (
        <div className="py-5">
            <p>
                {currentText}
                {isTyping && <span className="animate-blink">...</span>}
            </p>
        </div>
    );
};

export default TypingAnimation;