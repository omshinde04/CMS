const createNextIntlPlugin = require("next-intl/plugin");


const withNextIntl = createNextIntlPlugin();



const nextConfig = {


  images: {


    remotePatterns: [


      // Backend uploaded images
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/uploads/**",
      },



      // Temporary online UI images
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },



      // Future official website images if needed
      {
        protocol: "https",
        hostname: "subhashdeshmukh.com",
        pathname: "/**",
      },


    ],


  },


};



module.exports = withNextIntl(nextConfig);