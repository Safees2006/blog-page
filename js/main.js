// =========================
// MOBILE MENU
// =========================

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}


// =========================
// LATEST BLOGS
// =========================

const latestBlogs =
    document.getElementById("latestBlogs");


if (latestBlogs) {

    const latest =
        blogs.slice(0, 6);


    latestBlogs.innerHTML =
        latest.map(function (blog) {

            return `

                <article class="blog-card">

                    <img
                        src="${blog.image}"
                        alt="${blog.title}"
                    >

                    <div class="blog-card-content">

                        <p>
                            ${blog.category}
                        </p>

                        <h3>
                            ${blog.title}
                        </h3>

                        <p>
                            ${blog.description}
                        </p>

                        <small>
                            By ${blog.author}
                            |
                            ${blog.date}
                        </small>

                        <br>

                        <a
                            href="blog-details.html?id=${blog.id}"
                            class="btn">

                            Read More

                        </a>

                    </div>

                </article>

            `;

        }).join("");

}


// =========================
// FEATURED BLOG
// =========================

const featuredBlog =
    document.getElementById("featuredBlog");


if (featuredBlog) {

    const featured =
        blogs[0];


    featuredBlog.innerHTML = `

        <article class="featured-card">

            <img
                src="${featured.image}"
                alt="${featured.title}"
            >

            <div class="featured-content">

                <p>
                    ${featured.category}
                </p>

                <h2>
                    ${featured.title}
                </h2>

                <p>
                    ${featured.description}
                </p>

                <small>
                    By ${featured.author}
                    |
                    ${featured.date}
                </small>

                <br>

                <a
                    href="blog-details.html?id=${featured.id}"
                    class="btn">

                    Read More

                </a>

            </div>

        </article>

    `;

}