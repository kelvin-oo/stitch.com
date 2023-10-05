import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import { fetchUser } from "@/lib/actions/user.actions";
// import AccountProfile from "@/components/forms/AccountProfile";

async function Page() {
  const user = await currentUser();
  //   if (!user) return null; // to avoid typescript warnings

  //   const userInfo = await fetchUser(user.id);
  //   if (userInfo?.onboarded) redirect("/");

  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    image: userInfo?.image || user?.imageUrl,
    bio: userInfo?.bio || ""
  }


  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-10">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now, to use Stitch.
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        <AccountProfile user={userData} btnTitle="Continue"/>
      </section>
    </main>
  );
}

export default Page;
