import {  useSearchParams } from "react-router-dom";
import "../stylesheets/global.css"

function Blog() {
    const [searchParams] = useSearchParams();
    const week=searchParams.get("week")

    return(
        <div className="container">
            <iframe className="fill" src={`/blog/compiledOrgFiles/${week}.html`} title="Startseite"></iframe>
        </div>
    );
}
export default Blog;