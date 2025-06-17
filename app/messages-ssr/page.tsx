import { getAuthToken } from "@/common/lib";
import CreateMessageForm from "@/components/CreateMessageForm";
import { MessagesList } from "@/components/MessagesList";
import { api } from "@/convex/_generated/api";
import { preloadQuery } from "convex/nextjs";
import { redirect } from "next/navigation";

export default async function MessagesPage() {
	const token = await getAuthToken();

	if (!token) {
		return redirect("/");
	}

	const preloadedMessages = await preloadQuery(
		api.messages.getAll,
		{},
		{ token },
	);

	return (
		<div className="h-screen flex items-center justify-center flex-col gap-y-4">
			<h1 className="text-2xl font-bold mb-4">メッセージ一覧</h1>
			<MessagesList preloaded={preloadedMessages} />
			<CreateMessageForm />
		</div>
	);
}
