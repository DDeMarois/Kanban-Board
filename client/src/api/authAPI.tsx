import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    if (!response.ok) {
      const errordata = await response.json();
      throw new Error(`Error ${errordata.message}`);
    }
  
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error from user login: ', error);
    return Promise.reject('Could not fetch user info');
  }
}

export { login };
