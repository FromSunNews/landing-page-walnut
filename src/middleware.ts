import { NextResponse, NextRequest } from "next/server";
// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isHomeRoute = createRouteMatcher(["/"]);

// export default clerkMiddleware((auth, req) => {
//     const { userId } = auth();

//     // if there is user and home route is accessed, redirect to dashboard or any other protected route
//     if (userId && isHomeRoute(req)) {
//         return NextResponse.rewrite(new URL("/", req.url));
//     }
// });

// export const config = {
//     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

export default function middleware(req: NextRequest) {
    console.log("Middleware is running");
    return NextResponse.next();
}
