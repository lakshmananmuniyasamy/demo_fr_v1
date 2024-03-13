import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const Songs = () => {
  

  const [posts, SetPosts] = useState();

  const fetchData = () => {
    axios.get("http://localhost:8080/file/getfile")
      .then((res) => {
        Object.keys(res.data).forEach(key => {
          console.log(key, res.data[key]);
          console.log("===img==" + res.data[key].image);

        });
        SetPosts(res.data);

        // console.log("===Response==="+res.data.value);

      })
      .catch((err) => {
        console.log("error", err);
      })
  };
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      <h1 className='text-center'>Play List</h1>
      <div className="container">
        <div className='row'>
          {Array.isArray(posts) && posts.map((post) => (
            <div className="card m-2" key={post.id} style={{ width: "14rem" ,height:"20rem"}}>
              <img src={`http://localhost:8080/uploads/${post.image}`} className="card-img-top" style={{ height: "150px" }} alt='songimage' />
              <div className='card-body'>
                <p>song name: <b style={{fontSize:"larger"}}>{post.songName}</b></p>
                <p>song name: <b style={{fontSize:"larger"}}>{post.language}</b></p>
                <p>song name: <b style={{fontSize:"larger"}}>{post.artistName}</b></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
