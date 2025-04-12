import React, { useState, useRef, useEffect, Children, cloneElement } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './swiper.css';

interface SwiperProps {
    children: React.ReactNode;
    className?: string;
    slidesPerView?: number;
    spaceBetween?: number;
    navigation?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
}

export const Swiper: React.FC<SwiperProps> = ({
    children,
    className = '',
    slidesPerView = 1,
    spaceBetween = 0,
    navigation = true,
    loop = false,
    autoplay = false,
    autoplayDelay = 3000,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const slideCount = Children.count(children);

    const goToSlide = (index: number) => {
        let newIndex = index;

        if (loop) {
            if (index < 0) newIndex = slideCount - 1;
            if (index >= slideCount) newIndex = 0;
        } else {
            if (index < 0) newIndex = 0;
            if (index >= slideCount) newIndex = slideCount - 1;
        }

        setActiveIndex(newIndex);
    };

    const nextSlide = () => goToSlide(activeIndex + 1);
    const prevSlide = () => goToSlide(activeIndex - 1);

    // Handle touch events
    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) {
            nextSlide();
        }

        if (touchStart - touchEnd < -50) {
            prevSlide();
        }
    };

    // Autoplay functionality
    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (autoplay) {
            interval = setInterval(() => {
                nextSlide();
            }, autoplayDelay);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [activeIndex, autoplay]);

    // Apply styles to slides
    const slideStyle = {
        transform: `translateX(-${activeIndex * 100}%)`,
        transition: 'transform 0.3s ease-in-out',
    };
    return (
        <div
            className={`custom-swiper ${className}`}
            ref={containerRef}
        >
            <div
                className="custom-swiper-wrapper"
                style={slideStyle}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {Children.map(children, (child, index) => {
                    return cloneElement(child as React.ReactElement, {
                        style: {
                            width: `${100 / slidesPerView}%`,
                            paddingRight: index < slideCount - 1 ? `${spaceBetween}px` : 0,
                        },
                    });
                })}
            </div>

            {navigation && (
                <>
                    <button
                        className="custom-swiper-button-prev"
                        onClick={prevSlide}
                        disabled={!loop && activeIndex === 0}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        className="custom-swiper-button-next"
                        onClick={nextSlide}
                        disabled={!loop && activeIndex === slideCount - 1}
                    >
                        <ChevronRight size={24} />
                    </button>
                </>
            )}
        </div>
    );
};
