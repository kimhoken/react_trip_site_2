import react from "react";
import useWebStore from "../Store/useWebStore";
import { useNavigate, useParams } from "react-router-dom";

export default function BoardDetail(){

    const navigate = useNavigate();
    const params = useParams();

    const {posts, loginUser, deletePost} = useWebStore();

    const id = Number(params.id);

    const post = posts.find(item => item.id === id);

    if(!post){
        return (
            <div>
                <h2>존재하지 않는 게시글입니다.</h2>
                <button onClick={() => navigate('/board')}>
                    목록으로
                </button>
            </div>
        )
    }

    const removePost = () => {
        const check = window.confirm('정말 삭제하시겠습니까?');

        if(!check){
            return;
        }

        deletePost(id);
        alert('삭제되었습니다.');
        navigate('/board');
    };

    return(
        <div>
            <h2>{post.title}</h2>

            <div>
                <p>말머리 : {post.type}</p>
                <p>작성자 : {post.writer}</p>
                <p>작성일 : {post.date}</p>
            </div>

            <hr />

            <div>
                {post.content}
            </div>

            <br />

            <button onClick={() => navigate('/board')}>
                목록으로
            </button>

            {loginUser && loginUser.name === post.writer 
            ? <button onClick={removePost}>삭제</button> 
            : null}
        </div>
    )
}