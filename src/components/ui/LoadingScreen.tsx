'use client'

import { useState, useEffect } from "react";

const LoadingWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-[40vh]">
      <div className="loader">
      </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingWrapper;
