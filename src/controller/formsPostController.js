const Post = require('../../models/formPost');

// Función para crear una publicación
const createPost = async (postDetails) => {
    try {
        console.log('Creating post with details:', postDetails);
        const post = await Post.create(postDetails);
        return post;
    } catch (error) {
        console.error('Error in createPost:', error);
        throw new Error('Error creating post');
    }
};

// Función para obtener todas las publicaciones
const getAllPosts = async () => {
    try {
        return await Post.findAll();
    } catch (error) {
        throw new Error('Error fetching posts');
    }
};



module.exports = { createPost, getAllPosts, };
