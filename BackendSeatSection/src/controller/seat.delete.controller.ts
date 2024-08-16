import { PrismaClient, Prisma } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient()


const delete_city = async ( req:Request , res:Response) =>{


   try{

      const {id} = req.body;

      const check_city = await prisma.city.findFirst({
         where :{
            city_id : id
         }
      })

      if(!check_city)
      {
         res.status(404).json({"message":"city does not found or the id is wrong"})
      }

      const city = await prisma.city.delete({
         where :{
            city_id : id
         }
      })

      if(city)
      {
         res.status(200).json({"message":"city deleted successfully"})
      }else{
         res.status(400).json({"message":"Something Went Wrong"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}

const delete_theater = async ( req:Request , res:Response) =>{
   try{

      const {id} = req.body;

      const check_theater = await prisma.theater.findFirst({
         where :{
            city_id : id
         }
      })

      if(!check_theater)
      {
         res.status(404).json({"message":"theater does not found or the id is wrong"})
      }

      const theater = await prisma.theater.delete({
         where :{
            theater_id: id
         }
      })

      if(theater)
      {
         res.status(200).json({"message":"theater deleted successfully"})
      }else{
         res.status(400).json({"message":"Something Went Wrong"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}


const delete_screens = async ( req:Request , res:Response) =>{
   try{

      const {id} = req.body;

      const check_screen = await prisma.screen.findFirst({
         where :{
            theater_id : id
         }
      })

      if( check_screen)
      {
         res.status(404).json({"message":"screen does not found or the id is wrong"})
      }

      const screens = await prisma.screen.delete({
         where :{
            screen_id: id
         }
      })

      if(screens)
      {
         res.status(200).json({"message":"screen deleted successfully"})
      }else{
         res.status(400).json({"message":"Something Went Wrong"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}


const delete_tier = async ( req:Request , res:Response) =>{
   try{

      const {id} = req.body;

      const check_tier = await prisma.tier.findFirst({
         where :{
            tier_id : id
         }
      })

      if( check_tier)
      {
         res.status(404).json({"message":"tier does not found or the id is wrong"})
      }

      const screens = await prisma.tier.delete({
         where :{
            tier_id: id
         }
      })

      if(screens)
      {
         res.status(200).json({"message":"tier deleted successfully"})
      }else{
         res.status(400).json({"message":"Something Went Wrong"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}


const delete_movie = async ( req:Request , res:Response) =>{
   try{

      const {id} = req.body;

      const check_movie = await prisma.movie.findFirst({
         where :{
            movie_id : id
         }
      })

      if( check_movie)
      {
         res.status(404).json({"message":"movie does not found or the id is wrong"})
      }

      const screens = await prisma.movie.delete({
         where :{
            movie_id : id
         }
      })

      if(screens)
      {
         res.status(200).json({"message":"movie deleted successfully"})
      }else{
         res.status(400).json({"message":"Something Went Wrong"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}


const delete_screenshowtimming = async ( req:Request , res:Response) =>{
   try{

      const {id} = req.body;

      const screenShowTiming = await prisma.screenShowTiming.findFirst({
         where :{
            screen_show_id : id
         }
      })

      if( screenShowTiming)
      {
         res.status(404).json({"message":"screen show timming does not found or the id is wrong"})
      }

      const screens = await prisma.screenShowTiming.delete({
         where :{
            screen_show_id: id
         }
      })

      if(screens)
      {
         res.status(200).json({"message":"screen show timming deleted successfully"})
      }else{
         res.status(400).json({"message":"Something Went Wrong"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}


export {delete_city , delete_movie , delete_screens, delete_screenshowtimming , delete_theater , delete_tier }