# Require
* Set environ value `BlobUrl` to your blob container url. 
* Set connection strings `DeviceStorageConnection` to your storage account's connection string.

Ex.
```json
{
  "IsEncrypted": false,
  "Values": {
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "AzureWebJobsStorage": "UseDevelopmentStorage=true",
    "BlobUrl": "https://yourstorageaccount.blob.core.windows.net/container/",
  },
  "ConnectionStrings": {
    "DeviceStorageConnection": "your storage account connection string",
  }
}
```