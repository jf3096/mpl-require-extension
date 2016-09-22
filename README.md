# Please do not use it yet as it is not fully documented and not passing all unit tests!

# MPL Require Extension

[![NPM](https://nodei.co/npm/mpl-require-extension.png)](https://www.npmjs.com/package/mpl-require-extension)

A require.extensions loader for MPL which stands for **Mapping Template**
It is a NodeJS require.extension for custom file type *.mpl. 
The purpose of *.mpl represent a mapping relationship from source data structure to destination data structure.

## Installation

```shell
npm i mpl-require-extension --save-dev
```

## Scenario

Let's say if you send an api request and obtain something (**consider this as ApiModel**) as following,

```json
{
  "Usr": {
    "id": "1"
  },
  "Gender": "male"
}
```

And now your have a need to transform it to fit your client application data structure (e.g. **ViewModel**)

```json
{
  "userId": "1",
  "gender": "male"
}
```

In such case, you could create a .mpl file to represent the mapping relationship:

```text
Usr/id userId
Gender gender
```

## Specification for .mpl

1. Each row represent a mapping relationship.
2. In a row, relationship is split by whitespace in the middle. 
The left hand side of the whitespace represent the target data structure from ApiModel whereas the right hand side are the destination that will be mapped to ViewModel.
3. Slash ('/') represent going to inner structure of the data no matter it is an object or array.

```text
Usr/id userId
Gender gender
```
### How to use

At first, please make sure the extension is in used in either NodeJS environment or import it manually.

(manual import, typescript/javascript es6)
```typescript
import 'mpl-require-extension'; 
```
(manual import, javascript es5)
```javascript
require('mpl-require-extension'); 
```

Once this is setup, you can require file with .mpl extension,

```javascript
cosnt xxx = require('xxx.mpl'); 
// xxx becomes a key-value pair array of obejct
// Below is the data type.
//  xxx =>   {
//              [key: string]: string
//          }   
```

## Example

#### Example 1
**user.mpl**
```text 
Usr/id userId
Gender gender
```

```javascript 
console.log(require('./user.mpl'));
```

## Benefits
1. Since this is a text base file, therefore it extremely easy to allow other backend language to transform data base on a mapping template. 
**With assistance like webpack, it allows to transform in front end as well**.

2. My intention of the .mpl file is to upload it to internal server which can be accessed by font-end or back-end developers. 
If font-end developers make changes to their ViewModel, what they need to do is to update the specific MPL file and that's it.
**No communication cost with backend developers any more**. Same for backend developers. This makes front end and backend completely independent during the development process.

## Licensing
MIT license
