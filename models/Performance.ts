import mongoose from 'mongoose';

const PerformanceSchema = new mongoose.Schema({
  email: { type: String, required: true },
  subject: { type: String, required: true },
  score: { type: Number, required: true },
  totalQuestions: { type: Number, default: 20 },
  accuracy: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export const Performance = mongoose.models.Performance || mongoose.model('Performance', PerformanceSchema);