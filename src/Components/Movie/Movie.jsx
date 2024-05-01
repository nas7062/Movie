export default function Movie({id,Img,title,year,summary,genres})
{
    return(
    <div>
        <div>
            <img src={Img} alt="" />
        </div>
        <div>
            <span>{title}</span>
        </div>
        <div>
            <span>{year}</span>
            <span>{summary}</span>
        </div>
        <div>
            {genres.map((g)=>(
                <li key={g}>{g}</li>
            ))}
        </div>
    </div>
    );
}