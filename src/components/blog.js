import {  useSearchParams } from "react-router-dom";
import "../stylesheets/global.css"

function Blog() {
    const [searchParams] = useSearchParams();
    const week=searchParams.get("week")
    
    if(/week[1-9]+/.test(week)){
        return(
        <div className="container">
            <iframe className="mainComponent" src={`/blog/compiledOrgFiles/${week}.html`} title="Startseite"></iframe>
        </div>
        );
    }
    else {
        return(
        <div className="container">
            <iframe className="mainComponent" src={`/blog/compiledOrgFiles/404Page.html`} title="Startseite"></iframe>
        </div>
        );
    }
    
}
export default Blog;