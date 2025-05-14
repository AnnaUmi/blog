import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import api from '../api/api';
import { Loader } from '@mantine/core';

const Post = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useQuery({
    queryFn: () => api.getPostById(id),
    queryKey: ['post', id],
  });
  if (isLoading) return <Loader />; // can be used loader or skeleton, or something else
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};
export default Post;
