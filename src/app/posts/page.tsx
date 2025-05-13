import { postModel } from "@/features/posts/model/post.model"
import Section from "@/shared/ui/Section"
import Footer from "@/widgets/Footer"
import Header from "@/widgets/Header"
import PostList from "@/widgets/post-list/ui/PostList"
import PostListFilter from "@/widgets/post-list/ui/PostListFilter"

export default async function PostsPage() {

    const posts = await postModel.getPopularPosts();
    return (
        <>
            <Header />
            <Section>
                <PostListFilter />
                <PostList initialPosts={posts} />
            </Section>
            <Footer />
        </>
    )
}
