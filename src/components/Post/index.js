import {Row, Container, PostImage, PostContent, Column, LikeButton, SendButton, CommentButton} from "./styles"
export const Post = ({ profilePic, profileName, postPhoto,postPhotoAlt, postText, postComents, }) => {
    return (
        <Container>
            <PostContent>
                <Row info={true}><img src={profilePic} alt="profile"/> <p>{profileName}</p></Row>
                <PostImage src={postPhoto} alt={postPhotoAlt} />
                <Row>
                    <LikeButton />
                    <CommentButton />
                    <SendButton />
                </Row>
                <Column>{postText}</Column>
                <Column comments={true}>{postComents}</Column>
            </PostContent>
        </Container>
    );
}
