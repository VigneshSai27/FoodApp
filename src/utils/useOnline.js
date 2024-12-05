import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(true);
  useEffect(() => {
    const onlineHandler = () => {
      setOnline(true);
    };

    const offlineHandler = () => {
      setOnline(false);
    };
    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return online;
};

export default useOnline;
