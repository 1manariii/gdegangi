import Button from "@/shared/ui/button"
import Input from "@/shared/ui/input"

const Dashboard = () => {
    return (
        <div className="flex gap-3 flex-col">
            <div className="flex gap-3 flex-col">
                <h1 className="font-bold text-purple-600">Buttons</h1>
                <div className="flex gap-3">
                    <Button text="Touch me" variant="outlined" />
                    <Button text="Touch me" variant="text" />
                    <Button text="Touch me" variant="filled" />
                </div>
            </div>
            <div className="flex gap-3 flex-col">
                <h1 className="font-bold text-purple-600">Inputs</h1>
                <div className="flex gap-3">
                    <Input variant="outlined" placeholder="Search..." />
                    <Input variant="standard" placeholder="Search..." />
                    <Input variant="filled" placeholder="Search..." />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;