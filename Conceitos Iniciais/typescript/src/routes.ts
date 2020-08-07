import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(req: Request, res: Response){
  const user = createUser({
    name:'Dalto', 
    email:'daltobsu@gmail.com', 
    password:'120456',
    techs: [
      'NodeJS', 
      'React', 
      'React Native',
      {title: 'Java', experience: 90},
    ],
  });

  return res.json({message: 'Hello World'});
}