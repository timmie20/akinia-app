import NewsCard from "@/components/news-card";
import { Separator } from "@/components/ui/separator";

export const WhatsNew = () => {
  return (
    <main className="mx-auto max-w-screen-md">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold">
          Good afternoon, Timilehin Olayinka
        </h1>
        <p className="mt-1 text-slate-500">
          News limited to Africa and Investement Banking
        </p>
        <p className="my-5 text-sm font-medium">Previous wek</p>

        <div className="flex w-full flex-col gap-6">
          {Array.from({ length: 8 }, (_, i) => (
            <>
              <Separator />
              <NewsCard key={i} />
            </>
          ))}
        </div>
      </div>
    </main>
  );
};
