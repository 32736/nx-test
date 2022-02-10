export default () => ({
  graphql: {
    // 启用订阅
    installSubscriptionHandlers: true,
    typePaths: ['./**/*.graphql'],
  },
});
