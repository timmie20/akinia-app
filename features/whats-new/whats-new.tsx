import NewsCard from "@/components/news-card";
import { Separator } from "@/components/ui/separator";
import { getNews } from "@/sevices/news";

export const WhatsNew = async () => {
  const response = await getNews();

  return (
    <main className="mx-auto max-w-[800px]">
      <div className="w-full max-w-xl">
        <h1 className="text-2xl font-bold">
          Good afternoon, Timilehin Olayinka
        </h1>
        <p className="mt-1 text-slate-500">
          News limited to Africa and Investement Banking
        </p>
        <p className="my-5 text-sm font-medium">Previous week</p>

        {response.success ? (
          <div className="flex w-full flex-col gap-6">
            {response.data.map((item) => (
              <>
                <Separator />
                <NewsCard key={item.id} news={item} />
              </>
            ))}
          </div>
        ) : (
          <h1>no data </h1>
        )}
      </div>
    </main>
  );
};
