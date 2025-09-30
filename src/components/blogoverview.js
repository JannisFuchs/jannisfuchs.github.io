
import { useState, useEffect } from 'react';
function BlogOverview() {
    const [weeks, setWeeks] = useState([]);

    useEffect(() =>{ fetch("/blog/NumberOfFiles.txt")
        .then(response=> {
            return response.text();
        })
        .then(text =>{
            const string = text;
            const count =parseInt(string);
            const weeksArray = Array.from({ length: count }, (_, i) => `week${i + 1}`);
            setWeeks(weeksArray);
        })
        .catch(error => console.error('Error fetching count:', error));
    }, []);
    
    return (
        <div className="container">
            <div className="mainComponent">
                <h1>Blog Overview</h1>
                <ul>
                    {weeks.length > 0 ? (
                        weeks.map(post => (
                        <li key={post}>
                            <a href={`/blog/#/week?week=${post}`}>{post}</a>
                        </li>
                        ))
                    ) : (
                        <li>No weeks available</li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default BlogOverview;
