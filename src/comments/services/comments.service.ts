import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from '../dto/comments.create.dto';

@Injectable()
export class CommentsService {
  async getAllComments() {
    return 'hello world';
  }

  async createComment(id: string, comments: CommentsCreateDto) {
    console.log(comments);
    return 'hello world';
  }

  async plusLike(id: string) {}
}
