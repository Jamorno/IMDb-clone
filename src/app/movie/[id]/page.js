import Image from "next/image";

export default async function MoviePage({ params }) {

  const movieId = params.id
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
  const movie = await res.json();

  return (
    <div class="w-full">
      <div class="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        
        <Image class="rounded-lg"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500} height={300}>
        </Image>

        <div class="">
          <h2 class="font-bold text-xl mt-3 mb-3">{movie.title}</h2>

          <p class="text-lg mb-3">
            <span class="font-semibold mr-2">Overview:</span>{movie.overview}
          </p>

          <p class="text-lg mb-3">
            <span class="font-semibold mr-2">Release Date:</span>{movie.release_date}
          </p>

          <p class="text-lg mb-3">
            <span class="font-semibold mr-2">Rated:</span> {movie.vote_count}
          </p>

        </div>
      </div>
    </div>
  )
}
