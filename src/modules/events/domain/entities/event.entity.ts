import { EventType } from "../../application/enum/event";

export interface Event {
    id: string;
    merchant_id: string;
    type: EventType;
    occurred_at: Date;
    created_at: Date;
    metadata: string;
}