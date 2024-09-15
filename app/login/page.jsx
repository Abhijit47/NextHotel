import { FacebookLogo, LogosGoogleIcon } from "@/assets/icons";
import DividerWithLabel from "@/components/DividerWithLabel";
import LoginForm from "@/components/LoginForm";
import LoginScreenSlider from "@/components/LoginScreenSlider";
import { loginScreens } from "@/constants";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="py-4 md:10 xs:py-6 sm:py-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* left side */}
        <div className="grid bg-blue-500 bg-no-repeat bg-cover place-items-center bg-login-backgorund-img xs:h-fit sm:h-svh lg:h-full">
          <LoginScreenSlider loginScreens={loginScreens} />
        </div>

        {/* right side */}
        <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
              className="object-cover mx-auto size-20"
              src="/Logo.png"
              alt="Logo"
              width={130}
              height={130}
              priority
            />
            <h2 className="mt-6 text-3xl font-semibold text-center text-stone-900">
              Welcome to Homeey
            </h2>
            <div className="py-4">
              <DividerWithLabel>
                <span className="bg-gray-50">Or</span>
              </DividerWithLabel>
            </div>

            <p className="mt-2 text-sm text-center text-gray-600">
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
            <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
              <LoginForm />

              <div className="mt-6">
                <DividerWithLabel>
                  <span className="bg-white">Or continue with</span>
                </DividerWithLabel>

                <div className="grid grid-cols-2 mt-6 gap-x-3">
                  <div>
                    <Link
                      href="#"
                      className="inline-flex items-center w-full px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full shadow-sm justify-evenly hover:bg-gray-50"
                    >
                      <LogosGoogleIcon className="w-5 h-5" />
                      <span className="text-xs text-stone-700">
                        Sign in with Google
                      </span>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="#"
                      className="inline-flex items-center w-full px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full shadow-sm justify-evenly hover:bg-gray-50"
                    >
                      <FacebookLogo className="w-5 h-5 text-blue-500" />
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
