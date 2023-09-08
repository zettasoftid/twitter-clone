import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express';


const prisma = new PrismaClient()

const getAllUser = async function (req:Request, res:Response) {
    try {
        const getUsers = await prisma.user.findMany();
        res.status(200).json(getUsers);
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
      } 
}

const newUsers = async function (req:Request, res : Response) {
    try {
        const { username, email, password } = req.body
        console.log('Data yang diterima:', req.body);
        const newUser = await prisma.user.create({
            data: {
              username : username,
              email : email,
              password : password,            },
          });
        res.status(201).json({message:'data created', data_info : newUser});
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });  
    } 
}

module.exports = {
    getAllUser,
    newUsers
  }