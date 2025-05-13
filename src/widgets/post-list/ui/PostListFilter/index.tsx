import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/Input";

const PostListFilter = () => {
    return (
        <div className="flex justify-between w-full gap-1">
            <Input variant="outlined" placeholder="Search..." />
            <Button variant="filled" text="Поиск" />
        </div>
    )
}

export default PostListFilter;