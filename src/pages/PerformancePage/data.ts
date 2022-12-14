import rec1 from '../../assets/rec1.png';
import rec2 from '../../assets/rec2.png';
import rec3 from '../../assets/rec3.png';

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