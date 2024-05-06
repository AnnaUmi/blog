import { useForm } from '@mantine/form';
import labels from '../ulils/labels';
import { TextInput, Button } from '@mantine/core';

// might be used for creating a new post and editing an existing post
const PostForm = ({ handleSubmit, post = {} }) => {
  const form = useForm({
    initialValues: {
      title: post?.title ?? '',
      body: post?.body ?? '',
    },
    validate: () => {}, // validate the form here
  });

  const onSubmit = (e) => {
    e.preventDefault();
    form.reset();
      handleSubmit(form.values);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextInput
        {...form.getInputProps('title')}
        label={labels.TITLE}
        placeholder={labels.TITLE}
      />
      <TextInput
        {...form.getInputProps('body')}
        label={labels.POST}
        placeholder={labels.POST}
      />
      <Button type="submit">{labels.CREATE_POST}</Button>
    </form>
  );
};
export default PostForm;
