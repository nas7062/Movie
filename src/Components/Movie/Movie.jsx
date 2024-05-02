import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    width:600px;
    heigth:600px;
    display:inline-block;
    cursor:pointer;
    & img: hover {
        transform: scale(1.1);
    }
`
const Descript = styled.div`
    width: 70%;
    height: 530px;
    border-radius: 0.5rem;
    top: -420px;
    left: 50%;
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

    & li {
        display:inline-block;
        margin-right:20px;
        position:relative;
        left:-30px;
        color:red;
        font-size:0.9rem;
    }
`
const Btn = styled.div`
    position:relative;
    top:-15px;

  & button{
    margin-left:10px;
    
    
  }
`
 export default function Movie({id,Img,title,year,summary,genres})
{
    return(
        <Gen>
        <Card>
        <img src={Img} alt="" />
        </Card>
    <Descript>
        <Btn>
            <Link  to={`/movie/${id}`}>
            <button>상세 정보</button>
            </Link>
            <button>재생</button>
        </Btn>
        <div>
            <img src={Img} alt="" />
        </div>
        <div>
            <span>{title}</span>
        </div>
        <div>
            <span>{year}</span>
            <span>{summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}</span>
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