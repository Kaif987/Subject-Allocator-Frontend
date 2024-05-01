import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import Integral from "../images/IntegralUniversityLogo.png";

export default function Component() {
    return (
        <div className="max-w-md mx-auto my-12 space-y-6 flex flex-col items-center">
            <img src={Integral} alt="" height={50} width={300} className="p-6" />
            <div className="text-center">
                <h2 className="text-3xl font-bold">Choose Your Subjects</h2>
                <p className="text-gray-500 dark:text-gray-400">Select from the dropdown menus below.</p>
            </div>
            <form className="space-y-4 w-full">
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <Label htmlFor="subject1">Subject 1</Label>
                        <Select id="subject1">
                            <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="math">Mathematics</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="history">History</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="art">Art</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="subject2">Subject 2</Label>
                        <Select id="subject2">
                            <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="math">Mathematics</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="history">History</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="art">Art</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="subject3">Subject 3</Label>
                        <Select id="subject3">
                            <SelectTrigger>
                                <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="math">Mathematics</SelectItem>
                                <SelectItem value="science">Science</SelectItem>
                                <SelectItem value="history">History</SelectItem>
                                <SelectItem value="english">English</SelectItem>
                                <SelectItem value="art">Art</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <Button className="w-full" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}