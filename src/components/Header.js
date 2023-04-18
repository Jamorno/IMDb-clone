import Menuitem from "./Menuitem"
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
import {
    RiHome7Fill,
    RiInformationFill
} from "react-icons/ri";

export default function Header() {
    return (
        <div class="flex items-center justify-between mx-2 max-w-6xl sm:mx-auto py-6">
            <div class="flex">
                <Menuitem title="HOME" address="/" Icon={RiHome7Fill} />
                <Menuitem title="ABOUT" address="/about" Icon={RiInformationFill} />
            </div>

            <div class="flex items-center space-x-4">
                <DarkModeSwitch />
                <Link href="/">
                    <h2 class="text-xl">
                        <span class="bg-amber-500 font-bold px-2 py-1 rounded-lg mr-1">IMDb</span>
                        <span class="text-xl hidden sm:inline">clone</span>
                    </h2>
                </Link>
            </div>
        </div>
    )
}
