import { useEffect, useState } from "react";

const useOnline = () => {
  const [online, setOnline] = useState(false);

  const setOnlineStatus = (flag) => {
    setOnline(flag);
  };

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
  }, [online]);

  return { online, setOnlineStatus };
};

export default useOnline;
