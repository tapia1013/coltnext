import axios from "axios";




// import React, { Component } from 'react';

// class Index extends Component {
//   constructor(props) {
//     super(props);

//   }

//   static async getInitialProps() {
//     console.log("FETCHING YOURR DATA INSINDE A GETINITPROP");
//   }

//   render() {
//     return (
//       <div>
//         <h1>Our Index Page!</h1>
//       </div>
//     )
//   }
// }






const Index = ({ posts }) => {
  return (
    <>
      <h1>Index Page!!!</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  )
}

Index.getInitialProps = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const { data } = res

    return { posts: data }
  } catch (error) {
    console.log('Something went wrong');
  }

}

export default Index;