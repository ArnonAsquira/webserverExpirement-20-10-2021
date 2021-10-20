export async function sendSignUpData (userObj){
    try {
        const response = await axios.post('http://localhost:8000/', userObj);
        alert (`welcome to the new social network ${response.data}`)
    }
    catch (error) {
      alert('something went wrong')
    }
}
