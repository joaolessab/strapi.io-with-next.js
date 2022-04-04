module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '08457c9e1b291c2f18a05238253de8b8'),
  },
});
