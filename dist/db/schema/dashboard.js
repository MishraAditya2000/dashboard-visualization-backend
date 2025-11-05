import mongoose from "mongoose";
const DashboardSchema = new mongoose.Schema({
    end_year: {
        type: String
    },
    intensity: {
        type: Number,
        index: true
    },
    sector: {
        type: String
    },
    topic: {
        type: String,
        index: true
    },
    insight: {
        type: String
    },
    url: {
        type: String
    },
    region: {
        type: String,
        index: true
    },
    start_year: {
        type: String
    },
    impact: {
        type: String
    },
    added: {
        type: String
    },
    published: {
        type: String
    },
    country: {
        type: String,
        index: true
    },
    relevance: {
        type: Number,
        index: true
    },
    pestle: {
        type: String
    },
    source: {
        type: String
    },
    title: {
        type: String
    },
    likelihood: {
        type: Number,
        index: true
    },
    city: {
        type: String,
        index: true
    },
}, { timestamps: true });
export const Dashboard = mongoose.model("dashboard", DashboardSchema);
