import { IPost } from '../../models/post';

export const post: IPost = {
  id: 0,
  title: 'Post Title',
  subTitle: 'Card Subtitle',
  text: 'Post text, Hi there, lets comment this text'
};

export const comment = {
  id: 0,
  postId: 0,
  header: 'First Comment title mock',
  body: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n' +
    'ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n' +
    'tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n' +
    'Donec lacinia congue felis in faucibus.',
  author: 'anonymus'
};
