const blogList = document.getElementById('blogList');
const addBlogForm = document.getElementById('addBlogForm');
const titleInput = document.getElementById('titleInput');
const bodyInput = document.getElementById('bodyInput');

// Fetch blogs from API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(blogs => fetchUsers(blogs))
  .catch(error => console.log(error));

// Fetch users from API
function fetchUsers(blogs) {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      const blogsWithUsers = addUsersToBlogs(blogs, users);
      displayBlogs(blogsWithUsers);
    })
    .catch(error => console.log(error));
}

// Add user information to blogs
function addUsersToBlogs(blogs, users) {
  return blogs.map(blog => {
    const user = users.find(user => user.id === blog.userId);
    return { ...blog, user };
  });
}

// Display blogs in UI
function displayBlogs(blogs) {
  blogList.innerHTML = '';

  blogs.forEach(blog => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${blog.title}</h3>
      <p>${blog.body}</p>
      <div class="user-info">By ${blog.user.name} (${blog.user.email})</div>
      <button onclick="deleteBlog(${blog.id})">Delete</button>
    `;
    blogList.appendChild(li);
  });
}

// Add new blog
addBlogForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const newBlog = {
    title: titleInput.value,
    body: bodyInput.value
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newBlog)
  })
    .then(response => response.json())
    .then(blog => {
      titleInput.value = '';
      bodyInput.value = '';
      fetchUsers([blog])
    })
    .catch(error => console.log(error));
});

// Delete blog
function deleteBlog(blogId) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
    method: 'DELETE'
  })
    .then(() => {
      const existingBlogs = Array.from(blogList.children).map(li => li.dataset.id);
      const updatedBlogs = existingBlogs.filter(id => id !== blogId);
      displayBlogs(updatedBlogs);
    })
    .catch(error => console.log(error));
}
