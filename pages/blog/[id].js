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

    {/* {console.log(blog['0'])}  */}

    <h1 className='w-1/2 text-4xl font-bold'>{blog && blog['1']}</h1>
    <br />
    <h2 className='w-1/2 text-gray-500'>By {blog && blog['4']}</h2>
    <br />
    <p className='w-1/2'>{blog && blog['3']}</p>

  </div>

{/* <section className="text-gray-700  body-font">
    <div className="container px-5 py-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <div className="rounded-lg h-64 overflow-hidden">
        </div>
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center  text-gray-600">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4  text-lg">{blog && blog['4']}</h2>
              <div className="w-12 h-1 bg-purple-500 rounded mt-2 mb-4"></div>
              <p className="text-base text-gray-400"></p>
            </div>
          </div>
          <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <p className="leading-relaxed text-lg mb-4">{blog && blog['3']}</p>
            
          </div>
        </div>
      </div>
    </div>
  </section> */}



  
  </>
  )
}

export default Blog