# Requirement(local setting)
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
# Requirement(deploy)
* Set environ value `ReadFunctionCode` to your functions(ReadDevices) key
* Set environ value `CreateFunctionCode` to your functions(CreateDevices) key