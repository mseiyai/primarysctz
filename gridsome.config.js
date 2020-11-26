// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'PrimaryScTz',
  siteDescription: "Tanzania Primary Schools",
  siteUrl: 'https://primary.sc.tz',
  titleTemplate: `%s | Tanzania Primary Schools`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    },
    {
      use: "gridsome-plugin-netlify-cms",
      options: {
        publicPath: `/admin`
      }
    },  
  ]
}
