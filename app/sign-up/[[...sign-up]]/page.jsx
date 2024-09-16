import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <section>
      <div className="grid h-svh place-items-center">
        <SignUp />
      </div>
    </section>
  );
}
