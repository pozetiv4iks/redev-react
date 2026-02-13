import { useEffect, useRef } from "react";

const withRenderTracker = (HocCOMP) => {
  return (props) => {
    const count = useRef(1);
    console.log(`отрендерен ${count.current}`);

    useEffect(() => {
      count.current += 1;
    });
    return <HocCOMP {...props} />;
  };
};

export default withRenderTracker;
