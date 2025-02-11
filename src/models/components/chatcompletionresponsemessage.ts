/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import {
    ChatCompletionMessageToolCall,
    ChatCompletionMessageToolCall$,
} from "./chatcompletionmessagetoolcall";
import * as z from "zod";

/**
 * The role of the author of this message.
 */
export enum ChatCompletionResponseMessageRole {
    Assistant = "assistant",
}

/**
 * Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
 *
 * @deprecated class: This will be removed in a future release, please migrate away from it as soon as possible.
 */
export type ChatCompletionResponseMessageFunctionCall = {
    /**
     * The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function.
     */
    arguments: string;
    /**
     * The name of the function to call.
     */
    name: string;
};

/**
 * A chat completion message generated by the model.
 */
export type ChatCompletionResponseMessage = {
    /**
     * The contents of the message.
     */
    content: string | null;
    /**
     * The tool calls generated by the model, such as function calls.
     */
    toolCalls?: Array<ChatCompletionMessageToolCall> | undefined;
    /**
     * The role of the author of this message.
     */
    role: ChatCompletionResponseMessageRole;
    /**
     * Deprecated and replaced by `tool_calls`. The name and arguments of a function that should be called, as generated by the model.
     *
     * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
     */
    functionCall?: ChatCompletionResponseMessageFunctionCall | undefined;
};

/** @internal */
export namespace ChatCompletionResponseMessageRole$ {
    export const inboundSchema = z.nativeEnum(ChatCompletionResponseMessageRole);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ChatCompletionResponseMessageFunctionCall$ {
    export const inboundSchema: z.ZodType<
        ChatCompletionResponseMessageFunctionCall,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            arguments: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                arguments: v.arguments,
                name: v.name,
            };
        });

    export type Outbound = {
        arguments: string;
        name: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ChatCompletionResponseMessageFunctionCall
    > = z
        .object({
            arguments: z.string(),
            name: z.string(),
        })
        .transform((v) => {
            return {
                arguments: v.arguments,
                name: v.name,
            };
        });
}

/** @internal */
export namespace ChatCompletionResponseMessage$ {
    export const inboundSchema: z.ZodType<ChatCompletionResponseMessage, z.ZodTypeDef, unknown> = z
        .object({
            content: z.nullable(z.string()),
            tool_calls: z.array(ChatCompletionMessageToolCall$.inboundSchema).optional(),
            role: ChatCompletionResponseMessageRole$.inboundSchema,
            function_call: z
                .lazy(() => ChatCompletionResponseMessageFunctionCall$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                content: v.content,
                ...(v.tool_calls === undefined ? null : { toolCalls: v.tool_calls }),
                role: v.role,
                ...(v.function_call === undefined ? null : { functionCall: v.function_call }),
            };
        });

    export type Outbound = {
        content: string | null;
        tool_calls?: Array<ChatCompletionMessageToolCall$.Outbound> | undefined;
        role: string;
        function_call?: ChatCompletionResponseMessageFunctionCall$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ChatCompletionResponseMessage> =
        z
            .object({
                content: z.nullable(z.string()),
                toolCalls: z.array(ChatCompletionMessageToolCall$.outboundSchema).optional(),
                role: ChatCompletionResponseMessageRole$.outboundSchema,
                functionCall: z
                    .lazy(() => ChatCompletionResponseMessageFunctionCall$.outboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return {
                    content: v.content,
                    ...(v.toolCalls === undefined ? null : { tool_calls: v.toolCalls }),
                    role: v.role,
                    ...(v.functionCall === undefined ? null : { function_call: v.functionCall }),
                };
            });
}
