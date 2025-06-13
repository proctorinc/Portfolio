exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        "path": false,
        "fs": false
      }
    }
  })
} 