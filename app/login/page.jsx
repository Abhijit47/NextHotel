import {
  FacebookLogo,
  GithubLogo,
  LogosGoogleIcon,
  TwitterLogo,
} from "@/assets/icons";
import DividerWithLabel from "@/components/DividerWithLabel";
import LoginForm from "@/components/LoginForm";
import LoginScreenSlider from "@/components/LoginScreenSlider";
import { loginScreens } from "@/constants";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="md:10 py-4 xs:py-6 sm:py-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* left side */}
        <div className="bg-login-backgorund-img grid place-items-center bg-blue-500 bg-cover bg-no-repeat xs:h-fit sm:h-svh lg:h-full">
          <LoginScreenSlider loginScreens={loginScreens} />
        </div>

        {/* right side */}
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
              className="mx-auto size-20 object-cover"
              src="/Logo.png"
              alt="Logo"
              width={130}
              height={130}
              priority
            />
            <h2 className="mt-6 text-center text-3xl font-semibold text-stone-900">
              Welcome to Homeey
            </h2>
            <div className="py-4">
              <DividerWithLabel>
                <span className="bg-gray-50">Or</span>
              </DividerWithLabel>
            </div>

            <p className="mt-2 text-center text-sm text-gray-600">
              <Link
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Welcome back! login with your data that you entered during
                registration.
              </Link>
            </p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
              <LoginForm />

              <div className="mt-6">
                <DividerWithLabel>
                  <span className="bg-white">Or continue with</span>
                </DividerWithLabel>

                <div className="mt-6 grid grid-cols-2 gap-x-3">
                  <div>
                    <Link
                      href="#"
                      className="inline-flex w-full items-center justify-evenly rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <LogosGoogleIcon className="h-5 w-5" />
                      <span className="text-xs text-stone-700">
                        Sign in with Google
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="inline-flex w-full items-center justify-evenly rounded-full border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                    >
                      <FacebookLogo className="h-5 w-5 text-blue-500" />
                      <span className="text-xs text-stone-700">
                        Sign in with Facebook
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
