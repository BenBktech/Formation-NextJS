import { articles } from "@/app/datas";
import { Metadata } from "next";

export function generateMetadata({ params }: { params: { id: string }}): Metadata {
    const article = articles.find((element) => element.id === parseInt(params.id));
    return {
        title: article?.title,
        description: article?.description
    }
}

export default function ArticlePage({ params }: { params: { id: string }}) {
    const article = articles.find((element) => element.id === parseInt(params.id));
    return (
        <>
            {article &&
                <div style={{
                    padding: '1rem'
                }}>
                    <h2>{article.title} le {article.date} par {article.author}</h2>
                    <div>{article.description}</div>
                </div>
            }
        </>
    )
}