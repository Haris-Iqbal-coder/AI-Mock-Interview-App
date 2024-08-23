/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:rdJRXnfOEY36@ep-solitary-unit-a5cfwzzx.us-east-2.aws.neon.tech/ai-interview?sslmode=require',
    }
};