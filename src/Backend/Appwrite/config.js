// File for CRUD operations on Product

import { Client, Databases, ID, Query } from "appwrite";
import conf from "../../conf/Conf";

export class Service {
  client = new Client();
  databases;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwrtieDatabaseId);

    this.databases = new Databases(this.client);
  }

  // Function to create new Product
  async createNewProduct({
    productName,
    category,
    description,
    image,
    stock,
    price,
  }) {
    try {
      return await this.databases.createDocument(
        conf.appwrtieDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(), // Unique Id for each Product
        {
          productName,
          category,
          description,
          image,
          stock,
          price,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  // Function to update a Previous Product
  async updateProduct(
    documentId,
    { productName, category, description, image, stock, price }
  ) {
    try {
      return await this.databases.updateDocument(
        conf.appwrtieDatabaseId,
        conf.appwriteCollectionId,
        documentId,
        {
          productName,
          category,
          description,
          image,
          stock,
          price,
        }
      );
    } catch (error) {
      throw error;
    }
  }

  // Function to Delete a Product
  async DeleteProduct(documentId) {
    try {
      return await this.databases.deleteDocument(
        conf.appwrtieDatabaseId,
        conf.appwriteCollectionId,
        documentId
      );
    } catch (error) {
      throw error;
    }
  }

  //Function to get an individual Product
  async getProduct(productId) {
    try {
      return await this.databases.getDocument(
        conf.appwrtieDatabaseId,
        conf.appwriteCollectionId,
        productId
      );
    } catch (error) {
      throw error;
    }
  }

  // Function to get list of all Products
  async getAllProducts(queries) {
    try {
      return await this.databases.listDocuments(
        conf.appwrtieDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      throw error;
    }
  }
}

const service = new Service();

export default service;
