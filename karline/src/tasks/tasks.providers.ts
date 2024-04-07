import { Mongoose } from 'mongoose';
import { TasksSchema } from './schemas/task.schema';

export const tasksProviders = [
  {
    provide: 'TASK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Task', TasksSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];