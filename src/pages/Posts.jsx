import { useQuery } from '@tanstack/react-query';
import api from "../api/api";

import { Loader} from '@mantine/core';
import labels from "../ulils/labels";

const Posts = () => {
  const { data, isLoading } = useQuery({
      queryFn: api.getPosts,
      queryKey: ['posts'],
  });

  if (isLoading) return <Loader/>

  return (
    <div>
      <h2>{labels.POSTS}</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Posts;