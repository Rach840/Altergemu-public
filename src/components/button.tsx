
export default function ButtonHero({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<a href="#" className="rounded-md bg-gradient-to-r from-indigo-400 to-purple-600 px-3.5 py-2.5 text-lg font-semibold duration-200 text-white shadow-sm hover:bg-yellow-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
			{children}
		</a>
	)
}