import { Mongoose } from 'mongoose';
import { UnderTaskSchema } from './schemas/undertask.schema';

export const underTaskProviders = [
  {
    provide: 'UNDERTASK_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('UnderTasks', UnderTaskSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];