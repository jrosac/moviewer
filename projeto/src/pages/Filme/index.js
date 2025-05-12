import {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import api from "../../services/api"
import "./filme-info.css"

function Filme(){

    const{ id } = useParams();
    const navigate = useNavigate();
    const [filme,setfilme] = useState({});
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "ba68f6fb3af7683cd59f5d676ecb54be",
                    language:"pt-BR",
                }
            })
            .then((response)=>{
                //console.log(response.data)
                setfilme(response.data);
                setloading(false);

            })
            .catch(()=>{
                console.log("filme não encontrado")
                navigate("/",{replace: true});
                return;
            })

        }

        loadFilme();
        
        
        return() => {
            console.log("Componente foi desmontado")
        }
        

    }, [navigate, id])

    if(loading){
        return(
            <div className="filme-info">
                <h2>Carregando detalhes ...</h2>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src ={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>

            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                    <a href={`https://www.youtube.com/results?search_query= ${filme.title} Trailer`} target="_blank " rel="external"> Trailer</a>
                </button>

            </div>

        </div>
    )
}

export default Filme;