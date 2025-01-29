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

    async DeletPost(slug){
  try {
    await this.Databases.deleteDocument(
      conf.appwriteDataBaseId,
      conf.appwriteCollectionId,
      slug
    ) 
      return true
  } catch (error) {
    console.log('Appwrite Error ::DeletPost :: error',error );
    return false
  }
    }

    async getPost(slug){
        try {
            return await this.Databases.getDocument(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log('Appwrite Error ::getPost :: error',error );
            return false
       }
    }
    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.Databases.listDocuments(
                conf.appwriteDataBaseId,
                conf.appwriteCollectionId,
                queries,
                 

            )
        } catch (error) {
            console.log('Appwrite Error ::getPosts :: error',error );
            return false
        }
    }
    // file upload 
    async uploadFile(file){
        try {
            return await this.buket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
         } catch (error) {
            console.log('Appwrite Error ::uploadFile :: error',error );
            return false
        }
    }
    // file delete

     async deleteFile(fileId){
        try {
            return await this.buket.deleteFile(
                fileId
            )
            return true
        } catch (error) {
            console.log('Appwrite Error ::deleteFile :: error',error );
            return false
        }
     }
     // file preview
        getFilePreview(fileId){
            return  this.buket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        }
        
}


const service = new Service();
export default service
