import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';


const useFriendStatus = () => {
  const [filteredPosts, setFilteredPots] = useState([]);
  const posts = useSelector((store) => {
    return store.user.post;
  });

  useEffect(() => {
    setFilteredPots(posts?.filter(post => post.id > 95));
  }, [posts]);
  
  return filteredPosts;
};

export default useFriendStatus;