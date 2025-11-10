import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isSmall: width < 640,     
    isMedium: width >= 640 && width < 1024, 
    isLarge: width >= 1024,   
  };
};
export default useScreenSize;
