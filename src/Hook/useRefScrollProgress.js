import { useState, useRef, useLayoutEffect } from 'react'

export function useRefScrollProgress(inputRef) {
    const ref = useRef();
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);

    useLayoutEffect(() => {
        if (!ref.current)
            return;
        else {
            const rect = ref.current.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const offsetTop = rect.top + scrollTop;
            setStart(offsetTop / document.body.clientHeight);
            setEnd((offsetTop + rect.height) / document.body.clientHeight);
        }
    })
    return { ref, start, end }
}
