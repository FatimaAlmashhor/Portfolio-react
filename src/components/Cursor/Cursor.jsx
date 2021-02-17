import React, { useState, useEffect } from 'react'
import classNames from 'classnames';
// import './curser.scss';
import '../../App.scss'
export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHovered, setLinkHovered] = useState(false);

    useEffect(() => {
        addEventListeners();
        handleLinkHoverEvent();
        return () => removeEventListeners();
    }, []);

    const handleLinkHoverEvent = () => {
        document.querySelectorAll("a").forEach(e => {
            e.addEventListener("mouseover", () => setLinkHovered(true))
            e.addEventListener("mouseout", () => setLinkHovered(false))
        })
    }
    const addEventListeners = () => {
        document.addEventListener('mousemove', onMouseMove);
        // document.addEventListener('mouseenter', onMouseEnter);
        // document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);
    }
    const removeEventListeners = () => {
        document.removeEventListener('mousemove', onMouseMove);
        // document.removeEventListener('mouseenter', onMouseEnter);
        // document.removeEventListener('mouseleave', onMouseLeave);
        document.removeEventListener('mousedown', onMouseDown);
        document.removeEventListener('mouseup', onMouseUp);
    }
    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }
    const onMouseEnter = (e) => {
        setHidden(true)
    }
    const onMouseLeave = (e) => {
        setHidden(false)
    }
    const onMouseDown = (e) => {
        setClicked(true)
    }
    const onMouseUp = (e) => {
        setClicked(false)
    }

    const curserClasses = classNames(
        'cursor',
        {
            'cursor--clicked': clicked,
            'cursor--hidden': hidden,
            'cursor--link-hovered': linkHovered
        }
    )
    const isMobile = () => {
        const ua = navigator.userAgent;
        return /Android|Mobi/i.test(ua);
    };
    if (typeof navigator !== 'undefined' && isMobile()) return null;
    return (
        <div className={curserClasses}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        >

        </div>
    )
}
