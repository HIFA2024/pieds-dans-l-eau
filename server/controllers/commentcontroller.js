const {Comment} = require('../database/sequelize');


exports.addComment = async (req, res) => {
    const x = req.body; // Ensure you send blogId, content, and author from the frontend

    if (!x) {
        return res.status(400).json({ message: 'Blog ID, content, and author are required' });
    }

    try {
        const newComment = await Comment.create(x);
        res.status(201).json({ comment: newComment });
    } catch (error) {
        res.status(500).json({ message: 'Error adding comment', error: error.message });
    }
};

exports.getAllComments = async (req, res) => {
    const  blogId  = req.params.id;

    if (!blogId) {
        return res.status(400).json({ message: 'Blog ID is required' });
    }

    try {
        const comments = await Comment.findAll({ where: { blogId: blogId } });
        res.status(200).json({ comments });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving comments', error: error.message });
    }
};