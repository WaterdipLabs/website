import perform from '../assets/perform.png';
import outlier from '../assets/outlier.png';
import drift from '../assets/drift.png';
import predict from '../assets/predict.png';
import alert from '../assets/alert.png';

import rec1 from '../assets/rec1.png';
import rec2 from '../assets/rec2.png';
import rec3 from '../assets/rec3.png';

interface Benefit{
    h1: string,
    p: string
}
export const benefits: Array<Benefit> = [
    {h1:"Gain Production Insight", p:"With Waterdip platform ML Engineers and Data Scientists can check their Model's performance across a wide range of KPI and measurements in a single place"},
    {h1:"Faster Troubleshooting", p:"Debugging ML system is really cumbersome process. With much needed production insight, it becomes much easier to troubleshoot production issues"},
    {h1:"Increase Productivity", p:"With the power of continuous production insight and easier troubleshooting, Data Scientists saves more time, so that they can work on something awesome"},
    {h1:"Gain Transparency", p:"With the combined view of model performance and explainability of model's decision making process, product leaders gain complete transparency of their AI Systems"},
    {h1:"Increase Trust", p:"The transparency increases the trust of product leaders to their AI systems, as they know their AI system are making decision with true responsibility"},
    {h1:"Build Confidence", p:"Transparency and Trust gives product leaders more confidence to build and experiment with more ground braking ideas, to make higher impact to business KPIs"}
]

interface Feature {
    id: number;
    img: string;
    h1: string;
    p: string;
}
export const features: Array<Feature> = [
    { id: 0, img: perform, h1: "Model Performance", p: "Observer ML model's performance is one of the key activity needs to be done in production AI system. With waterdip platform one can have the continuous observability of model's performance matrices like Confusion Matrix, Moving Accuracy, AUC/ROC, Gini, Precision/Recall etc." },
    { id: 1, img: outlier, h1: "Outlier detection", p: "New environment is full of unexpected inputs, that can cause outlier for predicted data. With waterdip finding and identifying outlier in data or prediction become seamless, so troubleshooting becomes easy for the ML engineers and Data Scientists" },
    { id: 2, img: drift, h1: "Drift detection", p: "Due to this drift, the model keeps becoming unstable and the predictions keep on becoming erroneous with time. With waterdip platform we can detect drift in Data and ML model." },
    { id: 3, img: alert, h1: "Proactive alerts", p: "Anticipate what is changing and how it impacts your business and surface the right alert to the right people, so can action can be taken promptly"},
    { id: 4, img: predict, h1: "Model Prediction Explainer", p: "Understand how the ML Model is taking decision under the Black Box, so that it can be easily detected why any model is making wrong decision and can be fixed sooner"}
]

interface Performance{
    h1: string,
    p: string,
    img: string
}

export const Performances: Array<Performance> =[
    { img: rec1, h1: "Observer Models in Real-time.", p: "Observer the health and performance Of your ML Models in Real time" },
    { img: rec2, h1: "Explain Models to understand problems", p: "Understand the rationale behind the unexpected decisions made by your ML models" },
    { img: rec3, h1: "Monitor Models to find problem", p: "Get notified instantly when there are unexpected decision  taken by your ML Models" }
]