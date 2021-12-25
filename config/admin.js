module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9578d6ce9113fc5929afcacb8667eaf9'),
  },
});
