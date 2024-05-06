import { useMutation } from '@tanstack/react-query';
import api from '../api/api';
import { Notification } from '@mantine/core';
import PostForm from '../components/PostForm';
import labels from '../ulils/labels';

const CreatePost = () => {
  const { mutate: createPost } = useMutation({
    mutationFn: api.createPost,
    onSuccess() {
      return <Notification title={labels.SUCCESS}>{labels.POST_CREATED}</Notification>;
    },
  });

  return (
    <div>
      <h1>{labels.CREATE_A_NEW_POST}</h1>
      <PostForm handleSubmit={createPost} />
    </div>
  );
};
export default CreatePost;
