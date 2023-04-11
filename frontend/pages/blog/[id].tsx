import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Article } from "..";

const BlogDetail = () => {
  const { query } = useRouter();
  const id = query.id as string;
  const [article, setArticle] = useState<Article | null>(null);
  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      const url = `http://localhost:5200/Post/GetPost/${id}}`;
      const response = await fetch(url);
      const data = await response.json();
      setArticle(data);
    };
    fetchData();
  }, [id]);

  return <div>{article?.title}</div>;
};

export default BlogDetail;
