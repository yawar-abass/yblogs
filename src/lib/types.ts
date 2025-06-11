export interface PostData {
  id?: number;
  title: string;
  body: string;
  userId: number;
}

export interface Post {
  userId?: number;
  title: string;
  body: string;
}
