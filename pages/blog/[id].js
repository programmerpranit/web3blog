import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { load } from '../../src/func';



const Blog = () => {

  const router = useRouter()
    const { id } = router.query
    const [refresh, setRefresh] = useState(true);
    const [blog, setBlog] = useState(null);
    const [contract, setContract] = useState(null);


    // const getBlog = async () => {
    //     const myBlog = await contract.Blogs(id);
    //     setBlog(myBlog);
    //     console.log(myBlog);
    // }

    const loadWeb = async () => {
      const { addressAccount, blogContract } = await load();
      setContract(blogContract);
      const myBlog = await blogContract.Blogs(0);
      setBlog(myBlog);
    }


    useEffect(() => {

        if (!refresh) return;
  
        setRefresh(false);

        loadWeb();

      });

  return (
  <>
  
  <div className="flex flex-col items-center my-10 ">

    {/* {console.log(blog['0'])} */}

    <h1 className='w-1/2 text-4xl font-bold'>{blog && blog['1']}</h1>
    <br />
    <h2 className='w-1/2 text-gray-500'>By {blog && blog['4']}</h2>
    <br />
    <p className='w-1/2'>{blog && blog['3']}</p>

  </div>
  
  </>
  )
}

export default Blog