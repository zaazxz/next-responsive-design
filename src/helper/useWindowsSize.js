import { useEffect, useState } from "react";

const useWindowSize = () => {
  
  // State to hold the window size
  const [windowsSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  // Add event listener
  useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);

      }
  }, [])

  return windowsSize;

};

export default useWindowSize;
