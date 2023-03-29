import { ObjectId } from "mongodb";

export interface Link 
{
  _id?: ObjectId;
  title: string;
  link: string;
  timeStamp: string;
}