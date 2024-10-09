"use server";

import { connectToDatabase } from "@/lib/db";
import { Category } from "@/lib/db/models/category";
import { CreateCategoryParams } from "@/lib/types";
import { handleError } from "@/lib/utils";

export async function createCategory({ categoryName }: CreateCategoryParams) {
    try {
        await connectToDatabase();
        const newCategory = await Category.create({ name: categoryName });
        return JSON.parse(JSON.stringify(newCategory));
    } catch (error) {
        handleError(error);
    }
}

export async function getCategories() {
    try {
        await connectToDatabase();
        const categories = await Category.find();
        return JSON.parse(JSON.stringify(categories));
    } catch (error) {
        handleError(error);
    }
}
