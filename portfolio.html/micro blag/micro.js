document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postContent = document.getElementById('postContent').value;
    if (postContent.trim() !== "") {
        addPost(postContent);
        document.getElementById('postContent').value = ""; // Clear the input
    }
});

function addPost(content) {
    const postsContainer = document.getElementById('postsContainer');
    
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.textContent = content;

    postsContainer.prepend(postElement); // Add new post at the top
}
