const Post = require('../../models/formPost');
const { createPost, getAllPosts,  } = require('../controller/formsPostController');

// Handler para obtener todas las publicaciones
const formsPostHandler = async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Handler para crear una nueva publicación
const handleCreatePost = async (req, res) => {
    try {
        const { empresa, vacantes, pago, foto, valoracion, observacion } = req.body;

        console.log('Received data:', req.body);

        // Validación de campos requeridos
        if (!empresa || vacantes === undefined || pago === undefined || valoracion === undefined) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Convertir valoracion a número si es necesario
        const valoracionNum = parseInt(valoracion, 10);

        if (isNaN(valoracionNum)) {
            return res.status(400).json({ error: 'Valoracion must be a number' });
        }

        if (valoracionNum < 1 || valoracionNum > 5) {
            return res.status(400).json({ error: 'Valoracion must be between 1 and 5' });
        }

        // Crear la nueva publicación
        const newPost = await createPost({ empresa, vacantes, pago, foto, valoracion: valoracionNum, observacion });
        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error in handleCreatePost:', error);
        res.status(500).json({ error: error.message });
    }
};

const consultId= async(req,res)=>{
    try {
        const postId =req.params.id;
        const post = await Post.findByPk(postId); //busca por id 
        if (!post){
            return res.status(404).json({message: 'Post not found'});
        }
        res.json(post);
    } catch (error) {
     console.error('Error in handlerConsultId:',error);
     res.status(500).json({error:error.message});
    }
}



module.exports = { formsPostHandler, handleCreatePost,consultId };
