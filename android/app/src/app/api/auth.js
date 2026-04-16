// const BASE_URL = "http://192.168.1.28:8000/api";   
const BASE_URL = "http://192.168.137.1:8000/api";   

//  [http://10.0.2.2:8000/api/login] still doesnt work

let options = {
  method: 'POST',
  headers: {
    Accept: 'application/json',       
    'Content-Type': 'application/json',
  },
};

export async function authLogin({ student_id, password }) {
  console.log('API called with:', student_id);
  console.log('API called with:', password);

  const responseBody = await fetch(BASE_URL + '/login', {
    ...options,
    body: JSON.stringify({
      username: student_id,
      password: password,
    }),
  });

  const data = await responseBody.json();
  console.log(data);

  if (responseBody.status === 200) {
    return data;
  } else {
    throw new Error(data.errors.password || 'Login failed');
  }
}
