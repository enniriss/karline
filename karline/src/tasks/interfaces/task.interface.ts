import { Schema, Document, model } from 'mongoose';

interface Tasks extends Document {
    title: string;
    checked: string;

    // Ajoutez d'autres champs si nécessaire
}

const tasksSchema = new Schema<Tasks>({
    title: { type: String, required: true },
    checked: { type: String, required: true },
});

export const TasksModel = model<Tasks>('Tasks', tasksSchema);