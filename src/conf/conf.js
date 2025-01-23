const conf = {
  auth0ProviderDomain: String(import.meta.env.VITE_AUTH_0_PROVIDER_DOMAIN),

  auth0ProviderClientId: String(import.meta.env.VITE_AUTH_0_PROVIDER_CLIENTID),

  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),

  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),

  appwrtieDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),

  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;