// https://github.com/nextauthjs/next-auth-typescript-example/blob/main/types/next.d.ts

namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        GITHUB_ID: string
        GITHUB_SECRET: string
        NEXTAUTH_URL: string
    }
}