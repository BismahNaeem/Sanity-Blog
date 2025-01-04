import { kMaxLength } from "buffer";
import { title } from "process";

export const Blog = {
    title: "blog",
    name: "blog",
    type: "document",
    fields: [

       {
        title: "title",
        name: "title",
        type: "string",
       } ,
       
       {
        title: "description",
        name: "discription",
        type: "string",
       } 
       ,
       {
        title: "blog img",
        name: "image",
        type: "image",
       } ,
     
    
    ] 

}