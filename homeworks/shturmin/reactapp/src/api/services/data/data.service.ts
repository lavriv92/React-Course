import { Observable } from 'rxjs';
import { comment, post } from './data.mocks';
import { IPost } from '../../models/post';
import { IComment } from '../../models/comment';

class DataService {
  loadPost(): Observable<IPost[]> {
    return new Observable((observer) => {
      observer.next([post]);
      observer.complete();
    });
  }

  loadComments(postId: number): Observable<IComment[]> {
    return new Observable((observer) => {
      observer.next([comment]);
    });
  }
}

export const dataService = new DataService();
