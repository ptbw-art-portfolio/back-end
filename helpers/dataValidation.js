module.exports = {
    validatePosts,
    validateUsers
}

function validatePosts(req, res, next) {
    const { 
        title,
        description,
        medium, 
        image_url,
        user_id } = req.body;

    if (title && description && medium && image_url && user_id){
        next();
    } else {
        res.status(400).json({message: "Missing required fields."})
    }
};

function validateUsers(req, res) {
    
}