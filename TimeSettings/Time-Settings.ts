interface User {
    name: string;
    id: number;
  }

  const user: User = {
    name: "Hayes",
    id: 0,
  };

  class UserAccount {
    name: string;
    id: number;
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
  

  function getAdminUser() {
    //...
  }
  
  function deleteUser(user: User) {
    // ...
  }