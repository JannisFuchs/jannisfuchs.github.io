
function BlogOverview() {
    const postname = ["week1", "week2", "week3"];
    return (
        <div>
            <h1>Blog Overview</h1>
            <ul>
                {postname.map((post) => (
                    <li key={post}>
                        <a href={`/blog/${post}`}>{post}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default BlogOverview;