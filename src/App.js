// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Header from './Components/Header';
import Post from './Components/Post';
import Posts from './Components/Posts';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      posts: [
        {
          id: '1',
          title: 'Post 1',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nisi incidunt soluta voluptatibus eos voluptate, pariatur itaque nesciunt minima doloribus praesentium',
          category: 'travel',
          urlImage: 'https://images.unsplash.com/photo-1603060196485-63cadf81a02a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
          comments: [
            {
              id: '1',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Joe Doe',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Austin Powers',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Dr. Evil',
              date: '11/6/2020'
            }
          ]
        },
        {
          id: '2',
          title: 'Post 2',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nisi incidunt soluta voluptatibus eos voluptate, pariatur itaque nesciunt minima doloribus praesentium',
          category: 'travel',
          urlImage: 'https://images.unsplash.com/photo-1430651717504-ebb9e3e6795e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          comments: [
            {
              id: '1',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Joe Doe',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Austin Powers',
              date: '11/6/2020'
            },
            {
              id: '3',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Dr. Evil',
              date: '11/6/2020'
            },
            {
              id: '4',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'James',
              date: '11/6/2020'
            }
          ]
        },
        {
          id: '3',
          title: 'Post 3',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nisi incidunt soluta voluptatibus eos voluptate, pariatur itaque nesciunt minima doloribus praesentium',
          category: 'food',
          urlImage: 'https://images.unsplash.com/photo-1604430931972-c2cd5e10004f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
          comments: [
            {
              id: '1',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Joe Doe',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Austin Powers',
              date: '11/6/2020'
            }
          ]
        },
        {
          id: '4',
          title: 'Post 4',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nisi incidunt soluta voluptatibus eos voluptate, pariatur itaque nesciunt minima doloribus praesentium',
          category: 'lifestyle',
          urlImage: 'https://images.unsplash.com/photo-1533525801715-1f3764669187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1037&q=80',
          comments: [
            {
              id: '1',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Joe Doe',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Austin Powers',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Dr. Evil',
              date: '11/6/2020'
            }
          ]
        },
        {
          id: '5',
          title: 'Post 5',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nisi incidunt soluta voluptatibus eos voluptate, pariatur itaque nesciunt minima doloribus praesentium',
          category: 'business',
          urlImage: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          comments: [
            {
              id: '1',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Joe Doe',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Austin Powers',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Dr. Evil',
              date: '11/6/2020'
            }
          ]
        },
        {
          id: '6',
          title: 'Post 6',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nisi incidunt soluta voluptatibus eos voluptate, pariatur itaque nesciunt minima doloribus praesentium',
          category: 'food',
          urlImage: 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          comments: [
            {
              id: '1',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Joe Doe',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Austin Powers',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Dr. Evil',
              date: '11/6/2020'
            }
          ]
        },
        {
          id: '7',
          title: 'Post 7',
          description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem nisi incidunt soluta voluptatibus eos voluptate, pariatur itaque nesciunt minima doloribus praesentium',
          category: 'work',
          urlImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          comments: [
            {
              id: '1',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Joe Doe',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Austin Powers',
              date: '11/6/2020'
            },
            {
              id: '2',
              descrip: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
              user: 'Dr. Evil',
              date: '11/6/2020'
            }
          ]
        }
      ],
      categories: [
        {
          id: 1,
          description: 'All',
          value: 'all'
        },
        {
          id: 2,
          description: 'Travel',
          value: 'travel'
        },
        {
          id: 3,
          description: 'Lifestyle',
          value: 'lifestyle'
        },
        {
          id: 4,
          description: 'Business',
          value: 'business'
        },
        {
          id: 5,
          description: 'Food',
          value: 'food'
        },
        {
          id: 6,
          description: 'Work',
          value: 'work'
        },
      ]
    } 
  }

  removeCharacter = (index) => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  removePost = (idPost) => {
    const {posts} = this.state;
    let aux = posts.filter((post, i) => {
      return post.id !== idPost;
    });
    this.setState({
      posts: aux
    });
  }

  handlePosts = (post) => {
    if( !post.id ) {
      if ( this.state.posts){
        post.id = (this.state.posts.length + 1).toString();
      } else  {
        post.id = '1';
      }

      const waitsecs = setTimeout(()=> {
        this.setState({posts: [...this.state.posts, post]});
      }, 500);
    } else {
      let auxPosts = this.state.posts;

      for (let index = 0; index < this.state.posts.length; index++) {
        const element = this.state.posts[index];
        if( element.id === post.id) {
          auxPosts[index] = post;
        }
        
      }
      this.setState({posts: auxPosts});
    }
    
  }

  handleCommnets = (idPost, comment) => {
    this.state.posts.forEach( postToAdd => {
      if( idPost === postToAdd.id) {
        postToAdd.comments = [...postToAdd.comments, comment];
        this.setState({posts: this.state.posts});

      }
    });
  }


  getPost = (idPost) => {
    const { posts } = this.state;
    return posts.filter((post, i) => {
      return post.id === idPost;
    });

  }

  render() {
    // const { posts, categories } = this.state;
    return (
      <div className="container Padding-0">

        <Router>
          <div className="container App-container Padding-0 mt-3">
            <Header />
            {/* <nav>
              <ul>
                <li>
                  <Link to="/">List Posts</Link>
                </li>
                <li>
                  <Link to="/post/22">Post</Link>
                </li>
              </ul>
            </nav> */}
            <Switch>
              <Route path="/" exact>
                <Posts characterData={this.state.posts} categories={this.state.categories} getPost={this.getPost}
                  removePost={this.removePost} handlePosts={this.handlePosts}/>
              </Route>
              <Route path="/post/:id">
                <Post getPost={this.getPost} handleCommnets={this.handleCommnets}/>
              </Route>

            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
