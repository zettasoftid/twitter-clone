
import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';


const prisma = new PrismaClient()

const getAllPosts = async function (req : Request, res: Response) {
  try {
    const getPosts = await prisma.post.findMany({
      include: {
        author: true, 
      },
    });
    res.render('post', { getPosts });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  } 
};


  const newPostingan = async function (req : Request, res: Response) {
    try {
        const { title, content, authorId, published } = req.body
        console.log('Data yang diterima:', req.body);
        const newPost = await prisma.post.create({
            data: {
              title : title,
              content : content,
              authorId : authorId,
              published : published
            },
          });
        // res.render('view/post.view', { newPost });
        res.status(201).json({message:'data created', data_info : newPost});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });  
    } 
  }


  module.exports = {
    getAllPosts,
    newPostingan
  }