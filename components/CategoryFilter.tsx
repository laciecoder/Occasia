"use client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getCategories } from "@/lib/actions/category-actions";
import { ICategory } from "@/lib/db/models/category";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryFilter() {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        async function getAllCategories() {
            const list = await getCategories();
            list && setCategories(list as ICategory[]);
        }
        getAllCategories();
    }, []);
    function onSelectCategory(category: string) {
        let newUrl;
        if (category && category !== "All") {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "category",
                value: category,
            });
        } else {
            newUrl = removeKeysFromQuery({
                params: searchParams.toString(),
                keysToRemove: ["category"],
            });
        }
        router.push(newUrl, { scroll: false });
    }

    return (
        <Select onValueChange={(value: string) => onSelectCategory(value)}>
            <SelectTrigger className="select-field">
                <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem
                    value="All"
                    className="select-item text-sm font-normal"
                >
                    All
                </SelectItem>
                {categories.map((category) => (
                    <SelectItem
                        key={category._id as any}
                        value={category?.name}
                        className="select-item text-sm leading-3 font-normal"
                    >
                        {category.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}
