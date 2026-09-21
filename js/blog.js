// =========================
// BLOG PAGE
// =========================

const blogContainer =
    document.getElementById("blogContainer");


const searchInput =
    document.getElementById("searchInput");


const categoryButtons =
    document.querySelectorAll(".category-btn");


const noResults =
    document.getElementById("noResults");


let selectedCategory = "All";


// =========================
// DISPLAY BLOGS
// =========================

function displayBlogs(blogList) {

    if (!blogContainer) {
        return;
    }


    if (blogList.length === 0) {

        blogContainer.innerHTML = "";

        if (noResults) {
            noResults.style.display = "block";
        }

        return;
    }


    if (noResults) {
        noResults.style.display = "none";
    }


    blogContainer.innerHTML =
        blogList.map(function (blog) {

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

                        <h2>
                            ${blog.title}
                        </h2>

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
// FILTER BLOGS
// =========================

function filterBlogs() {

    const searchText =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    const filteredBlogs =
        blogs.filter(function (blog) {


            const matchesSearch =

                blog.title
                    .toLowerCase()
                    .includes(searchText)

                ||

                blog.description
                    .toLowerCase()
                    .includes(searchText);


            const matchesCategory =

                selectedCategory === "All"

                ||

                blog.category === selectedCategory;


            return (
                matchesSearch &&
                matchesCategory
            );

        });


    displayBlogs(filteredBlogs);

}


// =========================
// SEARCH EVENT
// =========================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        filterBlogs
    );

}


// =========================
// CATEGORY EVENT
// =========================

categoryButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {


            selectedCategory =
                button.dataset.category;


            categoryButtons.forEach(
                function (btn) {

                    btn.classList.remove(
                        "active"
                    );

                }
            );


            button.classList.add("active");


            filterBlogs();

        }
    );

});


// =========================
// INITIAL DISPLAY
// =========================

displayBlogs(blogs);