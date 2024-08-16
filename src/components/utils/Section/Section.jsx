import React, { useEffect, useRef, useState } from 'react';
import "./Section.css"
import "animate.css";

const Section = ({children}) => {

    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting){
                    setIsVisible(true)
                    observer.disconnect();
                }
            },
            {
                threshold: 1,
            }
        )

        if (sectionRef.current){
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current){
                observer.unobserve(sectionRef.current)
            }
        }

    }, [])

    return (
        <section ref={sectionRef} className={`${isVisible ? "animate__animated animate__fadeInUp" : "notVisible"}`}>
            {children}
        </section>
    );
}

export default Section;
