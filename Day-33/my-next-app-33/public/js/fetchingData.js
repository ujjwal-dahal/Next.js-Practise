

const fetchingData= async ()=>{
  let url = "https://jsonplaceholder.typicode.com/users"
  let response = await fetch(url)

  return response.json();

}

export default fetchingData;