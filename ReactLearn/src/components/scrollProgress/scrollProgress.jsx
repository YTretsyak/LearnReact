import { useState, useEffect } from 'react';
import styles from "./scrollProgress.module.css";

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<div className = {styles.topProgress} style={{ width: `${scrollProgress}%` }}></div>
    );
}