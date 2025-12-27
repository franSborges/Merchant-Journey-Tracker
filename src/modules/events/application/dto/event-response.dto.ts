import { EventType } from "../enum/event";

export interface EventResponseDTO {
    id: string;
    merchant_id: string;
    type: EventType;
    occurred_at: string;
    created_at: string;
    metadata?: string;
}