import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextareaAutosize from "react-autosize-textarea";
import FatText from "../FatText";
import Avatar from "../Avatar";
import { HeartFull, HeartEmpty, Comment as CommentIcon } from "../Icons";

const Post = styled.div``;

const Header = styled.header``;

const UserColumn = styled.div``;

const Location = styled.span``;

const Files = styled.div``;

const File = styled.div``;

const Button = styled.span``;

const Meta = styled.div``;

const Buttons = styled.div``;

const Timestamp = styled.span``;

const Textarea = styled(TextareaAutosize)``;

const Comments = styled.ul``;

const Comment = styled.li``;

const Caption = styled.div``;

export default ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  comments,
  selfComments,
  caption
}) => (
  <Post>
    <Header>
      <Avatar size="sm" url={avatar} />
      <UserColumn>
        <Link to={`/${username}`}>
          <FatText text={username} />
        </Link>
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map((file, index) => (
          <File key={file.id} src={file.url} showing={index === currentItem} />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <HeartFull /> : <HeartEmpty />}
        </Button>
        <Button>
          <CommentIcon />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      <Caption>
        <FatText text={username} /> {caption}
      </Caption>
      {comments && (
        <Comments>
          {comments.map(comment => (
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              {comment.text}
            </Comment>
          ))}
          {selfComments.map(comment => (
            <Comment key={comment.id}>
              <FatText text={comment.user.username} />
              {comment.text}
            </Comment>
          ))}
        </Comments>
      )}
      <Timestamp>{createdAt}</Timestamp>
      <Textarea
        onKeyPress={onKeyPress}
        placeholder={"Add a comment..."}
        value={newComment.value}
        onChange={newComment.onChange}
      />
    </Meta>
  </Post>
);
