interface LoginCredentials {
  student_id: string;
  password: string;
}

interface LoginResponse {
    "user": string,
    "email": string,
    "roles": [],
    "token": string;
    "error"?: "Error message if login fails";
}

const BASE_URL = "http://10.202.177.159:8000/api";   

let options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',       
    'Content-Type': 'application/json',
  },
};

export async function authLogin(
  {
    student_id,
    password,
  }: {
    student_id: string;
    password: string;
  }
) {
  console.log('API called with:', student_id);
  console.log('API called with:', password);

  const responseBody = await fetch(BASE_URL + '/login', {
    ...options,
    body: JSON.stringify({
      student_id: student_id,
      password: password,
    }),
  });

  const data: LoginResponse = await responseBody.json();
  console.log(data + "<-- API response");

  if (responseBody.status === 200) {
    return data;
  } else {
    throw new Error(data?.error || 'Login failed');
  }
}
