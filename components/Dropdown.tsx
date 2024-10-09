import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ICategory } from "@/lib/db/models/category";
import { startTransition, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { createCategory, getCategories } from "@/lib/actions/category-actions";

interface DropdownProps {
    value?: string;
    onChangeHandler?: () => void;
}

export default function Dropdown({ value, onChangeHandler }: DropdownProps) {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [newCategory, setNewCategory] = useState("");
    function handleCategory() {
        createCategory({ categoryName: newCategory.trim() }).then((category) =>
            setCategories((prev) => [...prev, category])
        );
    }

    useEffect(() => {
        async function getAllCategories() {
            const categoryList = await getCategories();
            categoryList && setCategories(categoryList as ICategory[]);
        }
        getAllCategories();
    }, []);

    return (
        <Select onValueChange={onChangeHandler} defaultValue={value}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                {categories.length > 0 &&
                    categories.map((category) => (
                        <SelectItem
                            key={category._id as any}
                            value={category._id as any}
                            className="select-item p-regular-14"
                        >
                            {category.name}
                        </SelectItem>
                    ))}
                <AlertDialog>
                    <AlertDialogTrigger className="font-normal flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">
                        Other
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white">
                        <AlertDialogHeader>
                            <AlertDialogTitle>
                                Add New Category
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                                <Input
                                    type="text"
                                    placeholder="Category Name"
                                    defaultValue={value}
                                    className="input-field mt-3"
                                    onChange={(e) =>
                                        setNewCategory(e.target.value)
                                    }
                                />
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                                onClick={() => startTransition(handleCategory)}
                            >
                                Add
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </SelectContent>
        </Select>
    );
}
