```js

let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;

```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->


2. Answer the following with reason:

- `user == newUser;` // true, both variable shares same memory address

- `user === newUser;`// true, both variable shares same memory address

- `user.name === newUser.name;`// true, both variable shares same memory address

- `user.name == newUser.name;` // true, both variable shares same memory address

- `user.sibling == newUser.sibling;` // true, both variable shares same memory address

- `user.sibling === newUser.sibling;` // true, both variable shares same memory address

- `user.sibling == allBrothers;` // false, both variables have diiferent memory address

- `user.sibling === allBrothers;` // false, both variables have diiferent memory address

- `brothersCopy === allBrothers;` // false, both variables have diiferent memory address

- `brothersCopy == allBrothers;`// false, both variables have diiferent memory address

- `brothersCopy == user.sibling;`// true, both variable shares same memory address

- `brothersCopy === user.sibling;`// true, both variable shares same memory address

- `brothersCopy[0] === user.sibling[0];` // true, because both values will be same

- `brothersCopy[1] === user.sibling[1];` // true, because both values will be same

- `user.sibling[1] === newUser.sibling[1];` // true, both variable shares same memory address
