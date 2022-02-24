import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Editor from '@/scenes/Editor'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Editor} />
      </Switch>
    </Router>
  )
}

export default Routes
