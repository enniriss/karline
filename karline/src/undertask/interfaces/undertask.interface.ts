import { Schema, Document, model } from 'mongoose';

interface UnderTask extends Document {
    title: string;
    checked: string;
    subtasks: string[];
    // Ajoutez d'autres champs si nécessaire
}

const underTaskSchema = new Schema<UnderTask>({
    title: { type: String, required: true },
    checked: { type: String, required: true },
    subtasks: [{ type: String, required: true }],
});

export const UnderTaskModel = model<UnderTask>('UnderTasks', underTaskSchema);