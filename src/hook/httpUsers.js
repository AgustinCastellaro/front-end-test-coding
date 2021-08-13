
export function get(path, query){
    let API = "https://api.github.com/search/users?";
    console.log(path)
    console.log(query)

    if(path == "user"){
        API = "https://api.github.com/users/" + query;
    }

    if(path == "users"){
        API = API + "q=" + query + "&per_page=10";
    }
    
    console.log(API);
    return fetch(API).then(response => response.json())
}