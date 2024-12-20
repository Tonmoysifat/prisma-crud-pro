const prisma = require("../prisma/index");

exports.createPost = async (req, res, next) => {
  try {
    const { title, slug, body } = req.body;
    const authorId = req.user.id;
    const result = await prisma.post.create({
      data: {
        title,
        slug,
        body,
        author: { connect: { id: authorId } },
      },
    });
    res.status(201).json({ success: true, post: result });
  } catch (error) {
    throw new Error(error);
  }
};
exports.updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const authorId = req.user.id;
    const result = await prisma.post.update({
      where: { id: id,authorId:authorId },
      data: {
        title,
        body,
      },
    });
    res.status(201).json({ success: true, post: result });
  } catch (error) {
    res.json({ error: error.toString() });    
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const authorId = req.user.id;
     await prisma.post.delete({
      where: { id: id,authorId:authorId },
    });
    res.status(201).json({ success: true });
  } catch (error) {
    res.json({ error: error.toString() });
  }
};

exports.myPosts = async (req, res, next) => {
  try {
    const authorId = req.user.id;
    const result = await prisma.post.findMany({
      where: { authorId: authorId },
    });
    res.status(201).json({ success: true, posts:result });
  } catch (error) {
    res.json({ error: error.toString() });
  }
};

exports.allPosts = async (req, res, next) => {
  try {
    const result = await prisma.post.findMany();
    res.status(201).json({ success: true,posts:result });
  } catch (error) {
    res.json({ error: error.toString() });
  }
};
