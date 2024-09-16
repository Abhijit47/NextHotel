import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isProtectedRoute = createRouteMatcher(["/all-rooms(.*)", "/forum(.*)"]);

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api(.*)",
  "/trpc(.*)",
]);

export default clerkMiddleware((auth, req) => {
  // if (isProtectedRoute(req)) auth().protect();

  if (!isPublicRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

// export default authMiddleware({
//   publicRoutes: [
//     "/",
//     "/private-house.svg",
//     "/apartment-icon.svg",
//     "/exclusive-hotel-icon.svg",
//     "/private-room-icon.svg",
//     "/warehouse-icon.svg",
//     "/hero-background.png",
//     "/about-img-1.png",
//     "/about-img-2.png",
//     "/client-img-1.png",
//     "/client-img-2.png",
//     "/client-img-3.png",
//     "/cta-img.png",
//     "/footer-bg.png",
//   ],

//   ignoredRoutes: ["/((?!api|trpc))(_next.*|.+.[w]+$)", "/contact"],

//   afterAuth(auth, req, evt) {
//     // console.log(auth, evt);
//     // console.log(req.url); // http://localhost:3000/

//     // Handle users who aren't authenticated
//     if (!auth.userId && !auth.isPublicRoute) {
//       return redirectToSignIn({ returnBackUrl: req.url });
//     }

//     // If the user is logged in and trying to access a protected route, allow them to access route
//     if (auth.userId && !auth.isPublicRoute) {
//       return NextResponse.next();
//     }

//     // Allow users visiting public routes to access them
//     return NextResponse.next();
//   },
// });

// export const config = {
//   // Protects all routes, including api/trpc.
//   // See https://clerk.com/docs/references/nextjs/auth-middleware
//   // for more information about configuring your Middleware
//   // matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };
