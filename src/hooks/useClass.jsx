import { useEffect, useState } from "react";

const useClass = () => {
    const [martial, setMartial] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect( () => {
    fetch('martial.json')
    .then(res => res.json())
    .then(data => {
        setMartial(data)
        setLoading(false);
    });
  }, [])
  return [martial, loading]
};

export default useClass;