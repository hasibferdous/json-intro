function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
//steps:
//1.get the container element where you want to add the new elements
//2.Create Child element
//3.set innerText or innerHTML
//4.appendChild

function displayPosts(posts){
    
    const postsContainer = document.getElementById('post-container');
    for(const post of posts){ 
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        console.log(post);
        postDiv.innerHTML = `
        <h4>User-${post.userId}</h5>
        <h5>Title: ${post.title}</h6>
        <p>Post Description:${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);
        }
}

loadPosts();