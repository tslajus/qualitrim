import React, { useState, useRef, useEffect } from "react";

interface LazyLoadingProps {
  children: React.ReactNode;
}

const LazyLoading: React.FC<LazyLoadingProps> = ({ children }) => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(ref.current!);
        }
      },
      {
        rootMargin: "0px 0px 100px 0px",
        threshold: 0.1,
      }
    );

    observer.observe(ref.current!);

    return () => {
      observer.unobserve(ref.current!);
    };
  }, []);

  return <div ref={ref}>{isIntersecting ? children : null}</div>;
};

export default LazyLoading;
