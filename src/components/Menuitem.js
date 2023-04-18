import Link from "next/link"

export default function Menuitem({ title, address, Icon }) {
    return (
        <div>
            <Link href={address} class="mx-4 lg:mx-6 hover:text-amber-600">
                <Icon class="text-2xl sm:hidden mx-4" />
                <p class="hidden sm:inline my-2 text-sm font-bold">{title}</p>
            </Link>
        </div>
    )
}
