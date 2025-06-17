"use client";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateMessageForm() {
	const router = useRouter();
	const createMessage = useMutation(api.messages.create);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await createMessage({ title, content });
			setTitle("");
			setContent("");
		} catch (error) {
			console.error("メッセージの作成に失敗しました", error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full max-w-xl border-t border-gray-300 mt-8 pt-12"
		>
			<h2 className="text-xl font-bold text-center mb-8">
				メッセージを作成する
			</h2>
			<div className="flex items-center justify-center flex-col -mx-3 mb-6 gap-4">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="title"
					>
						タイトル
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="title"
						name="title"
						type="text"
						required
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="w-full md:w-1/2 px-3">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						htmlFor="content"
					>
						内容
					</label>
					<textarea
						className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="content"
						name="content"
						value={content}
						onChange={(e) => setContent(e.target.value)}
					/>
				</div>
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					type="submit"
				>
					作成する
				</button>
			</div>
		</form>
	);
}
