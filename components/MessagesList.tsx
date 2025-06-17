"use client";

import type { api } from "@/convex/_generated/api";
import { type Preloaded, usePreloadedQuery } from "convex/react";
import React from "react";

export const MessagesList = (props: {
	preloaded: Preloaded<typeof api.messages.getAll>;
}) => {
	const messages = usePreloadedQuery(props.preloaded);

	return (
		<ul className="list-none gap-y-4 flex flex-col">
			{messages.map((message) => (
				<li
					key={message._id}
					className="flex gap-2 flex-col border border-gray-300 px-4 py-2 rounded-lg"
				>
					<div className="font-bold">{message.title}</div>
					<div className="ml-4">{message.content}</div>
				</li>
			))}
		</ul>
	);
};
