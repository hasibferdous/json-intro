function loadPosts(){
    console.log('loading Post data');
}

loadPosts();

function loadPosts2() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost2(data))
}

function displayPost2(posts){
    for(const post of posts){ 
    console.log(post);
    }
}
loadPosts2();