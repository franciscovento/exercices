import { Route } from "react-router-dom"


const PrivateRoute = (props) => {
  return <Route exact={props.exact} path={props.path} component={props.component
} />
}

export default PrivateRoute
