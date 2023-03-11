import PlanResponse from "../../../../fetching/get/res/PlanResponse";

export default interface PricingPlan {
    plan: PlanResponse,
    features: FeatureType[],
    border: string
}

export interface FeatureType {
    name: string,
    color: string
}
