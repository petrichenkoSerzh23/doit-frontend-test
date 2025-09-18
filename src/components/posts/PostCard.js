import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deletePost } from "../../store/slices/postsSlice";
import { useRouter } from "next/navigation";

export default function PostCard({ post }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDelete = () => {
    dispatch(deletePost(post.id));
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{post.title[0].toUpperCase()}</Avatar>}
        title={post.title}
        subheader={`User ${post.userId}`}
        action={
          <IconButton onClick={handleDelete} color="error">
            <DeleteIcon />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2">{post.body.slice(0, 90)}...</Typography>
      </CardContent>
      <CardActions>
       
        {
          <IconButton oonClick={() => router.push(`/posts/${post.id}`)}>
            <ArrowForwardIcon />
          </IconButton>
        }
        {/* <Button size="small" onClick={() => router.push(`/posts/${post.id}`)}>
          Перейти
        </Button> */}
      </CardActions>
    </Card>
  );
}
