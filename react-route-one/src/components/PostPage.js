import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";

const PostPage = ({info}) => {
const [infor, setInfor] = useState([]);
const params  = useParams();



useEffect(()=>{
let  arr = info.filter(x => x.id === Number(params.postId))
setInfor(arr);
},[params.postId, info])

let list = infor.map(x => <div key={x.id}> {x.content}  - {x.author} - {x.publishedAt} </div>)

    return (
    <div>
      Aqui van el contenido del post {params.postId} 
      {list}
      <div>
      
      </div>
      <div>
      <Link to='/post'>Volver</Link>
      </div>
      
    </div>
  )
}

export default PostPage
