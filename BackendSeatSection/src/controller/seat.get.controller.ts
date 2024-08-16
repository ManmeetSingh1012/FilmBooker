import { PrismaClient, Prisma } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient()


const get_city = async ( req:Request , res:Response) =>{
   try{

      const city = await prisma.city.findMany()
      if(city)
      {
         res.status(200).json({"city":city})
      }else{
         res.status(404).json({"message":"nothing"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}

const get_theater = async ( req:Request , res:Response) =>{
   try{

      const theater = await prisma.theater.findMany()
      if(theater)
      {
         res.status(200).json({"theater":theater})
      }else{
         res.status(404).json({"message":"nothing to show"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}


const get_screens = async ( req:Request , res:Response) =>{
   try{

      const screen = await prisma.screen.findMany()
      if(screen)
      {
         res.status(200).json({"screen":screen})
      }else{
         res.status(404).json({"message":"nothing"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}

const get_tier = async ( req:Request , res:Response) =>{
   try{

      const tier = await prisma.tier.findMany()
      if(tier)
      {
         res.status(200).json({"tier":tier})
      }else{
         res.status(404).json({"message":"nothing"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}


const get_movie = async ( req:Request , res:Response) =>{
   try{

      const movie = await prisma.movie.findMany()
      if(movie)
      {
         res.status(200).json({"movie":movie})
      }else{
         res.status(404).json({"message":"nothing found"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}


const get_screenshowtimming = async ( req:Request , res:Response) =>{
   try{

      const screenShowTiming = await prisma.screenShowTiming.findMany()
      if(screenShowTiming)
      {
         res.status(200).json({"screenShowTiming":screenShowTiming})
      }else{
         res.status(404).json({"message":"nothing"})
      }

   }catch(error)
   {
      if(error instanceof Error)
      {
         res.status(400).json({message : error.message});
      }
   }
}


export {get_city , get_movie , get_screens , get_screenshowtimming , get_theater , get_tier}