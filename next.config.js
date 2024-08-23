// next.config.js
module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/sign-in', // Adjust this path to your sign-in page
                permanent: true,
            },
        ];
    },
};
