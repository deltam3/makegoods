import { createClient } from "../../../../utils/supabase/server";

import { notFound } from "next/navigation";
import DesignConfigurator from "./DesignConfigurator";

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

  const { data, error } = await supabase
    .from("configuration")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) {
    return notFound();
  }

  const { imageurl, width, height } = data;

  return (
    <DesignConfigurator
      configId={data.id}
      imageDimensions={{ width, height }}
      imageUrl={imageurl}
    />
  );
};

export default Page;
