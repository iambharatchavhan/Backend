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