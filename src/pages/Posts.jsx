import { useQuery } from '@tanstack/react-query';
import api from '../api/api';

import { Loader } from '@mantine/core';
import labels from '../ulils/labels';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../ulils/consts';

const Posts = () => {
  // for fetching data from the server we have a lot of tools, depends the project requirements and complexity,
  // i like react-query, it caches the data, and has a lot of features, like pagination, refetching, etc.
  const { data, isLoading } = useQuery({
    queryFn: api.getPosts,
    queryKey: ['posts'],
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <h2>{labels.POSTS}</h2>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <Link to={`${APP_ROUTES.post}${post.id}`}> {post.title} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Posts;
