import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {Article} from "..";
import CategoriesStatistic from "@/components/common/categories-statistic";
import Advertisement from "@/components/common/advertisement";
import Layout from "@/components/common/layout";

const BlogDetail = () => {
    const {query} = useRouter();
    const id = query.id as string;
    const [article, setArticle] = useState<Article | null>(null);
    useEffect(() => {
        if (!id) return;
        const fetchData = async () => {
            const url = `http://localhost:5200/Post/GetPost/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            setArticle(data);
        };
        fetchData();
    }, [id]);

    return <Layout> <section className={'container'}>
        <div className={'flex justify-between mt-[40px] mb-[200px]'}>
            <div>
                <h1 className={'font-bold text-[45px]'}>{article?.title}</h1>
                <div className={'flex gap-[20px] text-gray-600 text-[14px] mb-[40px]'}>
                    <time>{article?.postDateTime.substring(0, 10).replaceAll('-', '/')}</time>
                    <span>{article?.author ? article?.author : 'Anonymous author'}</span>
                </div>
                <p>{article?.content}</p>
            </div>
            <Advertisement/>
        </div>
    </section>
    </Layout>;
};

export default BlogDetail;
