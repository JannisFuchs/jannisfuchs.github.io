import {  useSearchParams } from "react-router-dom";

function Blog() {
    const [searchParams] = useSearchParams();
    const week=searchParams.get("week")
    return(
        <iframe src={`/blog/compiledOrgFiles/${week}.html`} title="Startseite"></iframe>
    );
}
export default Blog;