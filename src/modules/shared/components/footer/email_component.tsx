export default function EmailComponent() {
    return <>
        <p className="text-2xl text-white pb-2">
            Send us an email
        </p>
        <div className="flex flex-col w-[70%]">
            <textarea placeholder="Enter your message" maxLength={200} className="p-2 rounded-lg rounded-ee-none h-24 resize-none" />
            <button className="bg-primary hover:bg-orange-400 w-[20%] mt-1 p-2 rounded-b-lg text-white ml-auto">
                Send
            </button>
        </div>
    </>
} 