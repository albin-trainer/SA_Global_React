import z from "zod";

export const empSchema=z.object({
    name:z.string().min(1,"Name is required"),
    age:z.number().min(18,"Age must be >=18"). max(120,"Age cannot beyond 120"),
});

export type EmpData=z.infer<typeof empSchema>