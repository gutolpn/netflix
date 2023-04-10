const API_KEY = "264bb09ec4d858065cfb8860838a32ff"
const API_DNS = "https://api.themoviedb.org/3/"

const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending/all/week?api_key="+API_KEY+"&language=pt-BR"
    },
    {
        name: "documentaries",
        title: "Documentários",
        path: "/discover/tv/api_key="+API_KEY+"&with_genres=99"
    }
]

const getMovies = (category) => {
    let url = ''

    categories.forEach((item)=>{
        if(item.name == category){
            url = API_DNS + item.path
        }
    })

    return url; 
}

export default getMovies;