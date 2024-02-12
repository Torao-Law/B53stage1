let dataBlogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;

  let dataBlog = {
    title,
    content: content,
  };

  dataBlogs.push(dataBlog);

  console.log(dataBlogs);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlogs.length; index++) {
    document.getElementById("contents").innerHTML += `
    <div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/images/blog-img.png" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Delete Post</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank"
          >${dataBlogs[index].title}</a
        >
      </h1>
      <div class="detail-blog-content">
        12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
      </div>
      <p>
      ${dataBlogs[index].content}
      </p>
    </div>
  </div>
    `;
  }
}
