import '../components/PostDescription';
import { Link, useRouteMatch, Switch, Route } from "react-router-dom"
import { useEffect, useState } from 'react'
import getInfo from '../services/getInfo';
import PostPage from './PostPage';


const PostDescription = () => {

  const { path, url } = useRouteMatch();
  const [info, setInfo] = useState([]);

  useEffect(()=>{
    const read = async () =>{
      const data = await getInfo();
      setInfo(data);
    }
    read();
  },[])

 const list = info.map(x => <div key={x.id}> <Link to={`${url}/${x.id}`}>{x.title}</Link>  - {x.author} - {x.publishedAt} </div> )
  
 

  return (
    <div className='postDescriptionContainer'>
      <Switch>
        <Route path={`${path}/:postId`}>
        <PostPage info ={info} />
        </Route>
        <Route path={path}>
        {list}
        </Route>
      </Switch>
      
    
    </div>
  )
}

export default PostDescription
