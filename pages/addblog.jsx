import React, { useEffect, useState } from 'react'
import { load } from '../src/func';


const AddBlog = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState(0);
    
  const [refresh, setRefresh] = useState(true);

    // const [blogList, setBlogList] = useState([]);
    const [addressAccount, setAddressAccount] = useState(null);
    const [contract, setContract] = useState(null);

    const handleTitleChange = (e) => setTitle(e.currentTarget.value);
    const handleContentChange = (e) => setContent(e.currentTarget.value);

    const handleSaveBlog = async () => {
        contract.createBlog(title, "image", content, category, {from: addressAccount})
    }

    useEffect(() => {

      if (!refresh) return;

      setRefresh(false);

      load().then((e) => {
        setAddressAccount(e.addressAccount);
        setContract(e.blogContract);
      });
    });

  return (
    <>

    <div className='w-full flex flex-col justify-center items-center'>

    <div className="mb-4 w-6/12">
        <input type="email" id="email" name="email" value={title} className="w-full bg-white   text-4xl font-bold outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Title' onChange={handleTitleChange} />
      </div>
      <br /><br />
      <div className="mb-4 w-6/12">
       
        <textarea id="message" name="message" value={content} className="w-full bg-whitetext-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" onChange={handleContentChange} placeholder="Start Writing Your Blog" ></textarea>
      </div>
      <br /><br /><br />
      <button className='bg-black text-white rounded px-5 py-2' onClick={handleSaveBlog} >Upload Blog</button>


      </div>
    
    </>
  )
}

export default AddBlog