// Create an instance of the Collection model
var collectionModel = new CollectionModel()
{
    Amount = 23,
    ReceiptId = "yourPreauthReceiptId"
};

// Send the request to Judopay as a Collection 
try {
    var collectionResult = await client.Collections.Create(collectionModel);
}
catch (Exception e) {
    throw (e);
}
