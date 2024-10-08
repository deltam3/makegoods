"use client";
import { createClient } from "../../../../utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState, useTransition, useEffect } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { Image, Loader2, MousePointerSquareDashed } from "lucide-react";

const Page = () => {
  const { toast } = useToast();
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const router = useRouter();
  const supabase = createClient();

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: async ([data]) => {
      const { width, height, fileUrl } = data.serverData;
      let configId = undefined;
      if (!configId) {
        const { data, error } = await supabase
          .from("configuration")
          .insert([
            {
              imageurl: fileUrl,
              height: height || 500,
              width: width || 500,
            },
          ])
          .select();

        configId = data[0].id;
      } else {
        const { data, error } = await supabase
          .from("configuration")
          .update({ croppedimageurl: fileUrl })
          .eq("id", configId)
          .select();
        console.log(data);
        configId = data[0].id;
      }
      localStorage.setItem("orgimageurl", fileUrl);

      startTransition(() => {
        router.push(`/configure/design?id=${configId}`);
      });
    },
    onUploadProgress(p) {
      setUploadProgress(p);
    },
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles;

    setIsDragOver(false);

    toast({
      title: `${file.file.type} 파일 포맷은 지원되지 않습니다.`,
      description: "PNG, JPG, JPEG 형식의 이미지 파일만 지원됩니다.",
      variant: "destructive",
      action: <img src="/mint.gif" className="w-48" />,
    });
  };

  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, {
      configId: undefined,
    } as any);

    setIsDragOver(false);
  };

  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        {
          "ring-blue-900/25 bg-blue-900/10": isDragOver,
        }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className="h-full w-full flex-1 flex flex-col items-center justify-center"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDragOver ? (
                <MousePointerSquareDashed className="h-6 w-6 text-zinc-500 mb-2" />
              ) : isUploading || isPending ? (
                <Loader2 className="animate-spin h-6 w-6 text-zinc-500 mb-2" />
              ) : (
                <Image className="h-6 w-6 text-zinc-500 mb-2" />
              )}
              <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>올리는중...</p>
                    <Progress
                      value={uploadProgress}
                      className="mt-2 w-40 h-2 bg-gray-300"
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>다음 단계로 이동중...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">파일을 끌어서</span> 서버에
                    올리세요.
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">여기를 누르거나</span>{" "}
                    파일을 드래그 앤 드롭하세요
                  </p>
                )}
              </div>

              {isPending ? null : (
                <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default Page;
