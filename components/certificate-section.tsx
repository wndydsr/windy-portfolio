"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Award } from "lucide-react"

const certificates = [
	{
		title: "Career Essentials in Generative AI",
		issuer: "Microsoft & LinkedIn Learning",
		year: "2024",
		image: "/images/sertifikat-1.png",
		pdf: "/certificates/sertifikat1.pdf",
	},
	{
		title: "What is Generative AI?",
		issuer: "LinkedIn Learning",
		year: "2024",
		image: "/images/sertifikat-2.png",
		pdf: "/certificates/sertifikat2.pdf",
	},
    {
		title: "Database Design – Oracle Academy",
		issuer: "Oracle Academy",
		year: "2024",
		image: "/images/sertifikat-3.png",
		pdf: "/certificates/sertifikat3.pdf",
	},
	{
		title: "Database Programming with SQL",
		issuer: "Oracle Academy",
		year: "2024",
		image: "/images/sertifikat-4.png",
		pdf: "/certificates/sertifikat4.pdf",
	},
]

export default function CertificateSection() {
	const [selected, setSelected] = useState<null | typeof certificates[0]>(null)

	return (
		<section
			id="certificate"
			className="py-20 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 dark:from-neutral-900 dark:via-black dark:to-neutral-900"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
					Certificates
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{certificates.map((cert, idx) => (
						<motion.div
							key={idx}
							whileHover={{ scale: 1.03, y: -4 }}
							className="relative rounded-2xl overflow-hidden bg-white/10 shadow-lg border border-white/10 group cursor-pointer transition duration-300 flex flex-col"
							onClick={() => setSelected(cert)}
						>
							{/* Gambar Sertifikat */}
							<div className="relative h-40 md:h-48 w-full overflow-hidden bg-white flex items-center justify-center">
								<img
									src={cert.image}
									alt={cert.title}
									className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
								/>
								{/* Badge */}
								<span className="absolute top-2 right-2 bg-white/90 rounded-full p-1 shadow-lg shadow-yellow-400/40 ring-2 ring-yellow-200 flex items-center justify-center">
									<Award className="w-5 h-5 text-yellow-500" />
								</span>
							</div>

							{/* Info Sertifikat */}
							<div className="bg-purple-100/80 dark:bg-purple-900/80 px-5 pt-4 pb-3">
								<h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white mb-1 leading-tight">{cert.title}</h3>
								<div className="flex items-center justify-between text-xs md:text-sm text-purple-700 dark:text-purple-100/90">
									<span>{cert.issuer}</span>
									<span>{cert.year}</span>
								</div>
							</div>

							{/* Link ke PDF */}
							<a
								href={cert.pdf}
								target="_blank"
								rel="noopener"
								className="absolute inset-0"
								onClick={(e) => e.stopPropagation()}
								aria-label="View PDF"
							/>
						</motion.div>
					))}
				</div>

				{/* Modal Preview */}
				<AnimatePresence>
					{selected && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
							onClick={() => setSelected(null)}
						>
							<motion.div
								initial={{ scale: 0.95 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0.95 }}
								className="bg-white dark:bg-neutral-900 text-black dark:text-white rounded-2xl p-6 max-w-2xl w-full relative shadow-xl border"
								onClick={(e) => e.stopPropagation()}
							>
								<button
									className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-red-500"
									onClick={() => setSelected(null)}
									aria-label="Close"
								>
									<X className="w-6 h-6" />
								</button>

								<img
                                    src={selected.image}
                                    alt={selected.title}
                                    className="w-full h-auto max-h-[80vh] object-contain rounded-xl mb-4 shadow-md"
                                />
								<h3 className="font-bold text-lg mb-1">{selected.title}</h3>
								<p className="text-gray-500 dark:text-gray-300 text-sm mb-2">
									{selected.issuer}, {selected.year}
								</p>
								<a
									href={selected.pdf}
									target="_blank"
									rel="noopener"
									className="text-blue-600 dark:text-blue-400 underline text-sm"
								>
									View Full PDF
								</a>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	)
}
