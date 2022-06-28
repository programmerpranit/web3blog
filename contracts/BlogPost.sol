// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;


contract BlogPost {

    uint32 public counter;
    address public owner;

    constructor() {
        counter = 0;
        owner = msg.sender;
    }

    struct Blog {
        uint32 id;
        string title;
        string imageUri;
        string content;
        address owner;
        uint32 categoryId;
    }

    event blogCreated (
        uint32 id,
        string title,
        string imageUri,
        string content,
        address owner,
        uint32 categoryId
    );

    event blogUpdated (
        uint32 id,
        string title,
        string imageUri,
        string content,
        address owner,
        uint32 categoryId
    );

    
    function getCounter() public view returns(uint32){
        return counter;
    }

    mapping (uint32 => Blog) public Blogs;
    // mapping (address => mapping(uint32 => Blog)) UserBlogs;

    function createBlog( string memory title, string memory imageUri, string memory content, uint32 categoryId) public {

        Blog storage newBlog = Blogs[counter];
        newBlog.id = counter;
        newBlog.title = title;
        newBlog.imageUri = imageUri;
        newBlog.content = content;
        newBlog.owner = msg.sender;
        newBlog.categoryId = categoryId;

        emit blogCreated(counter, title, imageUri, content, msg.sender, categoryId);
        counter++;
    }

    function getBlog(uint32 id) public view returns ( 
        uint32, //id
        string memory, // title
        string memory, // imageUri
        string memory, // content
        address, // owner
        uint32 // categoryId
    ) {

        require(id < counter, "No Such Blogpost Exists");
        Blog memory blog = Blogs[id]; //or storage

        return (
            blog.id,
            blog.title,
            blog.imageUri,
            blog.content,
            blog.owner,
            blog.categoryId
        );

    }

    function updateBlog(uint32 id, string memory title, string memory imageUri, string memory content, uint32 categoryId) public {

        require(id < counter, "No Such Blogpost Exists");
        
        Blog storage blog = Blogs[id];

        require(blog.owner == msg.sender, "You can't update this blog as you are not the owner of this blog");
        
        blog.title = title;
        blog.imageUri = imageUri;
        blog.content = content;
        blog.owner = msg.sender;
        blog.categoryId = categoryId;
        
        emit blogUpdated(counter, title, imageUri, content, msg.sender, categoryId);
    }


}