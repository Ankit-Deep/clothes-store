// File for CRUD operations on Product Images
import { Client, Storage, ID } from "appwrite";
import conf from "../../conf/conf";

export class FileServices {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.storage = new Storage(this.client);
  }

  // Function to upload image / create file
  async uploadImage(image) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(), // Unique file id
        image
      );
    } catch (error) {
      throw error;
    }
  }

  // Function to delete image / file
  async deleteImage(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      throw error;
    }
  }

  // Function to Preview image
  getImagePreview(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const fileService = new FileServices();

export default fileService;
