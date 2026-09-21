URLSearchParams

find()

// =========================
// BLOG DETAILS
// =========================

const blogDetails =
    document.getElementById("blogDetails");


// =========================
// GET ID FROM URL
// =========================

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const blogId =
    Number(urlParams.get("id"));


// =========================
// FIND BLOG
// =========================

const selectedBlog =
    blogs.find(function (blog) {

        return blog.id === blogId;

    });


// =========================
// DISPLAY BLOG
// =========================

if (blogDetails) {


    if (selectedBlog) {


        blogDetails.innerHTML = `

            <article class="blog-details-container">

                <p>
                    ${selectedBlog.category}
                </p>


                <h1>
                    ${selectedBlog.title}
                </h1>


                <div class="blog-meta">

                    By ${selectedBlog.author}

                    |

                    ${selectedBlog.date}

                </div>


                <img
                    src="${selectedBlog.image}"
                    alt="${selectedBlog.title}"
                >


                <div class="blog-content">

                    <p>
                        ${selectedBlog.content}
                    </p>

                </div>


                <a
                    href="blog.html"
                    class="btn">

                    ← Back to Blog

                </a>

            </article>

        `;

    }

    else {


        blogDetails.innerHTML = `

            <div class="invalid-blog">

                <h1>
                    Blog Not Found
                </h1>

                <p>
                    Sorry, the blog article
                    you are looking for
                    does not exist.
                </p>

                <br>

                <a
                    href="blog.html"
                    class="btn">

                    ← Back to Blog

                </a>

            </div>

        `;

    }

}