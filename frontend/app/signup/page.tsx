import SignupForm from "@/_components/SignupForm";

export const metadata = {
  title: "Signup",
};

async function Page() {
  return (
    <div>
      <SignupForm />
    </div>
  );
}

export default Page;
