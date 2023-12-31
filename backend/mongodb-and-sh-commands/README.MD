## Mongodb Commands you know to play with the database


### > show dbs
```perl

> show dbs

admin      40.00 KiB
config    108.00 KiB
local      72.00 KiB
students   72.00 KiB
test      144.00 KiB
user-app    8.00 KiB
> 


```
It will list all the databases present int the mongodb.
The show dbs command in the MongoDB shell is used to display a list of available databases. This command shows a list of all databases on the MongoDB server. **Keep in mind that some databases may not appear until they have data stored in them.**

### test> use newdatabase
```perl
test> use newdatabase
switched to db newdatabase

newdatabase> 

```
The use command in MongoDB is used to switch to a specific database.
This command is used in the MongoDB shell to **select or create a database** for subsequent operations. Replace "your_database_name" with the actual name of the database you want to use.

### test> show collections
```perl
test> show collections
profiles
users

```

The show collections command in the MongoDB shell is used to display a list of collections in the currently selected database. Collections in MongoDB are equivalent to tables in relational databases. This command shows all the collections present in the currently selected database.


###  db.createCollection('collectionName',option) 


The db.createCollection() command in MongoDB is used to explicitly create a new collection. Here's an example of how to use it:

```javascript
// Syntax: db.createCollection(name, options)
db.createCollection("data");

```
This command creates a collection named "data" in the current database. You can also provide optional configuration options as the second parameter.

### Inserting documents in Databases
Let's create a collection named "students" and insert a document using db.collectionName.insertOne() with some sample student information

```javascript
// Create a collection named "students"
db.createCollection("students");

// Insert a document into the "students" collection
db.students.insertOne({
  'name': "John Doe",
  'age': '20',
  'gender': "Male",
  'grade': "A",
  'subjects': ["Math", "English", "Science"],
  'address': {
    'street': "123 Main St",
    'city': "Anytown",
    'country': "USA"
  }
});


//

```
 let`s see whats inside our student collection
```javascript
db.students.find()
```
```javascript
[
  {
    _id: ObjectId('658ad314011e6a5d02559e27'),
    name: 'John Doe',
    age: '20',
    gender: 'Male',
    grade: 'A',
    subjects: [ 'Math', 'English', 'Science' ],
    address: { street: '123 Main St', city: 'Anytown', country: 'USA' }
  }
]

```
In this example:

The collection "students" is created using db.createCollection("students").
A document representing a student is inserted into the "students" collection using db.students.insertOne().
The document includes fields such as "name," "age," "gender," "grade," "subjects," and "address." The "subjects" field is an array, and the "address" field is an embedded document containing address information.


### inserting More than one document 
**The db.students.insertMany()** method is used to insert multiple documents into a collection in a single operation. Here's how you can use it with the same example structure:

```javascript
// Insert multiple documents into the 'students' collection
db.students.insertMany([
  {
    'name': 'Jane Smith',
    'age': 22,
    'gender': 'Female',
    'grade': 'B',
    'subjects': ['History', 'French', 'Art'],
    'address': {
      'street': '456 Oak St',
      'city': 'Anotherville',
      'country': 'USA'
    }
  },
  {
    'name': 'Bob Johnson',
    'age': 21,
    'gender': 'Male',
    'grade': 'C',
    'subjects': ['Physics', 'Chemistry', 'Math'],
    'address': {
      'street': '789 Pine St',
      'city': 'Somewhere',
      'country': 'USA'
    }
  },
  // Add more documents as needed 
]);

// 
```
lets see the data inside of students collection
```javascript
db.students.find()
```
```javascript
[
  {
    _id: ObjectId('658ad314011e6a5d02559e27'),
    name: 'John Doe',
    age: '20',
    gender: 'Male',
    grade: 'A',
    subjects: [ 'Math', 'English', 'Science' ],
    address: { street: '123 Main St', city: 'Anytown', country: 'USA' }
  },
  {
    _id: ObjectId('658ad5ac011e6a5d02559e28'),
    name: 'Jane Smith',
    age: 22,
    gender: 'Female',
    grade: 'B',
    subjects: [ 'History', 'French', 'Art' ],
    address: { street: '456 Oak St', city: 'Anotherville', country: 'USA' }
  },
  {
    _id: ObjectId('658ad5ac011e6a5d02559e29'),
    name: 'Bob Johnson',
    age: 21,
    gender: 'Male',
    grade: 'C',
    subjects: [ 'Physics', 'Chemistry', 'Math' ],
    address: { street: '789 Pine St', city: 'Somewhere', country: 'USA' }
  }
]


```

The db.students.insertMany() method is used to insert an array of documents into the "students" collection.
Each document in the array follows the same structure as the one used in the db.students.insertOne() example.
You can add as many documents to the array as needed.
Using insertMany() is more efficient than calling insertOne() multiple times, especially when inserting a large number of documents, as it reduces the number of round-trips to the database.

### `{ordered:false}`

Using `{ ordered: false }` allows MongoDB to insert as many documents as possible, even if some encounter errors. It's useful when you want to insert a batch of documents, and you're okay with MongoDB skipping over any problematic documents and continuing with the rest.

Without `{ ordered: false }` (or with { ordered: true }, which is the default), if any document in the array has an issue during insertion, the entire operation would be halted, and none of the documents would be inserted after that error line.

```javascript
//syntax you should know
db.students.insertMany([{}, {}, {}], { ordered: false })

```
## Read Operations 
The `db.collectionName.find({ key: value })` syntax in MongoDB is used to retrieve documents from a collection that match a specified condition. 

`db.collectionName`: Specifies the collection where the search will be performed. Replace "collectionName" with the actual name of your collection.

`.find({ key: value })`: The find() method is used to query documents in the collection. Inside the find() method, you provide a condition expressed as a key-value pair. This condition is used to filter documents based on the specified field and its corresponding value.

```javascript
db.student.find({'grade':'A'})
```

```javascript
[
  {
    _id: ObjectId('658ad314011e6a5d02559e27'),
    name: 'John Doe',
    age: '20',
    gender: 'Male',
    grade: 'A', // it filtered due to to this field
    subjects: [ 'Math', 'English', 'Science' ],
    address: { street: '123 Main St', city: 'Anytown', country: 'USA' }
  }
]
```

```javascript

 db.student.findOne({'gender':'male'})

```
it will only give the first document that contain field `gender:male` and skip all remain.

## Arithmetics operators in shell

### $eq => Equal to

The $eq is a query operator used in the context of querying documents based on equality. It stands for "equals" and is used to match documents where a specified field is equal to a certain value.

Here's a basic example of how you might use $eq in a MongoDB query:

```bash
db.collection.find({ field: { $eq: "value" } })
```
You can also use $eq for numeric comparisons. For instance, if you want to find students with a specific age:

```bash
db.students.find({ age: { $eq: 20 } })
```

This query would retrieve documents from the "students" collection where the "age" field is equal to 20.

```bash
[
  {
    _id: ObjectId('658ae5266058972bff93a800'),
    name: 'John Doe',
    age: 20,
    gender: 'Male',
    grade: 'A',
    subjects: [ 'Math', 'English', 'Science' ],
    address: { street: '123 Main St', city: 'Anytown', country: 'USA' }
  },
  {
    _id: ObjectId('658ae5266058972bff93a802'),
    name: 'Grace Miller',
    age: 20,
    gender: 'Female',
    grade: 'A',
    subjects: [ 'Chemistry', 'Art History', 'Math' ],
    address: { street: '555 Cedar Ave', city: 'Artsville', country: 'USA' }
  }
]

```
### $ne => Not equal to

The `$ne (not equal)` operator is used to find documents where the specified field is not equal to a particular value. Here's how you can use $ne in the context of the "students" collection:
```bash
db.students.find({ grade: { $ne: "A" } })
```
In this example, the query will return documents from the "students" collection where the "grade" field is not equal to "A". You can replace "grade" and "A" with your specific field and value.

### $lt = Less than and $gt Greater than
the `$lt` operator is used to find documents where the value of a specified field is less than (<) a given value. Here's an example using the "students" collection:

```bash
db.students.find({ age: { $lt: 25 } })
```
`$gt `(greater than) operator is used to find documents where the value of a specified field is greater than a given value. Here's an example using the "students" collection:

```bash
db.students.find({ age: { $gt: 20 } })
```


### $gte and $lte
`$gte `(greater than or equal to) and $lte (less than or equal to) operators are used for range queries. Here are examples using the "students" collection:

>Greater Than or Equal To ($gte):
```bash
db.students.find({ age: { $gte: 20 } })
```
>Less Than or Equal To ($lte):
```bash
db.students.find({ score: { $lte: 60 } })
```
This query will retrieve documents from the "students" collection where the "score" field is less than or equal to 60.

### $in and $nin
the `$in and $nin` operators are used for matching values within and outside a specified set, respectively.

**$in Operator:**

The $in operator selects documents where the value of a field equals any value in the specified array. Here's an example:
```bash
db.students.find({ grade: { $in: ["A", "B", "C"] } })
```
This query will return documents from the "students" collection where the "grade" field is equal to "A", "B", or "C".

**$nin Operator:**
The` $nin` operator selects documents where the value of a field does not equal any value in the specified array. Here's an example:
```bash
db.students.find({ grade: { $nin: ["D", "F"] } })
```
This query will return documents from the "students" collection where the "grade" field is not equal to "D" or "F".

