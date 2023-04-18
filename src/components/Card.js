import Link from "next/link"
import Image from "next/image"
import { AiFillLike } from "react-icons/ai";

export default function Card({ result }) {
    return (
        <div class="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:boder-slate-400 sm:m-2 transition-shadow duration-200 group">
            <Link href={`/movie/${result.id}`}>
                <Image class="sm:rounded-t-lg group-hover:opacity-70 transition-opacity duration-200"
                    src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                    width={500} height={300}>
                </Image>

                <div class="p-2">
                    <p class="line-clamp-2 text-md">{result.overview}</p>
                    <h2 class="truncate text-lg font-bold">{result.title}</h2>
                    <p class="flex items-center">{result.release_date} <AiFillLike class="ml-3 mr-1 h-5" /> {result.vote_count}</p>
                </div>
            </Link>
        </div>
    )
}
