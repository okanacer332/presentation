import React, { useState, useEffect, useRef } from 'react';

const ScaleWrapper = ({ children, targetWidth = 1280, targetHeight = 800 }) => {
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const parent = containerRef.current.parentElement;
                if (parent) {
                    const availableWidth = parent.clientWidth;
                    const availableHeight = parent.clientHeight;

                    // Add some padding/safe margin calculation if needed
                    const scaleX = availableWidth / targetWidth;
                    const scaleY = availableHeight / targetHeight;

                    // Use the smaller scale factor to ensure it fits both width and height (contain)
                    // Or prioritize width for mobile readability if strict aspect ratio isn't required.
                    // For a "Presentation" feel, "contain" is usually best.

                    // mobile optimization: On portrait phones, we might want to change the target logic
                    // logic: if screen is portrait, maybe target a different base dimension or just scale to width?
                    // But user demanded "4 slides compact same length". fitting to height is crucial.

                    const newScale = Math.min(scaleX, scaleY, 1); // Never scale UP above 1x on huge screens? Maybe. Let's stick to fitting.

                    // Actually, for mobile portrait, 1280x800 is a bad target aspect ratio. 
                    // We should probably have a "Mobile Target" (e.g. 390x844) vs "Desktop Target".
                    const isPortrait = availableHeight > availableWidth;

                    let effectiveScale;
                    if (isPortrait) {
                        // On mobile, we want to fit the width mostly, but ensure height doesn't overflow container.
                        // Let's assume the content design is responsive-ish but we just want to ensure NO overflow.
                        // We will scale it ensuring it fits within the box.
                        effectiveScale = Math.min(availableWidth / (targetWidth / 2.5), availableHeight / targetHeight);
                        // Note: The content itself (HeroSlide) is responsive. 
                        // The issue is "overflow" and "cutting off".
                        // A better approach for this specific user request might be:
                        // Just simply scale down if the content height exceeds the container height.
                    } else {
                        effectiveScale = Math.min(scaleX, scaleY);
                    }

                    setScale(effectiveScale);
                }
            }
        };

        handleResize(); // Initial calc
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [targetWidth, targetHeight]);

    // Simple robust solution: Just scale the entire app container to fit window if it overflows
    // But since our components use Tailwind responsive classes (md:...), we want those to trigger FIRST.
    // The scale should only happen if things STILL don't fit.

    // REVISED STRATEGY based on user "iPhone 13" feedback:
    // The user wants the content to FIT. 
    // I will implementation a logic that measures the content size and scales it down if it's larger than the viewport.

    return (
        <div
            ref={containerRef}
            className="w-full h-full flex items-center justify-center overflow-hidden"
        >
            <div
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'center center',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {children}
            </div>
        </div>
    );
};

// simpler strictly CSS approach might be better?
// No, JS is needed for dynamic precise 'contain' logic across devices.
// Let's try a simpler 'FitText' style approach but for the whole slide.

export const FitToViewport = ({ children }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const calculateScale = () => {
            if (!containerRef.current || !contentRef.current) return;

            const container = containerRef.current;
            const content = contentRef.current;

            // Reset scale to measure true size
            content.style.transform = 'scale(1)';

            const cw = container.clientWidth;
            const ch = container.clientHeight;
            const ow = content.scrollWidth;
            const oh = content.scrollHeight;

            // If content is larger than container, scale down
            // We prioritize seeing EVERYTHING.
            const scaleWidth = cw / ow;
            const scaleHeight = ch / oh;

            const newScale = Math.min(scaleWidth, scaleHeight, 1);
            setScale(newScale);
        };

        const observer = new ResizeObserver(calculateScale);
        if (containerRef.current) observer.observe(containerRef.current);

        window.addEventListener('resize', calculateScale);
        // Delay initial call to let layout settle
        setTimeout(calculateScale, 100);

        return () => {
            window.removeEventListener('resize', calculateScale);
            observer.disconnect();
        };
    }, [children]);

    return (
        <div ref={containerRef} className="w-full h-full relative overflow-hidden flex items-center justify-center">
            <div
                ref={contentRef}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'center center',
                    width: '100%', // Allow it to take height naturally, then we clamp it
                    // height: '100%' 
                }}
                className="flex flex-col items-center justify-center"
            >
                {children}
            </div>
        </div>
    );
};

export default FitToViewport;
