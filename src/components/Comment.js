import "../styles/comment.scss"

function Comment(props){
    const{
        accountName, comment
    } = props;
    return (<div className="commentcontainer">
        <div className="accountName">{accountName}</div>
        <div className="comment">{comment}</div>
    </div>)
}

export default Comment