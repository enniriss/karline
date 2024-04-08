import { Mongoose } from 'mongoose';
import { TasksSchema } from './schemas/task.schema';

export const tasksProviders = [
  {
    provide: 'UNDERTASK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Tasks', TasksSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];