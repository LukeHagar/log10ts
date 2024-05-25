/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import * as z from "zod";

export type UploadGlobals = {
    xLog10Organization: string;
};

/**
 * The values of the feedback. Must be valid JSON according to the task schema.
 */
export type RequestBodyJsonValues = {};

export type Two = {
    /**
     * The unique identifier for this feedback.
     */
    id?: string | undefined;
    /**
     * The epoch this schema was created.
     */
    createdAtMs?: number | undefined;
    /**
     * The unique identifier for the task associated with this feedback.
     */
    taskId: string;
    /**
     * The values of the feedback. Must be valid JSON according to the task schema.
     */
    jsonValues: RequestBodyJsonValues;
    /**
     * The matched completion ids associated with this feedback.
     */
    matchedCompletionIds: Array<string>;
    /**
     * The comment associated with this feedback.
     */
    comment: string;
    completionsSummary?: string | undefined;
    /**
     * The completion ids to associate with this feedback.
     */
    completionIds: Array<string>;
};

/**
 * The values of the feedback. Must be valid JSON according to the task schema.
 */
export type JsonValues = {};

export type One = {
    /**
     * The unique identifier for this feedback.
     */
    id?: string | undefined;
    /**
     * The epoch this schema was created.
     */
    createdAtMs?: number | undefined;
    /**
     * The unique identifier for the task associated with this feedback.
     */
    taskId: string;
    /**
     * The values of the feedback. Must be valid JSON according to the task schema.
     */
    jsonValues: JsonValues;
    /**
     * The matched completion ids associated with this feedback.
     */
    matchedCompletionIds: Array<string>;
    /**
     * The comment associated with this feedback.
     */
    comment: string;
    completionsSummary?: string | undefined;
    /**
     * Whether to allow unmatched feedback. Defaults to false.
     */
    allowUnmatchedFeedback?: boolean | undefined;
    /**
     * The maximum number of matched completions. Returns error if exceeded. Defaults to 100.
     */
    maxMatchedCompletions?: number | undefined;
    /**
     * The completion tags associated with this feedback.
     */
    completionTagsSelector: Array<string>;
};

export type UploadRequestBody = Two | One;

export type UploadRequest = {
    xLog10Organization?: string | undefined;
    requestBody: Two | One;
};

export type UploadResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * OK
     */
    feedback?: components.Feedback | undefined;
};

/** @internal */
export namespace UploadGlobals$ {
    export const inboundSchema: z.ZodType<UploadGlobals, z.ZodTypeDef, unknown> = z
        .object({
            "X-Log10-Organization": z.string(),
        })
        .transform((v) => {
            return {
                xLog10Organization: v["X-Log10-Organization"],
            };
        });

    export type Outbound = {
        "X-Log10-Organization": string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadGlobals> = z
        .object({
            xLog10Organization: z.string(),
        })
        .transform((v) => {
            return {
                "X-Log10-Organization": v.xLog10Organization,
            };
        });
}

/** @internal */
export namespace RequestBodyJsonValues$ {
    export const inboundSchema: z.ZodType<RequestBodyJsonValues, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RequestBodyJsonValues> =
        z.object({});
}

/** @internal */
export namespace Two$ {
    export const inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
            created_at_ms: z.number().optional(),
            task_id: z.string(),
            json_values: z.lazy(() => RequestBodyJsonValues$.inboundSchema),
            matched_completion_ids: z.array(z.string()),
            comment: z.string(),
            completions_summary: z.string().optional(),
            completion_ids: z.array(z.string()),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.created_at_ms === undefined ? null : { createdAtMs: v.created_at_ms }),
                taskId: v.task_id,
                jsonValues: v.json_values,
                matchedCompletionIds: v.matched_completion_ids,
                comment: v.comment,
                ...(v.completions_summary === undefined
                    ? null
                    : { completionsSummary: v.completions_summary }),
                completionIds: v.completion_ids,
            };
        });

    export type Outbound = {
        id?: string | undefined;
        created_at_ms?: number | undefined;
        task_id: string;
        json_values: RequestBodyJsonValues$.Outbound;
        matched_completion_ids: Array<string>;
        comment: string;
        completions_summary?: string | undefined;
        completion_ids: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Two> = z
        .object({
            id: z.string().optional(),
            createdAtMs: z.number().optional(),
            taskId: z.string(),
            jsonValues: z.lazy(() => RequestBodyJsonValues$.outboundSchema),
            matchedCompletionIds: z.array(z.string()),
            comment: z.string(),
            completionsSummary: z.string().optional(),
            completionIds: z.array(z.string()),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.createdAtMs === undefined ? null : { created_at_ms: v.createdAtMs }),
                task_id: v.taskId,
                json_values: v.jsonValues,
                matched_completion_ids: v.matchedCompletionIds,
                comment: v.comment,
                ...(v.completionsSummary === undefined
                    ? null
                    : { completions_summary: v.completionsSummary }),
                completion_ids: v.completionIds,
            };
        });
}

/** @internal */
export namespace JsonValues$ {
    export const inboundSchema: z.ZodType<JsonValues, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JsonValues> = z.object({});
}

/** @internal */
export namespace One$ {
    export const inboundSchema: z.ZodType<One, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string().optional(),
            created_at_ms: z.number().optional(),
            task_id: z.string(),
            json_values: z.lazy(() => JsonValues$.inboundSchema),
            matched_completion_ids: z.array(z.string()),
            comment: z.string(),
            completions_summary: z.string().optional(),
            allow_unmatched_feedback: z.boolean().default(false),
            max_matched_completions: z.number().int().default(100),
            completion_tags_selector: z.array(z.string()),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.created_at_ms === undefined ? null : { createdAtMs: v.created_at_ms }),
                taskId: v.task_id,
                jsonValues: v.json_values,
                matchedCompletionIds: v.matched_completion_ids,
                comment: v.comment,
                ...(v.completions_summary === undefined
                    ? null
                    : { completionsSummary: v.completions_summary }),
                allowUnmatchedFeedback: v.allow_unmatched_feedback,
                maxMatchedCompletions: v.max_matched_completions,
                completionTagsSelector: v.completion_tags_selector,
            };
        });

    export type Outbound = {
        id?: string | undefined;
        created_at_ms?: number | undefined;
        task_id: string;
        json_values: JsonValues$.Outbound;
        matched_completion_ids: Array<string>;
        comment: string;
        completions_summary?: string | undefined;
        allow_unmatched_feedback: boolean;
        max_matched_completions: number;
        completion_tags_selector: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, One> = z
        .object({
            id: z.string().optional(),
            createdAtMs: z.number().optional(),
            taskId: z.string(),
            jsonValues: z.lazy(() => JsonValues$.outboundSchema),
            matchedCompletionIds: z.array(z.string()),
            comment: z.string(),
            completionsSummary: z.string().optional(),
            allowUnmatchedFeedback: z.boolean().default(false),
            maxMatchedCompletions: z.number().int().default(100),
            completionTagsSelector: z.array(z.string()),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.createdAtMs === undefined ? null : { created_at_ms: v.createdAtMs }),
                task_id: v.taskId,
                json_values: v.jsonValues,
                matched_completion_ids: v.matchedCompletionIds,
                comment: v.comment,
                ...(v.completionsSummary === undefined
                    ? null
                    : { completions_summary: v.completionsSummary }),
                allow_unmatched_feedback: v.allowUnmatchedFeedback,
                max_matched_completions: v.maxMatchedCompletions,
                completion_tags_selector: v.completionTagsSelector,
            };
        });
}

/** @internal */
export namespace UploadRequestBody$ {
    export const inboundSchema: z.ZodType<UploadRequestBody, z.ZodTypeDef, unknown> = z.union([
        z.lazy(() => Two$.inboundSchema),
        z.lazy(() => One$.inboundSchema),
    ]);

    export type Outbound = Two$.Outbound | One$.Outbound;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadRequestBody> = z.union([
        z.lazy(() => Two$.outboundSchema),
        z.lazy(() => One$.outboundSchema),
    ]);
}

/** @internal */
export namespace UploadRequest$ {
    export const inboundSchema: z.ZodType<UploadRequest, z.ZodTypeDef, unknown> = z
        .object({
            "X-Log10-Organization": z.string().optional(),
            RequestBody: z.union([
                z.lazy(() => Two$.inboundSchema),
                z.lazy(() => One$.inboundSchema),
            ]),
        })
        .transform((v) => {
            return {
                ...(v["X-Log10-Organization"] === undefined
                    ? null
                    : { xLog10Organization: v["X-Log10-Organization"] }),
                requestBody: v.RequestBody,
            };
        });

    export type Outbound = {
        "X-Log10-Organization"?: string | undefined;
        RequestBody: Two$.Outbound | One$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadRequest> = z
        .object({
            xLog10Organization: z.string().optional(),
            requestBody: z.union([
                z.lazy(() => Two$.outboundSchema),
                z.lazy(() => One$.outboundSchema),
            ]),
        })
        .transform((v) => {
            return {
                ...(v.xLog10Organization === undefined
                    ? null
                    : { "X-Log10-Organization": v.xLog10Organization }),
                RequestBody: v.requestBody,
            };
        });
}

/** @internal */
export namespace UploadResponse$ {
    export const inboundSchema: z.ZodType<UploadResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            Feedback: components.Feedback$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.Feedback === undefined ? null : { feedback: v.Feedback }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        Feedback?: components.Feedback$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UploadResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            feedback: components.Feedback$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.feedback === undefined ? null : { Feedback: v.feedback }),
            };
        });
}