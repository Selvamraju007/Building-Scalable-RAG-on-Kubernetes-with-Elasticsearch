import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'elk-blue': '#005571',
                'elk-yellow': '#FEC514'
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
export default config;
