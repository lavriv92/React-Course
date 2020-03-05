export default class CommentModel {
  constructor(message, author, likes) {
    this.id = Math.random().toString(16).substring(2);
    this.message = message || '';
    this.author = author || '';
    this.likes = likes || 0;
  }
}
