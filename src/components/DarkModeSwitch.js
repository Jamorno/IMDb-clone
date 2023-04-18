"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
    MdOutlineLightMode,
    MdDarkMode
} from "react-icons/md";

export default function DarkModeSwitch() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const currentTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => setMounted(true), []);

    return (
        <>
            {mounted &&
                (currentTheme === "dark" ? (
                    <MdOutlineLightMode class="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("light")} />
                ) : (
                    <MdDarkMode class="text-xl cursor-pointer hover:text-amber-500" onClick={() => setTheme("dark")} />
                ))
            }
        </>
    )
}
