import models from '../models';

const { Comment, Post } = models;

const add = async (data) => {
    let comment = await Comment.create(data.comment);
    let post = await Post.findById(data.postId);
    post.comments.push(comment._id);
    post.save();
    return comment;
}

const commentService = { add };

export default commentService;