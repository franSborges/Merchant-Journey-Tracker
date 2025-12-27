import { EventType } from "../enum/event";

export interface CreateEventDTO {
    merchant_id: string;
    type: EventType;
    occurred_at: string;
    metadata?: string;
}