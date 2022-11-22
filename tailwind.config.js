/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                body: "#333333",
                secondary: "#666666",
                "btn-show": "#002e27",
                box: "#f4f4f4",
                footer: "#d9dfe2",
            },
            fontFamily: {
                primary: "Open Sans",
            },
        },
    },

    plugins: [],
};
