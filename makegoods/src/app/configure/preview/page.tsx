import { createClient } from "../../../../utils/supabase/server";
import { notFound } from "next/navigation";
import DesignPreview from "./DesignPreview";

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

  return <DesignPreview configuration={configuration} user={user} />;
};

export default Page;
