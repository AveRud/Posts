const getPosts = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:3000/posts');
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            alert(xhr.status, xhr.statusText);
        } else {
            const posts = JSON.parse(xhr.responseText);
            const wrapper = document.querySelector('.post-wrapper');
            wrapper.innerHTML = '';
            posts.reverse().forEach(post => {
                const newPost = document.createElement('p');
                newPost.innerHTML = `${post.id}) ${post.author} :  ${post.title}`;

                wrapper.appendChild(newPost);
            })
        }
    }
};

const isValid = (author, title) => author && title;

const addPosts = (author, title) => {
    console.log(isValid(author, title));
    if(isValid(author, title)) {
        const xhr = new XMLHttpRequest();

        xhr.open('POST', 'http://localhost:3000/posts');
        xhr.setRequestHeader('Content-Type', "application/json");
        xhr.send(JSON.stringify({ author, title }));

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) return;
            if (xhr.status !== 201) {
                alert(`${xhr.status} : ${xhr.statusText}`);
            } else {
                console.log(xhr.responseText);
                getPosts();
            }
        }

    }

};

form.onsubmit = function (event) {
    event.preventDefault();
    console.log(author.value, title.value);
    addPosts(author.value, title.value);
};
