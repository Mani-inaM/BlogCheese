import { useRouter } from "next/router";
import Layout from "@/components/common/layout";
import { useEffect, useState } from "react";
import { Article } from "@/pages";
import ArticleCard from "@/components/blog/article-card";
import PopularCard from "@/components/blog/popular-card";
import { AiFillDelete } from "react-icons/ai";

const deletePost = async (id: number) => {
  try {
    await fetch(`http://localhost:5200/Post/DeletePost/${id}`, {
      method: "DELETE",
    });
    return id;
  } catch (e) {
    console.error(e);
  }
};

const createPost = async (
  id: string,
  body: { title: string; content: string }
) => {
  try {
    const res = await fetch(`http://localhost:5200/Post/CreatePost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: body.title,
        content: body.content,
        postDateTime: new Date().toJSON(),
        postAuthorId: parseInt(id),
      }),
    });

    return res.json();
  } catch (e) {
    alert(e);
  }
};

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const [data, setData] = useState<Article[]>([]);
  useEffect(() => {
    if (!id) return;
    // fetch data
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5200/Post/GetUsersPosts/${id}`
      );
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, [id]);

  return (
    <Layout>
      <section className={"container"}>
        <h1 className={"mt-16"}>Posts by user {id}</h1>
        <div className={"my-6 grid grid-cols-3 gap-6"}>
          {data?.map((article) => (
            <div className={"relative"} key={article.id}>
              <PopularCard
                title={article.title}
                author={article.author}
                readingTime={5}
              />
              <AiFillDelete
                onClick={() => {
                  deletePost(article.id).then(() => {
                    setData(data.filter((post) => post.id !== article.id));
                  });
                }}
                className={
                  "absolute top-2 right-2 z-20 cursor-pointer text-3xl text-red-500"
                }
              />
            </div>
          ))}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const post = createPost(String(id), { content, title }).then(
              () => {}
            );
          }}
          className={
            "mx-auto mt-[100px] mb-[200px] flex max-w-[700px] flex-col gap-[15px]"
          }
        >
          <label className={"flex flex-col gap-[5px] text-[12px]"}>
            Title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={
                "w-full rounded-2xl border-2 border-amber-300 py-[10px]"
              }
            />
          </label>
          <label className={"flex flex-col gap-[5px] text-[12px]"}>
            Content
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={
                "w-full rounded-2xl border-2 border-amber-300 py-[10px]"
              }
            />
          </label>
          <button
            type={"submit"}
            className={
              "mt-[30px] rounded-2xl border-2 border-amber-900 bg-amber-200 py-[10px] text-amber-900"
            }
          >
            Create new post
          </button>
        </form>
      </section>
    </Layout>
  );
};

export default UserPage;
