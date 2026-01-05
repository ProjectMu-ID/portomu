import Link from 'next/link'
import Image from 'next/image'
import { projects } from './data'

export const metadata = {
    title: 'Projects',
    description: 'Selected projects and case studies',
}

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-[#252525] px-4 py-20">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Projects
                    </h1>
                    <p className="text-gray-400 mt-3">
                        A selection of projects I have worked on
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group rounded-3xl overflow-hidden bg-white ring-1 ring-black/5 hover:ring-0 transition"
                        >
                            <div className="relative aspect-square">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-5 bg-black">
                                <h3 className="text-white font-semibold">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-1">
                                    {project.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}
