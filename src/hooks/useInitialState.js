import { useState, useEffect } from 'react';

const useInitialState = (API_URL) => {
  // Maneja el estado, videos (this.state) y setVideos (this.setSatet()) pero lo nombramos como queremos
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return videos;

};

export default useInitialState;
