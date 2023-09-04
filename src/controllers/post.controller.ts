
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getAllPosts = async function (req : any, res: any) {
    try {
      const getPosts = await prisma.post.findMany();
      res.status(200).json(getPosts);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    } finally {
      await prisma.$disconnect();
    }
  };

  const newPostingan = async function (req : any, res: any) {
    try {
        const { title, content, authorId, published } = req.body
        const newPost = await prisma.post.create({
            data: {
              title,
              content,
              authorId,
              published
            },
          });
        res.status(201).json({newPost});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });  
    } finally {
        await prisma.$disconnect();
    }
  }

  module.exports = {
    getAllPosts,
    newPostingan
  }