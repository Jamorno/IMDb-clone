import Navbaritem from "./Navbaritem"

export default function Navbar() {
    return (
        <div class="flex items-center justify-center bg-amber-100 dark:bg-gray-600 lg:text-lg p-4">
            <Navbaritem title="Trending" param="fetchTrending" />
            <Navbaritem title="Top Rated" param="fetchTopRated" />
        </div>
    )
}
