import styled from "styled-components";

const Card = styled.div`
    width:600px;
    heigth:600px;
    display:inline-block;

    & img: hover {
        transform: scale(1.1);
    }
`
const Descript = styled.div`
    width: 70%;
    height: 500px;
    border-radius: 0.5rem;
    top: -400px;
    left: 55%;
    position: relative;
    background: black;
    padding: 2rem;
    display: inline-flex;
    color:white;
    flex-direction: column;
    opacity: 0;
    transition: all 0.5s;
    transform: translateY(2.5rem);

    &:hover {
    opacity: 0.7;
    transform: translateY(0rem);
    }
`
const Gen = styled.div`
    display:inline-block;
    width:300px;
`

 export default function Movie({id,Img,title,year,summary,genres})
{
    return(
        <Gen>
        <Card>
        <img src={Img} alt="" />
        </Card>
    <Descript>
        <div>
            <img src={Img} alt="" />
        </div>
        <div>
            <span>{title}</span>
        </div>
        <div>
            <span>{year}</span>
            <span>{summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}</span>
        </div>
        <Gen>
            {genres.map((g)=>(
                <li key={g}>{g}</li>
            ))}
        </Gen>
    </Descript>
    </Gen>
    );
}