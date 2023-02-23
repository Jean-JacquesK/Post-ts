export type PostProps = {
  post: {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
};

export type CommentsProps = {
  comment: {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
  };
};
