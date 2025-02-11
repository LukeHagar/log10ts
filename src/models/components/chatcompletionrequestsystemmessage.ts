/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The role of the messages author, in this case `system`.
 */
export enum Role {
    System = "system",
}

export type ChatCompletionRequestSystemMessage = {
    /**
     * The contents of the system message.
     */
    content: string;
    /**
     * The role of the messages author, in this case `system`.
     */
    role: Role;
    /**
     * An optional name for the participant. Provides the model information to differentiate between participants of the same role.
     */
    name?: string | undefined;
};

/** @internal */
export namespace Role$ {
    export const inboundSchema = z.nativeEnum(Role);
    export const outboundSchema = inboundSchema;
}

/** @internal */
export namespace ChatCompletionRequestSystemMessage$ {
    export const inboundSchema: z.ZodType<
        ChatCompletionRequestSystemMessage,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            content: z.string(),
            role: Role$.inboundSchema,
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                content: v.content,
                role: v.role,
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        content: string;
        role: string;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ChatCompletionRequestSystemMessage
    > = z
        .object({
            content: z.string(),
            role: Role$.outboundSchema,
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                content: v.content,
                role: v.role,
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
