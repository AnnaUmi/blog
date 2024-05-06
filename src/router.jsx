import { createBrowserRouter } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Posts from './pages/Posts';
import Post from './pages/Post';
import  AppLayout  from './AppLayout';
import { APP_ROUTES } from './ulils/consts';

const router = createBrowserRouter([{
  path: '/',
  element: <AppLayout />,
  errorElement: <div>404</div>, // some global error component
  children: [
    {
      path: APP_ROUTES.posts,
      element: <Posts />,
    },
    {
      path: APP_ROUTES.createPost,
      element: <CreatePost />,
    },
    {
      path: `${APP_ROUTES.post}:id`,
      element: <Post />,
    },
  ],
}]);
export default router;
