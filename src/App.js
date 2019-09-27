import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from '../src/components/userCard';
import PostCard from '../src/components/postCard';
import Comment from '../src/components/Comment';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userlist: [],
      postlist: [],
    }
  }
  componentDidMount() {
    this.getPost()
    this.getUsers()
  }
  getUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => this.setState({ userlist: response.data }))
  }
  getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then(response => response.json())
      .then(json => this.setState({ postlist: json }))
  }

  render() {
    return (
      <Router>
        <Route exact path="/" render={() => (

          <div className="user-list">
            {this.state.userlist.map(el => (<UserCard user={el} />))}
          </div>
        )} />
        <Route path="/post-list/:id" render={(props) => (
          <div className="post-list">
            {this.state.postlist.map(el => (<PostCard post={el} id={props.match.params.id} />))}
            <Comment id={props.match.params.id} />

          </div>
        )} />
      </Router>
    )
  }
}