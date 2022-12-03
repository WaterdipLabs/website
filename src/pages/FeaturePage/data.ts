import perform from '../../assets/perform.png';
import outlier from '../../assets/outlier.png';
import drift from '../../assets/drift.png';
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
    { id: 3, img: perform, h1: "Model Performance", p: "Observer ML model's performance is one of the key activity needs to be done in production AI system. With waterdip platform one can have the continuous observability of model's performance matrices like Confusion Matrix, Moving Accuracy, AUC/ROC, Gini, Precision/Recall etc." },
    { id: 4, img: outlier, h1: "Outlier detection", p: "New environment is full of unexpected inputs, that can cause outlier for predicted data. With waterdip finding and identifying outlier in data or prediction become seamless, so troubleshooting becomes easy for the ML engineers and Data Scientists" },
    { id: 5, img: drift, h1: "Drift detection", p: "Due to this drift, the model keeps becoming unstable and the predictions keep on becoming erroneous with time. With waterdip platform we can detect drift in Data and ML model." },
    { id: 6, img: perform, h1: "Model Performance", p: "Observer ML model's performance is one of the key activity needs to be done in production AI system. With waterdip platform one can have the continuous observability of model's performance matrices like Confusion Matrix, Moving Accuracy, AUC/ROC, Gini, Precision/Recall etc." },
    { id: 7, img: outlier, h1: "Outlier detection", p: "New environment is full of unexpected inputs, that can cause outlier for predicted data. With waterdip finding and identifying outlier in data or prediction become seamless, so troubleshooting becomes easy for the ML engineers and Data Scientists" },
    { id: 8, img: drift, h1: "Drift detection", p: "Due to this drift, the model keeps becoming unstable and the predictions keep on becoming erroneous with time. With waterdip platform we can detect drift in Data and ML model." },
]