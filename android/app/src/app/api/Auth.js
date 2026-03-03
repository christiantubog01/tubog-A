export async function userLogin({studentId, password}) {
    const BASE_URL = "http://192.168.2.7:8000/api"
    let options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    };

    const responseParams = await fetch(
        BASE_URL + '/login?student_id=${studentID}$password=&{password}',
        options,
    );

    const data = await responseParams.json();

    if (responseParams.status === 200) {
        console.log(data);
        return data;
    } else {
        throw new Error(data.error.password || 'Login failed');
    }
}