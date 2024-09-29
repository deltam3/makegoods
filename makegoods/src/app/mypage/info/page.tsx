import { createClient } from "../../../../utils/supabase/server";
import { notFound } from "next/navigation";
import MyInfoForm from "./MyInfoForm";

const Page = async () => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return notFound();
  }

  const editUserData = {
    // address: user.user_metadata.address,
    phone: user?.user_metadata?.phone,
  };

  return <MyInfoForm user={editUserData} />;
};

export default Page;
