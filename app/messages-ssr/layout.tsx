import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const MessagesLayout = async ({ children }: { children: React.ReactNode }) => {
	const { userId } = await auth();

	if (!userId) {
		redirect("/");
	}

	return <>{children}</>;
};

export default MessagesLayout;
