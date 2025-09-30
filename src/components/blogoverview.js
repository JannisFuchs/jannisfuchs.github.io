function BlogOverview() {
    const postname = ["week1", "week2", "week3"];
    return (
        <div className="container">
            <div className="mainComponent">
                <h1>Blog Overview</h1>
                <ul>
                    {postname.map((post) => (
                        <li key={post}>
                            <a href={`/blog/#/week?week=${post}`}>{post}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default BlogOverview;