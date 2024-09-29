import { createClient } from "../../../../utils/supabase/server";
import { notFound } from "next/navigation";
import CheckoutForm from "./CheckoutForm";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const supabase = createClient();

  const { data: configuration } = await supabase
    .from("configuration")
    .select("*")
    .eq("id", id)
    .single();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!configuration) {
    return notFound();
  }

  return (
    <CheckoutForm
      configId={configuration.id}
      userId={user?.id}
      userAddress={user?.user_metadata.address}
      userPhone={user?.user_metadata.phone}
    />
  );
};

export default Page;
