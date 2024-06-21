/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPMetadata, HTTPMetadata$ } from "./httpmetadata";
import { Task, Task$ } from "./task";
import * as z from "zod";

export type ListFeedbackTasksResponse = {
    httpMeta: HTTPMetadata;
    /**
     * OK
     */
    tasks?: Array<Task> | undefined;
};

/** @internal */
export namespace ListFeedbackTasksResponse$ {
    export const inboundSchema: z.ZodType<ListFeedbackTasksResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: HTTPMetadata$.inboundSchema,
            Tasks: z.array(Task$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Tasks === undefined ? null : { tasks: v.Tasks }),
            };
        });

    export type Outbound = {
        HttpMeta: HTTPMetadata$.Outbound;
        Tasks?: Array<Task$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ListFeedbackTasksResponse> = z
        .object({
            httpMeta: HTTPMetadata$.outboundSchema,
            tasks: z.array(Task$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.tasks === undefined ? null : { Tasks: v.tasks }),
            };
        });
}