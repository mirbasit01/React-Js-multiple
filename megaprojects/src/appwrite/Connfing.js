import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    Client = new Client();
    Databases;
    buket;


    constructor(){
        this.Client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            this.Databases = new Databases(this.Client)
            this.buket = new Storage(this.Client)
         
    }
    async creatPost({
            title, slug, content, featuredImage, status, userId
    }){
        try {
            return await this.Databases.createDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                 slug,
                 {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId
                 }
            )
            
        } catch (error) {
            console.log('Appwrite Error ::createPost :: error',error );
        }
    }

    async updataPost(slug, {
        title,content, featuredImage, status
    }){
         try {
            return await this.Databases.updateDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
         } catch (error) {
            console.log('Appwrite Error ::updataPost :: error',error );
         }
    }
}


const service = new Service();
export default service
